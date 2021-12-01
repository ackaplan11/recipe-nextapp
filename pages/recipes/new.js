import Link from 'next/link'
import { Fragment } from "react"

export default function RecipeHome() {
    return (
    <Fragment>
        <h1> Recipes Home Page</h1>
        <ul>
          <li>
            <Link href= 'recipes/ramen'>
              Ramen
            </Link>    
          </li>
        </ul>
    </Fragment> 
    )   
}