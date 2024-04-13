import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="h-screen bg-white">
      <div className="w-[90%] max-w-7xl mx-auto pt-16 px-1 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        <p className="max-w-2xl mt-8 text-xl leading-loose text-grey-500">
          Welcome to <span className="font-semibold">Chit Cocktails</span>, your
          ultimate destination for cocktail enthusiasts! Explore our curated
          collection of drink recipes, from timeless classics to innovative
          creations. Join our vibrant community of mixology enthusiasts to share
          tips, techniques, and inspiration. Let's raise a glass to the art of
          crafting the perfect cocktail!
        </p>
        <br />

        <div className="px-4 py-2 mt-2 mb-12 transition duration-300 border border-gray-500 bg-bgPrimary rounded-xl hover:-translate-y-1 ">
          <Link to={'/'} className="mainColor ">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
export default About
