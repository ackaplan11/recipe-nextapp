import { useRouter } from 'next/router'
import RecipePost from '../../components/RecipePost'

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
  const res = await fetch(`http://localhost:3000/${params.id}.json`)
  const data = await res.json()

  // Pass post data to the page via props
  return { props: { recipe: data } }
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/recipes.json`)
  const data = await res.json()

  const paths = data.map(recipe => {
    return {params: { id: recipe }}
  })

  return {
    paths,
    fallback: false
  }
}