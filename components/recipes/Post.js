import { Fragment } from "react"

export default function Post({ recipe }) {
    
    
    return (
        <Fragment>
            <div>
                <img src={recipe.image} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" />
                <div>{recipe.title}</div>
                <div>{recipe.servings} servings</div>
                <div>{recipe.rating}</div>
                <div>{recipe.author_name}</div>
                <ul>
                    Ingredients List
                    {console.log(recipe.ingredients)}
                    {recipe.ingredients.forEach(ingredient => {
                        <li>{ingredient.name}</li>})}
                </ul>
            </div>
        </Fragment>
    )
}

