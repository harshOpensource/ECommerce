import { Order, OrderInput } from "../types";
import { PrismaClient } from "@prisma/client";
import { Review, Product, ProductInput } from "../types";
import { getServerSession } from "next-auth";
const Prisma = new PrismaClient();
export const resolvers = {
  Query: {
    getProducts: async () => {
      const products = await Prisma.product.findMany();
      return products;
    },
    getOrders: async () => {
      const orders = await Prisma.order.findMany();
      return orders;
    },
    getUsers: async () => {
      const users = await Prisma.user.findMany();
      return users;
    },
  },
  Mutation: {
    createProduct: async (_: any, { input }: { input: ProductInput }) => {
      const product = await Prisma.product.create({
        data: input,
      });
      return product;
    },
    deleteProduct: async (_: any, { id }: { id: string }) => {
      const product = await Prisma.product.delete({
        where: {
          id,
        },
      });
      return product;
    },
    updateProduct: async (
      _: any,
      { id, input }: { id: string; input: ProductInput }
    ) => {
      const product = await Prisma.product.update({
        where: {
          id,
        },
        data: input,
      });
      return product;
    },
    /* orders */
    createOrder: async (
      _: any,
      {
        userId,
        products,
        total,
      }: { userId: string; total: number; products: any[] }
    ) => {
      const user = await Prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      let productIds: any = [];
      for (let i = 0; i < products.length; i++) {
        productIds.push(products[i].id);
      }
      const allProducts = await Prisma.product.findMany({
        where: {
          id: {
            in: productIds,
          },
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      const order = await Prisma.order.create({
        data: {
          total: total,
          userId,
          products: {
            connect: allProducts.map((product: any) => ({ id: product.id })),
          },
        },
        include: {
          products: true,
          user: true,
        },
      });
      return order;
    },

    changeUserRole: async (_: any, { userId }: { userId: string }) => {
      const user = await Prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const newRole = user.role === "user" ? "admin" : "user";

      const updatedUser = await Prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          role: newRole,
        },
      });

      return updatedUser;
    },

    deleteUser: async (_: any, { userId }: { userId: string }) => {
      const user = await Prisma.user.delete({
        where: {
          id: userId,
        },
      });
      return user;
    },
  },
};
