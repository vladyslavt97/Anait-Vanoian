import supabase from "@/lib/supabase";


export async function GET(request: Request) {
  let publicUrls1: string[] = [];
  const { data: files1 } = await supabase.storage
  .from('hanna')
  .list("films/film1");
  
  if (files1 !== null) {
    publicUrls1 = await Promise.all(
    files1.map(async (file) => {
      const { data: { publicUrl } } = await supabase.storage
        .from('hanna/films/film1')
        .getPublicUrl(file.name);
        return publicUrl;
      })
    );
  }
  
//
    let publicUrls2: string[] = [];
    const { data: files2 } = await supabase.storage
    .from('hanna')
    .list("films/film2");
    
    if (files2 !== null) {
      publicUrls2 = await Promise.all(
      files2.map(async (file) => {
        const { data: { publicUrl } } = await supabase.storage
        .from('hanna/films/film2')
        .getPublicUrl(file.name);
        return publicUrl;
      })
      );
    }

    //creating a new array
    const publicUrls = [];
    publicUrls.push(...publicUrls1)
    publicUrls.push(...publicUrls2)
    const filteredPublicUrls = publicUrls.filter(url => !url.endsWith('/.emptyFolderPlaceholder'));
    return new Response(JSON.stringify({publicUrls: filteredPublicUrls}));
}
