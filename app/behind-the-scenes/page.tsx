"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
type Props = {}

interface Post {
  id: string;
  caption: string;
  media_url: string;
}

export default function Page({}: Props) {
  const[posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch('/api/instagram_posts')
        .then(response => response.json())
        .then(data => {
            setPosts(data.feed.data)
        })
        .catch(error => {
            console.error(error);
        });
  }, [])
  
  return (
    <div className="bg-pink-50 rounded-2xl m-2.5 p-4 min-h-[97vh]">
      {posts.length === 0 ?
      <div className="flex justify-center items-center h-96">
        <ClipLoader color="#36d7b7" />
      </div>
      :  
      <div className="flex flex-col gap-10 relative top-20 mb-20">
      {posts.map(post =>{
        const isVideo = post.media_url.includes("mp4");
        
        return (
        <div key={post.id} className="rounded-xl bg-white max-w-[400px] flex flex-col justify-center items-center p-4">
          {!isVideo ? 
          <img src={post.media_url} alt={post.id} className="rounded-lg"/>
          : 
          <video controls src={post.media_url}/>}
        <h1>{post?.caption}</h1>
        </div>
          );
      })}
      </div>
      }
    </div>
  )
}