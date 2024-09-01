import { Router } from 'express';
import ProductController from '../controllers/product.controller';

class ProductRouter {
  private router: Router;
  private productController: ProductController;

  constructor() {
    this.router = Router();
    this.productController = new ProductController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', (req, res) => this.productController.create(req, res));
    this.router.get('/', (req, res) => this.productController.getAll(req, res));
    this.router.get('/:productId', (req, res) => this.productController.getById(req, res));
    this.router.put('/:productId', (req, res) => this.productController.update(req, res));
    this.router.delete('/:productId', (req, res) => this.productController.delete(req, res));
  }

  getRouter() {
    return this.router;
  }
}

export default ProductRouter;
