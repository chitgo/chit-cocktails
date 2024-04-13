import { Link, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <div className="text-center h-screen">
        <div className="flex flex-col items-center mt-20">
          <h3 className="text-5xl">Oops!</h3>
          <h1 className="text-5xl mt-4">Page not found!</h1>
          <div className="bg-bgPrimary px-4 py-2  border border-gray-500 rounded-xl  hover:-translate-y-1 transition duration-300 mt-8">
            <Link to={'/'} className="mainColor ">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="bg-bgPrimary mt-2 px-4 py-2  border border-gray-500 rounded-xl  hover:-translate-y-1 transition duration-300  ">
        <Link to={'/'} className="mainColor ">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
export default Error
