import { useEffect, useState } from 'react'

import * as S from './styles'

import { Helmet } from 'react-helmet'
import { Redirect } from 'react-router'

import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { PASSWORD_RESET } from '../../Api'
import IsAuth from '../../helpers/isAuth'

import FormBase from '../../templates/FormBase'
import Heading from '../../components/Heading'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

type FormType = {
  password: string
}

const initialValues: FormType = {
  password: ''
}

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const ForgotPassword = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const [status, setStatus] = useState('')

  const validationSchema = yup.object({
    password: yup
      .string()
      .matches(
        passwordRegex,
        'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres'
      )
      .required('Preencha um valor')
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  const onSubmit = async (values: FormType) => {
    setStatus('loading')

    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: values.password
    })

    const response = await fetch(url, options)
    const data = await response.json()

    data !== 'Senha alterada.' ? setStatus('error') : setStatus('success')
  }

  return (
    <>
      <Helmet>
        <title>Resertar senha | Dogs</title>
      </Helmet>

      {IsAuth() && <Redirect to="/conta" />}

      {status === 'success' && <Redirect to="/login" />}

      <FormBase>
        {status === 'error' ? (
          <S.Msg>Ocorreu um erro, tente novamente.</S.Msg>
        ) : (
          <>
            <Heading>Resetar a Senha</Heading>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <S.FormWrapper>
                  <Form>
                    <TextField
                      label="Nova Senha"
                      name="password"
                      type="password"
                    />

                    {status === 'loading' ? (
                      <Button size="small" type="submit" disabled>
                        Carregando...
                      </Button>
                    ) : (
                      <Button size="small" type="submit">
                        Resetar
                      </Button>
                    )}
                  </Form>
                </S.FormWrapper>
              )}
            </Formik>
          </>
        )}
      </FormBase>
    </>
  )
}

export default ForgotPassword
