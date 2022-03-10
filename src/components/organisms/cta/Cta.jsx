import React from 'react'
import Button from '../../atoms/Button/Button'

const Cta = () => {

  return (
    <section className="CTA my-32 md:my-36 lg:my-40  md:px-16 xl:px-24 md:flex md:flex-row md:justify-between md:gap-2">

      <div className="CTA-left md:flex md:flex-col md:justify-center md:gap-2">
        <h2 className="text-3xl md:text-2xl xl:text-4xl leading-5 font-semibold mt-6 md:mt-0 ">
          Don't know what to study?
        </h2>
        <p className="text-xl mt-6 md:mt-0 md:text-lg xl:text-xl leading-4 md:leading-4 lg:leading-5 ">
          Take the vocational test and discover your best option
        </p>
      </div>

      <div
        className="CTA-right buttons mt-6 md:mt-0 md:flex md:flex-col xl:flex-row md:gap-2 xl:gap-3 md:flex-end md:items-center">

        <Button text="Vocational test" size="large" />
        <Button text="Where to study" size="large" outline={true} />
      </div>

    </section>
  )
}

export default Cta