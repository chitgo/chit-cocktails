import HomePage from './pages/HomePage'
import About from './pages/About'
import Landing from './pages/Landing'
import Error from './pages/Error'
import Cocktail from './pages/Cocktail'
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom'
import { loader as LandingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import SinglePageError from './pages/SinglePageError'

const router = createHashRouter([
  {
    path: '/*',
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
    ],
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
