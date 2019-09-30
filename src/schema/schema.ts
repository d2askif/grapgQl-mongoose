import { gql } from "apollo-server";
export default gql`
  enum Role {
    ADMIN
    USER
  }
  type User {
    firstName: String
    lastName: String
    email: String!
    password: String
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

  input IUser {
    firstName: String
    lastName: String
    email: String!
    password: String!
    role: Role
    isActive: Boolean
  }

  input IChangePassword {
    oldPassword: String!
    newPassword: String!
  }

  input Login {
    email: String!
    password: String!
  }

  union SingUpType = SignUp | Error

  type Query {
    testMessage: String!
    user: String!
    listUsers: [User]
  }

  type Mutation {
    signUp(input: IUser): SingUpType
    signIn(input: Login): SingUpType
    changePassword(input: IChangePassword): Boolean
  }
`;
