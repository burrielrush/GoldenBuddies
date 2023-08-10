import React, { useEffect, useState } from 'react';
import "../styles/Home.css";

function Home() {
    const [posts, setPosts] = useState([]);

    // Function to fetch friends' posts from the server (replace with your actual API call)
    const getFriendsPosts = async () => {
        try {
            const response = await fetch('');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching friends posts:', error);
        }
    };

    useEffect(() => {
        // Fetch friends' posts when the component mounts
        getFriendsPosts();
    }, []);

    return (
        <div className="home">
            <h1>Welcome to Golden Buddies!</h1>
            <p>This is the social media app for Golden Retrievers!</p>

            {/* Render the feed of friends' posts */}
            <div className="post-feed">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>Posted by: {post.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
