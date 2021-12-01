export default function RecipeCard(recipe) {
    return (
        <div className="shadow bg-white rounded-lg h-18">
            <img src={recipe.image} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" />
            <div>{recipe.title}</div>
            <div>{recipe.author}</div>
        </div>
    )
}