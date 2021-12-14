import NavItem from './NavItem'

export default function Nav({ children }) {
    return (
        <header>
            <nav>
                <ul>
                    <NavItem href="/">Recipes NextJs App</NavItem>
                    <NavItem href="/users/signup">Sign Up</NavItem>
                    <NavItem href="/users/login">Log In</NavItem>
                </ul>
            </nav>
        </header>
    )
}