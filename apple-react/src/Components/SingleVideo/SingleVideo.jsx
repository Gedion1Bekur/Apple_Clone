


import { useEffect, useState } from "react";
import { YoutubeVideos } from "../YoutubeVideos/YoutubeVideos";


  



export default function SingleVideo() {
 const [dat, setData]=useState([]);
   useEffect(() => {
   
     async function getVideos() {
      const response = await fetch("./data.json");
      const res= await response.json();
     const result=res.items;
     setData(result)
    // console.warn(Data)
 
      
     };
      getVideos();
     
   }, []);
console.log(dat)
  return (
    <>
      <h1 className="text-center">All IPhones</h1>
      <div className="py-5 container  px-5 t">
        <div className="row justify-content-center test ">
          {dat?.map((items, index) => {
            return <YoutubeVideos key={index} items={items} />;
          })}
        </div>
      </div>
    </>
  );
}
