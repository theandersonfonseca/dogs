import { useEffect, useState } from 'react'

import * as S from './styles'

import { Helmet } from 'react-helmet-async'

import { Form, Formik } from 'formik'
import * as yup from 'yup'

import FormBase from '../../templates/FormBase'
import Heading from '../../components/Heading'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/configureStore'
import { fetchToken } from '../../store/token'
import { fetchUser } from '../../store/user'
import { Redirect } from 'react-router'
import IsAuth from '../../helpers/isAuth'

import { USER_POST } from '../../Api'

type FormType = {
  username: string
  email: string
  password: string
}

const initialValues = {
  username: '',
  email: '',
  password: ''
}

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const SignUp = () => {
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const tokenState = useSelector((state: RootState) => state.token)
  const dispatch = useDispatch()

  const validationSchema = yup.object({
    username: yup.string().required('Preencha um valor'),
    email: yup.string().email('Email inválido').required('Preencha um valor'),
    password: yup
      .string()
      .matches(
        passwordRegex,
        'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres'
      )
      .required('Preencha um valor')
  })

  const onSubmit = async (values: FormType) => {
    setLoading(true)

    const { url, options } = USER_POST({
      username: values.username,
      email: values.email,
      password: values.password
    })

    const response = await fetch(url, options)
    const data = await response.json()

    if (!data.message) {
      dispatch(
        fetchToken({ username: values.username, password: values.password })
      )

      setLoading(false)

      return
    }

    setMsg(data.message)
    setLoading(false)
  }

  useEffect(() => {
    !!tokenState.token && dispatch(fetchUser(tokenState.token))
  }, [tokenState, dispatch])

  return (
    <>
      <Helmet>
        <title>Cadastro | Dogs</title>
      </Helmet>

      {IsAuth() && <Redirect to="/conta" />}

      <FormBase>
        <Heading>Cadastre-se</Heading>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <S.FormWrapper>
              <Form>
                <TextField label="Usuário" name="username" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Senha" name="password" type="password" />

                {loading ? (
                  <Button type="submit" disabled>
                    Carregando...
                  </Button>
                ) : (
                  <Button type="submit">Cadastrar</Button>
                )}

                {msg && <S.Error>{msg}</S.Error>}
              </Form>
            </S.FormWrapper>
          )}
        </Formik>
      </FormBase>
    </>
  )
}

export default SignUp
