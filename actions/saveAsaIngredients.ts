'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


const saveAsaIngredients = async (item: number[]) => {
  const supabase = createServerComponentClient({ cookies: cookies })

  const { data, error } = await supabase
    .from('asa')
    .insert(
      {
        ingredients: item
      }
    )

  if (error) {
    console.log(error)
  }

  return ('success')

}

export default saveAsaIngredients