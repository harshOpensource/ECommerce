import { ProductInput } from "./../../server/src/types";
import { useMutation, gql } from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
      id
      name
      description
      price
      image
      category
      quantity
    }
  }
`;

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    getProducts {
      id
      name
      description
      price
      image
      category
      quantity
    }
  }
`;

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder(
    $userId: String!
    $products: [ProductInput]!
    $total: Float!
  ) {
    createOrder(userId: $userId, products: $products, total: $total) {
      id
      total
    }
  }
`;

export const GET_USERS = gql`
  query {
    getUsers {
      id
      email
      image
      name
      role
    }
  }
`;

export const CHANGE_USER_ROLE = gql`
  mutation ChangeUserRole($userId: String!) {
    changeUserRole(userId: $userId) {
      id
      email
      name
      role
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($userId: String!) {
    deleteUser(userId: $userId) {
      id
      email
      name
      role
    }
  }
`;
