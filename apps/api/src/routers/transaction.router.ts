import { Router } from 'express';
import TransactionController from '../controllers/transaction.controller';

class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.router = Router();
    this.transactionController = new TransactionController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', (req, res) => this.transactionController.create(req, res));
    this.router.get('/', (req, res) => this.transactionController.getAll(req, res));
    this.router.get('/:transactionId', (req, res) => this.transactionController.getById(req, res));
    this.router.delete('/:transactionId', (req, res) => this.transactionController.delete(req, res));
  }

  getRouter() {
    return this.router;
  }
}

export default TransactionRouter;
