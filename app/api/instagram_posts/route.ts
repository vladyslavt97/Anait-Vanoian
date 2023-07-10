export async function GET(request: Request) {
  const url = `https://graph.instagram.com/me/media?fields=id,profile_picture_url,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();
  // console.log(feed); 
  
    return new Response(JSON.stringify({feed}));
    
}
