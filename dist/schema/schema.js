"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql `
  type User {
    firstName: String
    lastName: String
    email: String!
    password: String!
    role: String
    isActive: Boolean
  }
  type ValidationFieldError {
    field: String!
    errors: [String]!
  }

  type ValidationError {
    result: [ValidationFieldError]!
  }
  type SignUp {
    token: String!
  }

  type Error {
    error: String!
  }

  union SingUpType = SignUp | Error

  input IUser {
    firstName: String
    lastName: String
    email: String!
    password: String!
    role: String
    isActive: Boolean
  }

  type Query {
    testMessage: String!
    user: String!
  }
  type Mutation {
    signUp(input: IUser): SingUpType
    signIn(input: IUser): SingUpType
  }
`;
//# sourceMappingURL=schema.js.map