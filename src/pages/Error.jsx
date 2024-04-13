import { Link, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <div className="h-screen text-center">
        <div className="flex flex-col items-center mt-20">
          <h3 className="text-5xl">Oops!</h3>
          <h1 className="mt-4 text-5xl">Page not found!</h1>
          <div className="px-4 py-2 mt-8 transition duration-300 border border-gray-500 bg-bgPrimary rounded-xl hover:-translate-y-1">
            <Link to="/" className="mainColor ">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="px-4 py-2 mt-2 transition duration-300 border border-gray-500 bg-bgPrimary rounded-xl hover:-translate-y-1 ">
        <Link to={'/'} className="mainColor ">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
export default Error
