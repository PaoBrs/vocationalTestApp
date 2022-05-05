import { useOutletContext } from 'react-router-dom';
import { Label, Select } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CareerCard from '../../components/organisms/simpleCard/CareerCard';
import { setCareersAction, setPageCareersAction } from '../../context/actions/careers-actions';
import { useForm } from '../../hooks/useForm';

const CareersListPage = () => {
  const width = useOutletContext();

  const { formValues, handleFormChange } = useForm({
    careersByPage: 6,
  });

  const { careers, page, totalPages, totalCareers } = useSelector((state) => state.careers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCareersAction(formValues.careersByPage, page));
  }, [formValues.careersByPage, page]);

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(setPageCareersAction(page + 1));
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      dispatch(setPageCareersAction(page - 1));
    }
  };

  return (
    <main className={`min-h-screen pt-4 pr-10 pb-12 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <div className='py-4'>
        <label htmlFor='table-search' className='sr-only'>Search</label>
        <div className='relative mt-1'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
          </div>
          <input type='text' id='table-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search a career' />
        </div>
      </div>

      <div className='mb-6'>
        <Label
          className='mb-2 block'
          htmlFor='countries'
        >
          Careers by page
        </Label>
        <Select
          id='countries'
          name='careersByPage'
          value={formValues.careersByPage}
          onChange={handleFormChange}

        >
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
        </Select>
      </div>

      <section className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-4'>
        {
          careers.map((career) => (
            <CareerCard key={uuidv4()} career={career} />
          ))
        }
      </section>

      <hr className='mt-8' />

      <div aria-label='pagination' className='flex flex-col items-center'>

        <span className='text-sm text-gray-700 dark:text-gray-400'>
          Showing
          <span className='font-semibold text-gray-900 dark:text-white mx-1'>{formValues.careersByPage * (page - 1) + 1}</span>
          to
          <span className='font-semibold text-gray-900 dark:text-white mx-1'>
            {
              (formValues.careersByPage * page) < totalCareers
                ? (formValues.careersByPage * page) : totalCareers
            }
          </span>
          of
          <span className='font-semibold text-gray-900 dark:text-white mx-1'>{totalCareers}</span>
          Careers
        </span>

        <div className='inline-flex mt-2 xs:mt-0'>
          <button
            type='button'
            className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            onClick={handlePrevious}
          >
            Prev
          </button>
          <button
            type='button'
            className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>

      <button type='button' className='h-11 w-11  rounded-full bottom-5 right-5 text-white bg-purple-500 flex justify-center items-center shadow-md shadow-gray-500 hover:bg-purple-600 fixed'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
        </svg>
      </button>

    </main>
  );
};

export default CareersListPage;
