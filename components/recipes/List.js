export default function List({ children }) {
  return (
    <div className=" h-screen flex justify-center bg-gradient-to-r from-orange-300 to-amber-200" >
      <div className="grid grid-cols-2">
        {children}
      </div>
    </div>
  )
}