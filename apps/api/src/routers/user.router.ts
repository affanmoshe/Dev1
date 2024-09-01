import { Router } from 'express';
import UserController from '../controllers/user.controller';

class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', (req, res) => this.userController.create(req, res));
    this.router.get('/', (req, res) => this.userController.getAll(req, res));
    this.router.get('/:userId', (req, res) => this.userController.getById(req, res));
    this.router.put('/:userId', (req, res) => this.userController.update(req, res));
    this.router.delete('/:userId', (req, res) => this.userController.delete(req, res));
  }

  getRouter() {
    return this.router;
  }
}

export default UserRouter;
