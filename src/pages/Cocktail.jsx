import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import React, { PureComponent } from 'react'
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  return { id, data }
}
function Cocktail() {
  const { id, data } = useLoaderData()

  if (!data) return <Navigate to={'/'} />

  const singleDrink = data.drinks[0]

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  console.log(singleDrink)

  const filteredIngredients = Object.keys(singleDrink)
    .filter((key) => key.includes('Ingredient') && singleDrink[key] !== null)
    .map((key) => singleDrink[key])
  console.log(filteredIngredients)

  const filteredMeasures = Object.keys(singleDrink)
    .filter((key) => key.includes('Measure') && singleDrink[key] !== null)
    .map((key) => singleDrink[key])
  console.log(filteredMeasures)

  return (
    <div className="h-screen px-12 pt-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <header className="mt-8 text-center">
          <Link
            className="px-4 py-2 transition duration-300 border border-gray-500  bg-[#31e0a9] text-gray-900  rounded-xl hover:-translate-y-1 font-bold"
            to={'/chit-cocktails'}
          >
            Back Home
          </Link>
          <h3 className="mt-6 text-3xl font-bold">{name}</h3>
        </header>
        <div className="mt-6 sm:grid sm:grid-cols-12">
          <div className="col-span-5 ">
            <img
              src={image}
              alt={name}
              className="object-cover object-center rounded-xl min-h-[350px]"
            />
          </div>
          <div className="col-span-7 pb-12 space-y-3 sm:pb-0 sm:ml-12 sm:mt-4">
            <div className="pt-12 sm:pt-0">
              <p className="font-bold">
                <span className="bg-[#31e0a9] px-2 py-1 rounded-lg text-[#1a6b53]">
                  Name :{' '}
                </span>
                <span className="ml-2 italic leading-7 tracking-wide">
                  {name}
                </span>
              </p>
            </div>
            <div>
              <p className="font-bold">
                <span className="bg-[#31e0a9] px-2 py-1 rounded-lg text-[#1a6b53]">
                  Category :{' '}
                </span>
                <span className="ml-2 italic leading-7 tracking-wide">
                  {category}
                </span>
              </p>
            </div>
            <div>
              <p className="font-bold">
                <span className="bg-[#31e0a9] px-2 py-1 rounded-lg text-[#1a6b53]">
                  Info :{' '}
                </span>
                <span className="ml-2 italic leading-7 tracking-wide">
                  {info}
                </span>
              </p>
            </div>
            <div>
              <p className="font-bold">
                <span className="bg-[#31e0a9] px-2 py-1 rounded-lg text-[#1a6b53]">
                  Glass :{' '}
                </span>
                <span className="ml-2 italic leading-7 tracking-wide">
                  {glass}
                </span>
              </p>
            </div>

            <div>
              <p className="font-bold">
                <span className="bg-[#31e0a9] px-2 py-1 rounded-lg text-[#1a6b53]">
                  Ingredients :{' '}
                </span>
                <span className="ml-2 italic leading-7 tracking-wide">
                  {filteredIngredients.map((ingredient, index) => (
                    <React.Fragment key={index}>
                      {ingredient} {filteredMeasures[index]}
                      {index !== filteredIngredients.length - 1 ? ', ' : null}
                    </React.Fragment>
                  ))}
                </span>
              </p>
            </div>
            <div>
              <p className="font-bold ">
                <span className="bg-[#31e0a9] px-2 py-1 rounded-lg text-[#1a6b53] ">
                  Instructions:{' '}
                </span>
                <span className="ml-2 italic leading-7 tracking-wide">
                  {instructions}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cocktail
