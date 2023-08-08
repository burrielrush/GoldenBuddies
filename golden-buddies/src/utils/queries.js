import { gql } from '@apollo/client';

// Query operation for fetching user data for the currently logged-in user
export const GET_ME = gql`
  query getMe {
    me {
      _id
      username
      email
      postCount 
      posts {   
        _id
        content
        likes
        createdAt
      }
      friends { // Assuming you have a field for fetching the user's friends
        _id
        username
      }
    }
  }
`;
