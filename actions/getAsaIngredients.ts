import { ingredients } from '@/types/ingredientTypes';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getAsaIngredients = async (): Promise<ingredients> => {

  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const { data, error } = await supabase
    .from('asa')
    .select('ingredients')
    .limit(1)
    .single()

  if (error) {
    console.log(error)
  }

  return (data as any) || []

}

export default getAsaIngredients