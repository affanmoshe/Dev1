import { Request, Response } from 'express';
import TransactionAction from '../actions/transaction.action';

class TransactionController {
  private transactionAction: TransactionAction;

  constructor() {
    this.transactionAction = new TransactionAction();
  }

  async create(req: Request, res: Response) {
    try {
      const { userId, productId, totalAmount } = req.body;
      const transaction = await this.transactionAction.createTransaction(userId, productId, totalAmount);
      res.status(201).json(transaction);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const transactions = await this.transactionAction.getAllTransactions();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { transactionId } = req.params;
      const transaction = await this.transactionAction.getTransactionById(Number(transactionId));
      res.status(200).json(transaction);
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { transactionId } = req.params;
      await this.transactionAction.deleteTransaction(Number(transactionId));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: "error.message" });
    }
  }
}

export default TransactionController;
