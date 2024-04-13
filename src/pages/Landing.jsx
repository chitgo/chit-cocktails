import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
import CocktailList from '../components/CocktailList'
import Footer from '../components/Footer'
import SearchForm from '../components/SearchForm'
export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''
  const response = await axios.get(`${cocktailUrl}${searchTerm}`)

  return { drinks: response.data.drinks, searchTerm }
}

function Landing() {
  const { drinks, searchTerm } = useLoaderData()
  console.log(drinks)
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
      <Footer />
    </>
  )
}
export default Landing
