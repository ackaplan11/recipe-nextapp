import { useRouter } from 'next/router'

export default function ListItem({ recipe }) {
  const router = useRouter()
  
  function recipeDetailsHandler() {
    router.push('/recipes/' + recipe.id)
  }

  return (
    <div>
      <img src={recipe.image} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" />
      <div>{recipe.title}</div>
      <div>{recipe.time}m</div>
      <div>{recipe.difficulty}</div>
      <div>{recipe.servings} servings</div>
      <div>{recipe.rating}</div>
      <div>{recipe.author}</div>
      <button onClick={recipeDetailsHandler}>Show Details</button> 
    </div>
    )
}
