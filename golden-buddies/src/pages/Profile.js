import React from 'react';
import '../styles/Profile.css';
import GoldenImage from '../images/Golden.jpg';
import WalkerPawnson from '../images/WalkerPawnson.jpeg';
import BarkTwain from '../images/BarkTwain.jpeg';
import PawstinSmith from '../images/PawstinSmith.jpeg';

const Profile = () => {
  const user = {
    image: BarkTwain,
    name: 'Bark Twain',
    username: 'goodestboy',
    bio: 'Human lover and adventurer.',
    followers: 500,
    following: 300,
    posts: [
      { id: 1, content: 'My first walk, I was the best boy and only ate 1 butterfly!', image: PawstinSmith },
      { id: 2, content: 'Morning walk.', image: WalkerPawnson },
      // Add more posts as needed
    ],
  };

  return (
    <div className="profile">
      <img src={user.image} alt={`${user.username}'s profile`} className="profile-image" />
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>

      <h3>Posts</h3>
      {user.posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <img src={post.image} alt={`Post ${post.id}`} className="post-image" />
        </div>
      ))}
    </div>
  );
};

export default Profile;
