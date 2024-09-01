import { Router } from 'express';
import AuthController from '@/controllers/auth.contoller';

class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/register', (req, res) => this.authController.register(req, res));
    this.router.post('/login', (req, res) => this.authController.login(req, res));
    this.router.get('/verify-email', (req, res) => this.authController.verifyEmail(req, res));
  }

  getRouter() {
    return this.router;
  }
}

export default AuthRouter;
