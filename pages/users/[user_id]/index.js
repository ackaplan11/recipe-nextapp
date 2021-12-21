import { useRouter } from 'next/router'

export default function Profile({ user }) {
    const router = useRouter()
    return(
        <div> Hello {user.username} </div> 
    )
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    
    const res = await fetch(`http://localhost:3000/api/users/${params.user_id}`, {
        method: "POST",
        body: JSON.stringify({_id: params.user_id}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(res.status)
    if (res.status === 201) {
        const data = await res.json()
        console.log(data)
        return { props: { user: data.userData } }
    } else {
        return { props: {user: {username: "failure"}}}
    }
    // Pass post data to the page via props
  }
  
  export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/users.json`)
    const data = await res.json()
  
    const paths = data.map(users => {
      return {params: { user_id: users }}
    })
  
    return {
      paths,
      fallback: false
    }
  }