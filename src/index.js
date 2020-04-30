import React from 'react';
import ReactDOM from 'react-dom';
import YouTubePost from './components/YouTubePost';

const YouTube = [
  { id: 1, content: "6JwEYamjXpA",likes: 0 },
  { id: 2, content: "OT-qAQLGkGo",likes: 0 },
  { id: 3, content: "bVG2OQp6jEQ",likes: 0 }
];

// EXERCISE: Load various YouTube video ids from an Array and display these YouTube videos
// using map and a <YouTube /> Component
// EXTRAS: Can you pass a Like counter and a Like button for each video?

function App() {
  return (
    <>
    
      <h1>Videos:</h1>
      
      <h2>YouTube Video</h2>
      {YouTube.map(function (youtube) {
        // var img = $("#targetImage img:first");
        // img.attr("src", "https://www.youtube.com/embed/" + img.attr("src"));
        return <YouTubePost content={youtube.content} key={youtube.id} likes={youtube.likes}/>
      })}

    </>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);