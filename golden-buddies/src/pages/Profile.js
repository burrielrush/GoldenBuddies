import React from 'react';
import '../styles/Profile.css';


const Profile = () => {
  const user = {
    name: 'John Doe',
    username: 'johndoe',
    bio: 'Dog lover and adventurer.',
    followers: 500,
    following: 300,
    posts: [
      { id: 1, content: 'My dog enjoying the beach!', image: 'https://example.com/image1.jpg' },
      { id: 2, content: 'Morning walk with my furry friend.', image: 'https://example.com/image2.jpg' },
      // Add more posts as needed
    ],
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>

      <h3>Posts</h3>
      {user.posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <img src={post.image} alt={`Post ${post.id}`} />
        </div>
      ))}
    </div>
  );
};

export default Profile;
