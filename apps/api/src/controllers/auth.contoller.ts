import { Request, Response } from 'express';
import AuthAction from '../actions/auth.action';

class AuthController {
  private authAction: AuthAction;
  verifyEmail: any;

  constructor() {
    this.authAction = new AuthAction();
  }

  async register(req: Request, res: Response) {
    try {
      const { username, email, password, roleId } = req.body;
      const tokens = await this.authAction.registerUser(username, email, password, roleId);
      res.status(201).json(tokens);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const tokens = await this.authAction.loginUser(email, password);
      res.status(200).json(tokens);
    } catch (error) {
      res.status(400).json({ message:"error.message" });
    }
  }

 
}

export default AuthController;
