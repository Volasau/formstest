import * as yup from 'yup';

export const schema = yup
  .object({
    firstName: yup
      .string()
      .required('Name is required')
      .matches(/^[A-Z]/, 'Should start with a capital letter'),
    age: yup.number().positive().integer().required('Age is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .matches(/^.+@.+\..+$/, 'Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])/,
        'must contain min 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    terms: yup
      .boolean()
      .oneOf([true], 'Accept terms and conditions is required'),
    country: yup.string().required('Country is required'),
    gender: yup.string().required('Gender is required '),
    picture: yup
      .mixed()
      .test(
        'fileType',
        'File not selected or not in PNG JPEG format',
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
      .test('fileSize', 'File size exceeds 1MB limit', (files: any) => {
        if (!files || !files.length) return true;

        const file = files[0];
        const maxSizeInBytes = 1 * 1024 * 1024;
        return file.size <= maxSizeInBytes;
      })
      .required('Picture is required'),
  })
  .required();

export type FormData = yup.InferType<typeof schema>;

export const schemaValid = yup
  .object({
    firstName: yup
      .string()
      .required('Name is required')
      .matches(/^[A-Z]/, 'Should start with a capital letter'),
    age: yup.number().positive().integer().required('Age is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .matches(/^.+@.+\..+$/, 'Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])/,
        'must contain min 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    terms: yup
      .boolean()
      .oneOf([true], 'Accept terms and conditions is required'),
    country: yup.string().required('Country is required'),
    gender: yup.string().required('Gender is required '),
    picture: yup
      .mixed()
      .test(
        'fileType',
        'File not selected or not in PNG JPEG format',
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
      .test('fileSize', 'File size exceeds 1MB limit', (files: any) => {
        if (!files || !files.length) return true;

        const file = files[0];
        const maxSizeInBytes = 1 * 1024 * 1024;
        return file.size <= maxSizeInBytes;
      })
      .required('Picture is required'),
  })
  .required();
