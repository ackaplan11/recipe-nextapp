import { useRef } from 'react'
import Link from 'next/link'

export default function LoginForm(props) {
    const usernameInputRef = useRef()
    const passwordInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()
        const enteredUsername = usernameInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        const loginData = {
            username: enteredUsername,
            password: enteredPassword
        }
        console.log(loginData)
    }
    return (
        <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-orange-300 to-amber-200" >
            <div className="bg-gray-50 w-1/3 h-auto rounded-xl p-8 flex flex-col">
                <div className="text-3xl font-bold leading-loose text-yellow-900 self-center">Sign In</div>
                <form onSubmit={submitHandler}>
                    <div className="pt-4">
                        <input ref={usernameInputRef} type="text" name="username" id="username" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-yellow-900 focus:shadow" placeholder="Username" />
                    </div>
                    <div className="pt-2">
                        <input ref={passwordInputRef} type="text" name="password" id="password" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-yellow-900 focus:shadow" placeholder="Password" />
                    </div>
                    <div className="pt-4 flex flex-col">
                        <button className="bg-yellow-900 text-gray-50 font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-orange-700 transition-colors">Submit</button>
                    </div>
                    <div className="pt-1 text-yellow-900 font-semibold hover:text-orange-700">
                        <Link href="signup">Don't Have an Account? Sign Up Here</Link>
                    </div>           
                </form>
            </div>
        </div>  
    )
}