import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(content: $content) {
      _id
      content
      author {
        _id
        username
      }
      likes
      createdAt
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: String!) {
    likePost(postId: $postId) {
      _id
      content
      author {
        _id
        username
      }
      likes
      createdAt
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: String!) {
    addFriend(friendId: $friendId) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;

export const DELETE_FRIEND = gql`
  mutation deleteFriend($friendId: String!) {
    deleteFriend(friendId: $friendId) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;