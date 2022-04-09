import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/organisms/footer/Footer';
import MapChart from '../components/organisms/mapChart/MapChart';
import universitiesData from '../data/universities';
import { getUniversityById } from '../services/universitiesServices';
import MapChart from '../components/organisms/mapChart/MapChart';

const UniversityProfilePage = () => {
  const { id } = useParams();
  const [university, setUniversity] = useState({});

  useEffect(() => {
    getUniversityById(id)
      .then((data) => {
        if (data === 'error') {
          setUniversity(universitiesData.find((uni) => uni.id === Number(id)));
        } else {
          setUniversity(data);
        }
      });
  }, [id]);

  return (
    <>

      <section className='font-roboto overflow-y-visible box-border '>

        <div className='mx-20 py-20'>

          <div className='article'>

            <section className='university'>
              <div className='title text-3xl'>
                <h1 className='text-3xl font-medium mt-5'>{university.name}</h1>
              </div>

              <figure className=' mt-10'>
                <img className=' h-72 w-full' src={university.campus && university.campus[0]} alt='#' />
              </figure>

            </section>

            <section className='mision-vision grid grid-cols-1 md:grid-cols-2  mb-5 mt-10 gap-x-2'>
              <div className='mission-vision mt-10'>
                <p className='text-3xl font-medium p-2'>Mission And Vision</p>
                <p className='text-justify p-2'>
                  {university.mission}
                  {university.vision}
                </p>

              </div>

              <div className='how-to-apply md:border-l-2 p-8 '>
                <p className='text-3xl font-medium p-5'>How To Apply</p>

                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                  {university.process && university.process.map((process) => {
                    const count = university.process.indexOf(process) + 1;
                    return (
                      <li className='' key={university.id}>
                        {`${count}`}
                        .
                        {process}
                      </li>
                    );
                  })}
                </ul>

              </div>
            </section>

            <section className='Academic Offer'>
              <p className='text-3xl font-medium p-5'>Academic Offer</p>
              <div className='academic-offer mb-20 grid grid-cols-1 md:grid-cols-2  gap-4 '>

                {university.offer && university.offer.map((offer) => {
                  return (
                    <div key={offer.code}>
                      <a className='text-teal-600 hover:text-teal-400 underline underline-offset-8 ' href='.'>{offer.career}</a>
                      <p className='p-2'>{offer.description}</p>

                    </div>
                  );
                })}
              </div>
            </section>

            <section className='another-important-information mb-20 grid grid-cols-1 md:grid-cols-2  gap-4 '>
              <div>
                <p className='text-3xl font-medium'>Other Important Information</p>
                <div className='text-justify p-5'>
                  {university.url}
                </div>

              </div>

              <div className='md:border-l-2 p-10'>
                <p className='text-3xl font-medium'>Location</p>
                <div>
                  <MapChart />
                </div>
              </div>

            </section>
            <section>
              <div className='redes-container flex items-center justify-center '>
                <ul>
                  <li className='inline-block  mx-8 text-center w-14 h-14'>
                    <a href='.' className='facebook block w-16 h-16 leading-4  bg-blue-400 rounded-2xl   '>

                      <svg className='w-16 h-16    ' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' /></svg>
                    </a>

                  </li>
                  <li className='inline-block  mx-8 text-center w-14 h-14'>
                    <a href='.' className='instagram block w-16 h-16 leading-4  bg-blue-400 rounded-2xl '>
                      <svg className='w-16 h-16    ' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z' /></svg>
                    </a>

                  </li>
                  <li className='inline-block  mx-8 text-center w-14 h-14'>
                    <a href='.' className='Twitter block w-16 h-16 leading-4  bg-blue-400  rounded-2xl '>

                      <svg className='w-16 h-16    ' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' /></svg>
                    </a>

                  </li>
                  <li className='inline-block  mx-8 text-center w-14 h-14'>
                    <a href='.' className='Linkedin-in block  w-16 h-16 leading-4 bg-blue-400  rounded-2xl '>

                      <svg className='w-16 h-16    ' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z' /></svg>
                    </a>

                  </li>

                </ul>
              </div>
            </section>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default UniversityProfilePage;
