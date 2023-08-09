import React from 'react';
const SinglePost = () => {
    return (
        <div className="post">
            <h1 className="post-title">{post.username}</h1>
            <div className="post-img">{post.image} </div>
{/* post.image might need to go in the href of an image tag since its being imported as a URL */}
            <p className="post-description">{post.description}</p>
            <div className="post-likes">{post.likes}</div>
            {/* <div className="like-button">import icon</div> */}
            <div className="post-comments">{post.comments}</div>
            <div className="post-date">{post.date}</div>
         </div>
    );
}
 export default SinglePost;