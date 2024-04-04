'use server'

import { ingredients } from '@/types/ingredientTypes'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const deleteAsaIngredients = async () => {
  const supabase = createServerComponentClient({ cookies: cookies })

  const { data, error } = await supabase
    .from('asa')
    .delete()
    .eq('reset', true)

  if (error) {
    console.log(error)
  }

  return ('success')

}

export default deleteAsaIngredients