"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

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
      <div className="flex flex-col gap-10 relative top-20">
      {posts.map(post =>(
        <div key={post.id} className="rounded-xl bg-white flex flex-col justify-center items-center">
          <Image src={post.media_url} alt={post.id} width={100} height={100} className="rounded-lg"/>
          <h1>{post?.caption}</h1>
        </div>
      ))}
      </div>
    </div>
  )
}