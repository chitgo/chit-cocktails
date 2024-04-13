import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
function HomePage() {
  const navigation = useNavigation
  const isPageLoading = navigation.state === 'loading'
  return (
    <div className="min-h-screen mx-auto bg-bgPrimary ">
      <Navbar />
      {isPageLoading ? <div>Loading...</div> : <Outlet />}
    </div>
  )
}
export default HomePage
