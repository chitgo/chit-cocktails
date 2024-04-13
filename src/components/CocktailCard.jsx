import { Link } from 'react-router-dom'

function CocktailCard({ id, name, image, info, glass }) {
  return (
    <div className="grid px-4 ">
      <div className="text-white transition duration-300 border border-gray-500 shadow-lg bg-bgPrimary rounded-xl hover:scale-105 max-w-[300px]">
        <div className="">
          <img src={image} alt={name} className="object-cover rounded-t-xl " />
        </div>
        <div className="flex flex-col gap-3 pb-4 pl-6 mt-3 ">
          <h4 className="text-2xl font-bold">{name}</h4>
          <h5 className="text-xl">{glass}</h5>
          <p className="text-gray-200 ">{info}</p>

          <Link
            to={`/cocktail/${id}`}
            className="px-5 py-1 transition duration-300 bg-[#31e0a9] text-gray-900 rounded-lg text-lg self-start font-semibold"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
export default CocktailCard
