import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { loginSimple } from '../../../context/actions/auth-actions';
import { setLoading } from '../../../context/actions/ui-actions';
import { googleLoginValidationApi } from '../../../services/authServices';

const SocialMediaLoginOrSignup = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui);

  const handleFailure = () => {
    setError(true);
  };

  const handleLogin = async (credential) => {
    setError(false);

    dispatch(setLoading(true));
    const data = await googleLoginValidationApi(credential);
    dispatch(setLoading(false));

    localStorage.setItem('token', data.token);
    dispatch(loginSimple(data));
  };

  return (
    <div className='flex flex-col gap-2 mt-10 mb-20'>

      <div className='flex justify-between items-center w-full'>
        <hr className='w-1/4  border-primary-1' />
        <p className='text-center text-primary-1 px-3'>
          or login with:
        </p>
        <hr className='w-1/4  border-primary-1' />
      </div>
      {
        error && (
          <div className='p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800' role='alert'>
            <span className='font-medium'>Error!</span>
            Try again. If the error persists contact an administrator
          </div>
        )

      }

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <button
            type='button'
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className={`bg-blue-500 relative text-white font-bold py-2 px-6  whitespace-nowrap rounded-sm ${isLoading ? 'bg-gray-500' : 'hover:bg-blue-700'}`}
          >
            {
              isLoading
              && (
                <svg role='status' className='mr-2 w-5 h-5 text-purple-700 animate-spin dark:text-gray-100 fill-white absolute left-2 top-3' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                  <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                </svg>
              )
            }
            <i className='fab fa-google mr-2' />
            login with Google
          </button>
        )}
        buttonText='Login'
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy='single_host_origin'
      />
    </div>
  );
};

export default SocialMediaLoginOrSignup;
