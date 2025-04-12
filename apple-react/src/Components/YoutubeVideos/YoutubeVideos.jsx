// import { useState, useEffect } from "react";

import "./YoutubeVideos.css";

export function YoutubeVideos(props) {
  // const [youtubeVideo, setVideos] = useState([]);
  // console.log(youtubeVideo)
  // useEffect(() => {
  //   async function getVideos() {
  //     const response = await fetch("/data.json");
  //     const result = await response.json();
  //     let dataa = result.items;
  //     setVideos(dataa);
  //   }

  //   getVideos();
  // }, []);

  // const {description=desc, thumbnails=thumb, title}=props.items.snippet

  // const {
  //   props.items.snippet.thumbnails.high.url,
  // }
  console.log(props.items.id.videoId);
  return (
    <>
      <div className="col-sm-12 col-md-4 mx-0 mb-4  ">
        <div className="card overflow-hidden h-100 shadow">
          <img
            className="card-img-top"
            src={props.items.snippet.thumbnails.high.url}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{props.items.snippet.title}</h5>
            <p className="card-text">{props.items.snippet.description}</p>
           
            <a class="btn btn-primary" href={`https://www.youtube.com/watch?v=${props.items.id.videoId}`} role="button">
            Watch Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// channelId
// :

// channelTitle
// :

// description
// :
// liveBroadcastContent
// :

// publishTime
// :

// publishedAt
// :

// thumbnails
// :

// title
