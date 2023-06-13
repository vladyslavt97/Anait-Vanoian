import fs from 'fs';

export async function GET(request: Request) {
    try {
        
    const arrImages = fs.readdirSync("./public/gallery/modelling")
    console.log(arrImages.length);
    
    return new Response(JSON.stringify({arrImages}));
    } catch (error) {
        console.log('e', error);
    }

}
