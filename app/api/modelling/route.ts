import supabase from "@/lib/supabase";

 function extractNumberFromUrl(url: any) {
  const regex = /\/(\d+)\.\w+$/;
  const match = url.match(regex);
  
  if (match) {
    const numberString = match[1];
    return parseInt(numberString);
  }
  
  return 0; // Return 0 if no number is found
}

function sortByNumberBeforeExtension(a:any, b:any) {
  const numberA = extractNumberFromUrl(a);
  const numberB = extractNumberFromUrl(b);

  return numberA - numberB;
}

export async function GET(request: Request) {
  //first under 100
    const { data: files, error } = await supabase.storage
    .from('hanna')
    .list("modelling/modelling1");

    if (error) {
        console.error('Error fetching file metadata:', error);
        return [];
    } else {
    
    
    const publicUrls = await Promise.all(
    files.map(async (file) => {
      const { data: { publicUrl } } = await supabase.storage
        .from('hanna/modelling/modelling1')
        .getPublicUrl(file.name);

        
        console.log('publicUrls:', typeof publicUrl);
        return publicUrl;
    })
  );


  //second under 100
  

  //third under 100



    const sortedUrls = publicUrls.sort(sortByNumberBeforeExtension);
    return new Response(JSON.stringify({publicUrls}));
    }
}
