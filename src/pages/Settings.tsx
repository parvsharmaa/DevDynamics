import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/UserSlice';
import { RootState } from '../redux/store/store';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

const Settings: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const [formData, setFormData] = useState<FormData>(user);
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = 'Phone must be 10 digits';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(updateUser(formData));
    }
  };

  return (
    <div
      className={`mx-auto mt-10 p-8 border rounded-lg shadow-lg ${
        darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 text-center ${
          darkMode ? 'text-gray-300' : 'text-gray-900'
        }`}
      >
        Edit Account Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className={`block text-sm font-bold mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              darkMode
                ? 'bg-gray-800 text-gray-300 border-gray-600'
                : 'bg-white text-gray-700 border-gray-300'
            } ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && (
            <p className='text-red-500 text-xs italic'>{errors.name}</p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className={`block text-sm font-bold mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              darkMode
                ? 'bg-gray-800 text-gray-300 border-gray-600'
                : 'bg-white text-gray-700 border-gray-300'
            } ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && (
            <p className='text-red-500 text-xs italic'>{errors.email}</p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='phone'
            className={`block text-sm font-bold mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              darkMode
                ? 'bg-gray-800 text-gray-300 border-gray-600'
                : 'bg-white text-gray-700 border-gray-300'
            } ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && (
            <p className='text-red-500 text-xs italic'>{errors.phone}</p>
          )}
        </div>
        <div className='mb-6'>
          <label
            htmlFor='address'
            className={`block text-sm font-bold mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Address
          </label>
          <textarea
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            rows={12}
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              darkMode
                ? 'bg-gray-800 text-gray-300 border-gray-600'
                : 'bg-white text-gray-700 border-gray-300'
            } ${errors.address ? 'border-red-500' : ''}`}
          />
          {errors.address && (
            <p className='text-red-500 text-xs italic'>{errors.address}</p>
          )}
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              darkMode ? 'bg-blue-600 hover:bg-blue-800' : ''
            }`}
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
