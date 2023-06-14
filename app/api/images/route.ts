import supabase from "@/lib/supabase";


export async function GET(request: Request) {
    const { data: files, error } = await supabase.storage.from('hanna').list("films");

  if (error) {
    console.error('Error fetching file metadata:', error);
    return [];
  }
  console.log('files', files.length);  
  
    const publicUrls = await Promise.all(
    files.map(async (file) => {
      const { data: { publicUrl } } = await supabase.storage
        .from('hanna')
        .getPublicUrl(file.name);
      console.log('somethin2', publicUrl);
      return publicUrl;
    })
  );
  console.log('pbu', publicUrls);
  

}
