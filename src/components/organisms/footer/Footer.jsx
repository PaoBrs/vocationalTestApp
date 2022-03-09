import React from 'react'

const Footer = () => {
  return (
    <footer className="px-6 md:px-20 lg:px-24 pt-24 md:pt-28 lg:pt-32 bg-primary-1 text-light-1">

      <div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-6 gap-10">

        <div className="hidden lg:block lg:col-span-2">

          <div className="flex flex-col md:flex-row items-center">
            <svg className="w-14 h-14 mr-2 text-light-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
              </path>
            </svg>
            <a className="text-base font-medium whitespace-nowrap text-light-1" href=".">My Future, My Choice</a>
          </div>

        </div>

        <div>
          <h2 className="font-bold">
            Advertising
          </h2>

          <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
            Pricing
          </a>
          <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
            Subscriptions
          </a>
          <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
            Payment methods
          </a>

        </div>

        <div>
          <h2 className="font-bold">
            Resources
          </h2>
          <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
            Personal counseling
          </a>
          <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
            Universities Ranking
          </a>
          <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
            Employment statistics
          </a>
        </div>

        <div>
          <h2 className="font-bold">
            Contact Us
          </h2>
          <ul>
            <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
              PE+51-555555555
            </a>
            <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
              CO+57-999999999
            </a>
            <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              YourFutureApp
            </a>
          </ul>
        </div>

        <div className="md:block">
          <h2 className="font-bold">
            Address
          </h2>
          <a href="." className="block text-xs md:text-sm leading-4 md:leading-5 hover:underline hover:font-bold cursor-pointer">282
            Kevin Brook,
            Imogeneborough,
            CA
            58517</a>
        </div>

      </div>

      <small className="block text-center pt-12 md:pt-16 lg:pt-20 pb-2 md:pb-4 lg:pb-6">
        Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2022 -2030
      </small>
    </footer>
  )
}

export default Footer
