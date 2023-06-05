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
