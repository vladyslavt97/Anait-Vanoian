import fs from 'fs';


export async function GET(request: Request) {
    console.log(fs.readdirSync("./public/gallery"));
    const arrImages = fs.readdirSync("./public/gallery");
    return new Response(JSON.stringify({arrImages}));
}
