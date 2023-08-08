import { gql } from '@apollo/client';

// Query operation for fetching user data for the currently logged-in user
export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            authors
            image
        }
    }
}
`;