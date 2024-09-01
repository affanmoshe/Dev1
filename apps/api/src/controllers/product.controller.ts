import { Request, Response } from 'express';
import ProductAction from '../actions/product.action';

class ProductController {
  private productAction: ProductAction;

  constructor() {
    this.productAction = new ProductAction();
  }

  async create(req: Request, res: Response) {
    try {
      const { name, description, price } = req.body;
      const product = await this.productAction.createProduct(name, description, price);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const products = await this.productAction.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      const product = await this.productAction.getProductById(Number(productId));
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      const product = await this.productAction.updateProduct(Number(productId), req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      await this.productAction.deleteProduct(Number(productId));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default ProductController;
