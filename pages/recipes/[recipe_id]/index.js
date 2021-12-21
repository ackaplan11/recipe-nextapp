import { useRouter } from 'next/router'
import RecipePost from '../../../components/recipes/Post'

export default function Recipe({ recipe }) {
  const router = useRouter()
  const { id } = router.query
  return(<>
      <RecipePost recipe={recipe}/>
  </>)
}



// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(params.recipe_id)

  const res = await fetch(`http://localhost:3000/api/recipes/${params.recipe_id}`)
  const data = await res.json()
  console.log(data)
  // Pass post data to the page via props
  return { props: { recipe: data.recipeData } }
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/recipes.json`)
  const data = await res.json()
  const paths = data.map(recipe => {
    return {params: { recipe_id: recipe }}
  })

  return {
    paths,
    fallback: false
  }
}