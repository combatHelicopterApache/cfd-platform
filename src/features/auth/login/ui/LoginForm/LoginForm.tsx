import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from 'app/AppStore'

import { Button } from 'shared/ui/Button/Button'
import { loginThunk } from '../../model/login'
import {
  type LoginFormSchema,
  loginFormSchema,
} from '../../model/loginFormSchema'
import css from './LoginForm.module.scss'

type Props = {
  onComplete?: () => void
}

export const LoginForm = (props: Props) => {
  const dispatch = useAppDispatch()

  const {
    setError,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormSchema>({
    resolver: yupResolver(loginFormSchema),
  })

  const onSubmitHandler = useCallback(
    ({ email, password }: LoginFormSchema) => {
      dispatch(loginThunk({ email, password }))
        .unwrap()
        .then(() => props.onComplete?.())
        .catch((error: Error) => {
          setError('email', { type: 'server', message: error.message })
        })
    },
    [],
  )

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <div>
            <label>Email</label>
          </div>
          <input type='email' {...register('email')} />
          <div>{errors.email?.message}</div>
        </div>
        <div>
          <div>
            <label>Password</label>
          </div>
          <input type='password' {...register('password')} />
          {errors.password && (
            <p className='text-xs'>{errors.password?.message}</p>
          )}
        </div>
        <div className={css.actions}>
          <Button type='submit'>Login</Button>
        </div>
      </form>
    </div>
  )
}
