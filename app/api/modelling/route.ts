import supabase from "@/lib/supabase";

function extractNumberFromUrl(url: any) {
  const regex = /\/(\d+)\.\w+$/;
  const match = url.match(regex);
  if (match) {
    const numberString = match[1];
    return parseInt(numberString);
  }
  return 0;
}

function sortByNumberBeforeExtension(a:any, b:any) {
  const numberA = extractNumberFromUrl(a);
  const numberB = extractNumberFromUrl(b);
  return numberA - numberB;
}




export async function GET(request: Request) {
  const publicUrls = [];
  //first under 100
    const { data: files1, error } = await supabase.storage
    .from('hanna')
    .list("modelling/modelling1");

    if (error) {
        console.error('Error fetching file metadata:', error);
        return [];
    } else {
    
    
    const publicUrls1 = await Promise.all(
    files1.map(async (file) => {
      const { data: { publicUrl } } = await supabase.storage
        .from('hanna/modelling/modelling1')
        .getPublicUrl(file.name);
        return publicUrl;
    })
  );


  //second under 100
  let publicUrls2: string[] = [];
  const { data: files2 } = await supabase.storage
    .from('hanna')
    .list("modelling/modelling2");
  
    if (files2 !== null) {
      publicUrls2 = await Promise.all(
        files2.map(async (file) => {
          const { data: { publicUrl } } = await supabase.storage
          .from('hanna/modelling/modelling2')
          .getPublicUrl(file.name);
          return publicUrl;
        })
      );
    } 
    
    //third under 100
    let publicUrls3: string[] = [];
    const { data: files3 } = await supabase.storage
    .from('hanna')
    .list("modelling/modelling3");
    
    if (files3 !== null) {
      publicUrls3 = await Promise.all(
      files3.map(async (file) => {
        const { data: { publicUrl } } = await supabase.storage
        .from('hanna/modelling/modelling3')
        .getPublicUrl(file.name);
        return publicUrl;
      })
      );
    }

    // sorting
    publicUrls1.sort(sortByNumberBeforeExtension);

    //creating a new array
    publicUrls.push(...publicUrls1)
    publicUrls.push(...publicUrls2)
    publicUrls.push(...publicUrls3)

    return new Response(JSON.stringify({publicUrls}));
    }
}
