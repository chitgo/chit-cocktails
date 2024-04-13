import CocktailCard from './CocktailCard'

function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <div className="h-screen px-12 text-center">
        <div className="flex flex-col items-center mt-20 text-white ">
          <h1 className="mt-4 text-5xl mainColor">Cocktail not found!</h1>
        </div>
      </div>
    )
  }

  const formatedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <div className="grid gap-8 py-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-[90%] max-w-7xl mx-auto  place-items-center">
      {formatedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </div>
  )
}
export default CocktailList
