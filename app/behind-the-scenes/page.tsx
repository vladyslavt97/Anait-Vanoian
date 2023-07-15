"use client"
import Image from "next/image";
import Link from "next/link";
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
            setPosts(data.filtered)
        })
        .catch(error => {
            console.error(error);
        });
  }, [])
  
  return (
    <div className="bg-pink-50 rounded-2xl m-2.5 p-4 min-h-[97vh]">
      <div className="relative top-12">
        <h1>My daily life...</h1>
        <div className="flex flex-row justify-center items-center">
        <Image src="/avatar.jpeg" alt="avatar" width={50} height={50} className="rounded-full p-2 "/>
        <Link href="https://www.instagram.com/hanna_kelemen_/"><button className="bg-gray-200 px-5 py-2 font-bold rounded-xl h-8 flex items-center">Follow</button></Link>
        </div>
      </div>
      {posts.length === 0 ?
      <div className="flex justify-center items-center h-96">
        <ClipLoader color="#36d7b7" />
      </div>
      :  
      <div className="flex flex-col gap-10 relative top-20 mb-20">
      {posts.map(post =>{
        const isVideo = post.media_url.includes("mp4");
        // 
        // let att = post.caption.indexOf("@");
        // let space = post.caption.indexOf(" ", att);
        // console.log(space);
        
        // const partBefore = post.caption.slice(0, att)
        // const partAfter = post.caption.slice(att, space)
        // const partAftert = post.caption.slice(space)
        // console.log(partBefore);
        
        

        
        return (
        <div key={post.id} className="rounded-xl bg-white max-w-[400px] flex flex-col justify-center items-center p-4">
          {!isVideo ? 
          <img src={post.media_url} alt={post.id} className="rounded-lg"/>
          : 
          <video controls src={post.media_url} className="rounded-xl"/>}
        <h1>{post?.caption}</h1>
        {/* <div className=" text-left flex flex-col justify-start items-start">
            <h1>{partBefore}</h1>
            <h1 className="text-blue-600">{partAfter}</h1>
            <h2>{partAftert}</h2>
        </div> */}
        
        </div>
          );
      })}
      </div>
      }
    </div>
  )
}