import fs from 'fs';

export async function GET(request: Request) {
    const arrImages = fs.readdirSync("./public/gallery/modelling");
    return new Response(JSON.stringify({arrImages}));
}
