import prisma from '../prisma';

class UserAction {
  async createUser(username: string, email: string, password: string) {
    try {
      return await prisma.user.create({
        data: {
          name: username,
          email,
          password,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId: number) {
    try {
      return await prisma.user.findUnique({
        where: { id: userId },
      });
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId: number, data: any) {
    try {
      return await prisma.user.update({
        where: { id: userId },
        data,
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId: number) {
    try {
      return await prisma.user.delete({
        where: { id: userId },
      });
    } catch (error) {
      throw error;
    }
  }
}

export default UserAction;
