import Link from 'next/link'
import { Fragment } from "react"
import RecipeCard from '../components/recipe-card.js'

const DUMMY_DATA = [
  {
    id: "Ramen",
    title: "Ramen",
    time: 30,
    diffuclty: "medium",
    servings: 4,
    author: "Mama",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "Pasta",
    title: "Pasta",
    author: "Papa",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
]

export default function RecipeHome() {
  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-4">
        {DUMMY_DATA.map((recipe) => {
          return <RecipeCard
            title={recipe.title}
            author={recipe.author}
            image={recipe.image}
          />;
        })}
      </div>
    </Fragment>
  )
}