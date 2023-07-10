export async function GET(request: Request) {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();
  // console.log(feed); 
  
  // const two = `https://graph.instagram.com/me?fields=id,username,picture&access_token=${process.env.INSTAGRAM_KEY}`
  // const data2 = await fetch(two);
  // const feed2 = await data2.json();
  // console.log('2', feed2); 
    return new Response(JSON.stringify({feed}));
    
}
