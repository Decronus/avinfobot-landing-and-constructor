import supabase from './supabase';

export async function getPages() {
    const { data, error } = await supabase.from('pages').select();
    if (error) return null;
    return data;
}
