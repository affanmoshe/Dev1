import { compare, genSalt, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import prisma from '../prisma';
import { ACCESS_TOKEN_SECRET, EMAIL_VERIFICATION_SECRET, REFRESH_TOKEN_SECRET } from '../config';
import { transporter } from '@/libs/nodemailer';
import { verify } from 'jsonwebtoken';

class AuthAction {
  async registerUser(username: string, email: string, password: string, roleId: number = 1) {
    try {
      const existingUser = await prisma.user.findFirst({
        where: { OR: [{ name: username }, { email }] },
      });
      if (existingUser) throw new Error('Username or email is already in use.');

      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      const newUser = await prisma.user.create({
        data: {
          name: username,
          email,
          password: hashedPassword,
          roleId,
        },
      });

      await this.sendVerificationEmail(newUser.email);

      return this.generateTokens(newUser);
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (!user) throw new Error('User not found.');

      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) throw new Error('Invalid password.');

      return this.generateTokens(user);
    } catch (error) {
      throw error;
    }
  }

  async verifyEmail(token: string) {
    try {
      const decoded: any = sign.verify(token, EMAIL_VERIFICATION_SECRET);
      const user = await prisma.user.update({
        where: { email: decoded.email },
        data: { isVerified: true },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async sendVerificationEmail(email: string) {
    try {
      const verifyToken = sign({ email }, EMAIL_VERIFICATION_SECRET, { expiresIn: '1h' });
      const verificationLink = `${process.env.FRONTEND_URL}/verify?token=${verifyToken}`;

      await transporter.sendMail({
        to: email,
        subject: 'Email Verification',
        html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
      });
    } catch (error) {
      throw error;
    }
  }

  private generateTokens(user: any) {
    const payload = { id: user.id, email: user.email, role: user.roleId };

    const accessToken = sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = sign({ id: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    return { accessToken, refreshToken };
  }
}

export default AuthAction;
