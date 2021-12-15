export default function UserProfile({ user }) {
    return (
        <div>
            {/* <img src={recipe.image} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" /> */}
            <div> Your username is {user.username}</div>
            <div> Your password is {user.password}</div>
        </div>
    )
}