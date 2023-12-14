import * as yup from 'yup'

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Must be a valid email'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

export type LoginFormSchema = yup.InferType<typeof loginFormSchema>
