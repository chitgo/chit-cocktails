import { Form, useNavigation } from 'react-router-dom'

function SearchForm({ searchTerm }) {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Form class="max-w-md md:max-w-xl mx-auto mt-8 px-12">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative ">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <svg
            className="w-4 h-4 text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          name="search"
          id="default-search"
          defaultValue={searchTerm}
          className="block w-full p-4 text-white border border-gray-600 focus:ring-1 rounded-lg focus:outline-[#31e0a9] ps-10 bg-bgPrimary "
          placeholder="Cocktail..."
          required
        />

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="absolute end-2.5 bottom-2.5 mainColor  focus:outline-none   rounded-lg  px-4 py-2 font-bold "
          >
            Search
          </button>
        </div>
      </div>
    </Form>
  )
}
export default SearchForm
