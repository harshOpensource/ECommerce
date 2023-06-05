import { OrderInput } from "../types";
import { ProductInput } from "../types";
import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Mutation {
    createProduct(input: ProductInput!): Product!
    deleteProduct(id: ID!): Product!
    updateProduct(id: ID!, input: ProductInput!): Product!
    createOrder(userId: String!, total: Int!, products: [OrderInput]!): Order!
    changeUserRole(userId: String!): User!
    deleteUser(userId: String): User!
  }

  input OrderInput {
    id: String!
    name: String!
    price: Int!
    image: [String!]
    category: String!
    quantity: Int!
  }
  input ProductInput {
    name: String!
    description: String!
    price: Int!
    image: [String!]
    category: String!
    quantity: Int!
  }
  input Product {
    id: ID!
    name: String!
    description: String!
    price: Int!
    image: [String!]
    category: String!
    quantity: Int!
    reviews: [Review!]!
    order: Order!
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Int!
    image: [String!]
    category: String!
    quantity: Int!
    reviews: [Review!]!
    order: Order!
  }
  type Review {
    id: ID!
    rating: Int!
    comment: String!
    product: Product!
  }
  type Order {
    id: ID!
    total: Int!
    products: [Product!]!
    userId: String!
  }
  type User {
    id: String!
    email: String!
    image: String!
    name: String!
    role: String!
  }
  type Query {
    getProducts: [Product!]!
    getOrders: [Order!]!
    getUsers: [User!]!
  }
`;
