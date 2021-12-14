import Link from 'next/link'
import { Fragment } from "react"
import Nav from '../components/layout/Nav'
import NavItem from '../components/layout/NavItem'
import List from '../components/List'
import ListItem from '../components/ListItem'

const DUMMY_DATA = [
  {
    id: "ramen",
    title: "Ramen",
    time: 30,
    diffuclty: "medium",
    servings: 4,
    author: "Mama",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: "pasta",
    title: "Pasta",
    author: "Papa",
    time: 35,
    difficulty: 'easy',
    servings: 2,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
]

export default function RecipeHome() {
  return (
    <div className="divide-y divide-gray-100">
      <List>
        {DUMMY_DATA.map((recipe) => (
          <ListItem key={recipe.id} recipe={recipe} />
        ))}
      </List>
    </div>
  )
}