const { gql } = require('apollo-server-express');


// Defining the GraphQL schema using the 'gql' template literal
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID
        user: User
    }
    
    input SavedBookInput {
        authors: [String]
        title: String
        description: String
        bookId: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SavedBookInput): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;