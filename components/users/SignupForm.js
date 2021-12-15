import { Fragment, useRef } from 'react'
import Link from 'next/link'

export default function SignupForm() {

    const signupUser = async (event) => {
        event.preventDefault()
        const formData = event.target
        const username = formData.username.value
        const password = formData.password.value
        const passwordConfirm = formData.passwordConfirm.value
        if (password != passwordConfirm) {
            console.log("Passwords do not match, please try again")
        } else {
            const signupData = {
                username: username,
                password: password,
                passwordConfirm: passwordConfirm
            }
            console.log(signupData)
            const response = await fetch('/api/users/signup-api', {
                method: "POST",
                body: JSON.stringify(signupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(response.json())
        }
        formData.reset()
    }

    return (
        <Fragment>
            <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-orange-300 to-amber-200" >
                <div className="bg-gray-50 w-1/3 h-auto rounded-xl p-8 flex flex-col">
                    <div className="text-3xl font-bold leading-loose text-yellow-900 self-center">Sign Up</div>
                    <form onSubmit={signupUser}>
                        <div className="pt-4">
                            <input type="text" name="username" id="username" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-yellow-900 focus:shadow" placeholder="Username" />
                        </div>
                        <div className="pt-4">
                            <input type="text" name="password" id="password" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-yellow-900 focus:shadow" placeholder="Password" />
                        </div>
                        <div className="pt-2">
                            <input type="text" name="passwordConfirm" id="passwordConfirm" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-yellow-900 focus:shadow" placeholder="Confirm Password" />
                        </div>
                        <div className="pt-4 flex flex-col">
                            <button className="bg-yellow-900 text-gray-50 font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-orange-700 transition-colors">Submit</button>
                        </div>
                        <div className="pt-1 text-yellow-900 font-semibold hover:text-orange-700">
                            <Link href="login">Already Have An Account? Log In Here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}