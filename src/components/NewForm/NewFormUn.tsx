import React from 'react';
import style from './NewForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { countries } from '../../data/country';

const schema = yup
  .object({
    firstName: yup
      .string()
      .required('Name is required')
      .matches(/^[A-Z]/, 'Should start with a capital letter'),
    age: yup.number().positive().integer().required(),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])/,
        'Password must contain at least 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    terms: yup
      .boolean()
      .oneOf([true], 'Accept terms and conditions is required')
      .required('Accept terms and conditions is required'),
    country: yup.string().required('Country is required'),
    gender: yup.string().required('Gender is required '),
    picture: yup
      .mixed()
      .test(
        'fileType',
        'Only PNG and JPEG file types are allowed',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (files: any) => {
          if (!files || !files.length) return false;

          const file = files[0];
          const allowedExtensions = ['png', 'jpeg'];
          const fileExtension = file.name.split('.').pop()?.toLowerCase();

          return fileExtension && allowedExtensions.includes(fileExtension);
        }
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .test('fileSize', 'File size exceeds 5MB limit', (files: any) => {
        if (!files || !files.length) return false;

        const file = files[0];
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
        return file.size <= maxSizeInBytes;
      })
      .required('Picture is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function NewFormUn() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue(name as keyof FormData, value, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('firstName')} onChange={handleInputChange} />
      <div className={style.place__error}>
        <p className={style.error}>{errors.firstName?.message}</p>
      </div>

      <label htmlFor="age">Age</label>
      <input id="age" {...register('age')} onChange={handleInputChange} />
      <div className={style.place__error}>
        <p className={style.error}>{errors.age?.message}</p>
      </div>

      <label>Email</label>
      <input {...register('email')} onChange={handleInputChange} />
      <div className={style.place__error}>
        <p className={style.error}>{errors.email?.message}</p>
      </div>

      <label>Password</label>
      <input {...register('password')} onChange={handleInputChange} />
      <div className={style.place__error}>
        <p className={style.error}>{errors.password?.message}</p>
      </div>

      <label>Confirm Password</label>
      <input {...register('confirmPassword')} onChange={handleInputChange} />
      <div className={style.place__error}>
        <p className={style.error}>{errors.confirmPassword?.message}</p>
      </div>

      <label>Gender</label>
      <select {...register('gender')}>
        <option value="">Select Gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <div className={style.place__error}>
        <p className={style.error}>{errors.gender?.message}</p>
      </div>

      <label>Country</label>
      <select {...register('country')}>
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.Country}>
            {country.Country}
          </option>
        ))}
      </select>
      <div className={style.place__error}>
        <p className={style.error}>{errors.country?.message}</p>
      </div>

      <label htmlFor="picture">Upload Picture</label>
      <input
        id="picture"
        type="file"
        accept=".png, .jpeg"
        {...register('picture')}
      />
      <div className={style.place__error}>
        <p className={style.error}>{errors.picture?.message}</p>
      </div>

      <label>Accept </label>
      <input type="checkbox" {...register('terms')} />
      <div className={style.place__error}>
        <p className={style.error}>{errors.terms?.message}</p>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default NewFormUn;
