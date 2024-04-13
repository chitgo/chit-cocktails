import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className=" bg-bgPrimary py-4 px-4 flex-col gap-4 sm:flex-row flex items-center justify-between w-[90%] max-w-7xl mx-auto border-b-gray-500">
      <NavLink to="/" className="pt-2 text-4xl mainColor ">
        Chit Cocktails
      </NavLink>
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className="px-4 py-2 transition duration-300 border border-gray-500 sm:text-xl mainColor rounded-xl hover:bg-gray-500 hover:-translate-y-1"
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className="px-4 py-2 transition duration-300 border border-gray-500 sm:text-xl mainColor rounded-xl hover:bg-gray-500 hover:-translate-y-1"
        >
          {' '}
          About
        </NavLink>
      </div>
    </nav>
  )
}
export default Navbar
