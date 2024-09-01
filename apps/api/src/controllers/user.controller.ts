import { Request, Response } from 'express';
import UserAction from '../actions/user.action';

class UserController {
  private userAction: UserAction;

  constructor() {
    this.userAction = new UserAction();
  }

  async create(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const user = await this.userAction.createUser(username, email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await this.userAction.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = await this.userAction.getUserById(Number(userId));
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const user = await this.userAction.updateUser(Number(userId), req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      await this.userAction.deleteUser(Number(userId));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }
}

export default UserController;
