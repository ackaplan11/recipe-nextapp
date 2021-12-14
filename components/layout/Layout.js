import Nav from "./Nav"

export default function Layout(props) {
    return (
        <div>
            <Nav />
            <main>{props.children}</main>
        </div>
    )
}