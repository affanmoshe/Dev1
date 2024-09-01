import prisma from '../prisma';

class ProductAction {
  async createProduct(name: string, description: string, price: number) {
    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          description,
          price,
          sellerId: `some-seller-id`
        },
      });
      return newProduct;
    } catch (error) {
      throw error;
    }
  }

  async getAllProducts() {
    try {
      return await prisma.product.findMany();
    } catch (error) {
      throw error;
    }
  }

  async getProductById(productId: number) {
    try {
      return await prisma.product.findUnique({
        where: { id: productId },
      });
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId: number, data: any) {
    try {
      return await prisma.product.update({
        where: { id: productId },
        data,
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId: number) {
    try {
      return await prisma.product.delete({
        where: { id: productId },
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ProductAction;
