type FeedElement = {
  caption: string;
  // Other properties of a FeedElement
};

export async function GET(request: Request) {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  const filtered = feed.data.filter((el: FeedElement) => {
  if (el.caption && el.caption.includes("@")) {
    return true;
  }
  return false;
});

    return new Response(JSON.stringify({filtered}));
    
}
