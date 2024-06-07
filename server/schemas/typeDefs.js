// Function to parse the schema definitions into the Apollo Server
const { gql } = require('apollo-server');

const typeDefs = gql`
  type TShirt {
    id: ID!
    name: String!
    size: String!
    color: String!
    price: Float!
  }

  type Pants {
    id: ID!
    name: String!
    size: String!
    color: String!
    price: Float!
  }

  type Product {
    id: ID!
    name: String!
    category: String!
    price: Float!
    stock: Int!
  }

  type Sweater {
    id: ID!
    name: String!
    size: String!
    color: String!
    price: Float!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    orders: [Order!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Order {
    id: ID!
    products: [Product!]!
    total: Float!
    user: User!
    status: String!
  }

  type Query {
    tShirts: [TShirt!]!
    pants: [Pants!]!
    products: [Product!]!
    sweaters: [Sweater!]!
    users: [User!]!
    categories: [Category!]!
    orders: [Order!]!
  }

  type Mutation {
    addTShirt(name: String!, size: String!, color: String!, price: Float!): TShirt!
    addPants(name: String!, size: String!, color: String!, price: Float!): Pants!
    addProduct(name: String!, category: String!, price: Float!, stock: Int!): Product!
    addSweater(name: String!, size: String!, color: String!, price: Float!): Sweater!
    addUser(username: String!, email: String!): User!
    addCategory(name: String!): Category!
    addOrder(products: [ID!]!, total: Float!, user: ID!, status: String!): Order!
  }
`;

module.exports = typeDefs;
