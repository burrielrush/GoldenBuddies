// Importing necessary dependencies and utility functions
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

// Resolver functions
const resolvers = {
    Query: {
        // Resolver for the 'me' query, which retrieves the logged-in user's data
        me: async (context) => {
            // Check if the user is authenticated (i.e., logged in)
            if (context.user) {
                // If authenticated, find the user data (excluding '__v' and 'password' fields) using the 'context.user._id'
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
                return userData;
            }
            // If not authenticated, throw an 'AuthenticationError' with a message indicating the user is not logged in
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        // Resolver for the 'addUser' mutation, which adds a new user to the database
        addUser: async (args) => {
            // Create a new user in the database using the 'args' input
            const user = await User.create(args);
            // Generate a token for the newly created user
            const token = signToken(user);
            // Return the generated token along with the new user's data
            return { token, user };
        },
        // Resolver for the 'login' mutation, which handles user login
        login: async ({ email, password }) => {
            // Find the user in the database using the provided email
            const user = await User.findOne({ email });

            // If the user does not exist, throw an 'AuthenticationError' with a message indicating incorrect credentials
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // Check if the provided password is correct using the 'isCorrectPassword' method of the user model
            const correctPw = await user.isCorrectPassword(password);

            // If the password is incorrect, throw an 'AuthenticationError' with a message indicating incorrect credentials
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // If the user is authenticated, generate a token for the user and return it along with the user data
            const token = signToken(user);
            return { token, user };
        },
        // Resolver for the 'saveBook' mutation, which saves a book for the logged-in user
        saveBook: async ({ input }, context) => {
            // Check if the user is authenticated (i.e., logged in)
            if (context.user) {
                // If authenticated, update the user's data to include the new book in the 'savedBooks' array
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: input } }, // Using '$addToSet' to avoid duplicate books in the array
                    { new: true, runValidators: true }
                );
                // Return the updated user data
                return updatedUser;
            }
            // If not authenticated, throw an 'AuthenticationError' with a message indicating the user needs to be logged in
            throw new AuthenticationError("You need to be logged in!");
        },
        // Resolver for the 'removeBook' mutation, which removes a book from the logged-in user's saved books
        removeBook: async ({ bookId }, context) => {
            // Check if the user is authenticated (i.e., logged in)
            if (context.user) {
                // If authenticated, update the user's data to remove the specified book from the 'savedBooks' array
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } }, // Using '$pull' to remove the book with the specified 'bookId'
                    { new: true, runValidators: true }
                );
                // Return the updated user data
                return updatedUser;
            }
            // If authentication fails, throw an 'AuthenticationError' with a message indicating the user needs to be logged in
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers;
