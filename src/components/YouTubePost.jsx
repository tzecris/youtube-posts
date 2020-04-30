import React, { useState } from 'react';
import './YouTubePost.css';



export function YouTubePost(props) {
  const [likes, setLikes] = useState(props.likes);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="youtube">
      <h1>Posts</h1>
      <iframe width="200" height="100" src={"https://www.youtube.com/embed/" + props.content} allowfullscreen></iframe>
      <p><span>Likes: {likes}</span></p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default YouTubePost;