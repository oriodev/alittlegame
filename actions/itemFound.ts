// 'use server'

// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'


// const itemFound = async (ingredient: number, item: number[]) => {
//   const supabase = createServerComponentClient({ cookies: cookies })

//   const { data, error } = await supabase
//     .from('asa')
//     .update(
//       {
//         ingredients: item
//       }
//     )
//     .eq('id',)

//   if (error) {
//     console.log(error)
//   }

//   return ('success')

// }

// export default saveAsaIngredients