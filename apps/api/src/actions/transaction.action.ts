import prisma from '../prisma';

class TransactionAction {
  async createTransaction(userId: number, productId: number, totalAmount: number) {
    try {
      return await prisma.transaction.create({
        data: {
          userId,
          productId,
          totalAmount,
        } as any,
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllTransactions() {
    try {
      return await prisma.transaction.findMany();
    } catch (error) {
      throw error;
    }
  }

  async getTransactionById(transactionId: number) {
    try {
      return await prisma.transaction.findUnique({
        where: { id: transactionId },
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteTransaction(transactionId: number) {
    try {
      return await prisma.transaction.delete({
        where: { id: transactionId },
      });
    } catch (error) {
      throw error;
    }
  }
}

export default TransactionAction;
