import supabase from "@/lib/supabase";


export async function GET(request: Request) {
    const { data: files, error } = await supabase.storage
    .from('hanna')
    .list("modelling");

    if (error) {
        console.error('Error fetching file metadata:', error);
        return [];
    } else {

    const publicUrls = await Promise.all(
    files.map(async (file) => {
      const { data: { publicUrl } } = await supabase.storage
        .from('hanna/modelling')
        .getPublicUrl(file.name);
      return publicUrl;
    })
  );
    return new Response(JSON.stringify({publicUrls}));
    }
}
