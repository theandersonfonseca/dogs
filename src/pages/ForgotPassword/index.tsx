import { useState } from 'react'

import * as S from './styles'

import { Helmet } from 'react-helmet-async'

import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { PASSWORD_LOST } from '../../Api'
import IsAuth from '../../helpers/isAuth'
import { Redirect } from 'react-router'

import FormBase from '../../templates/FormBase'
import Heading from '../../components/Heading'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

type FormType = {
  email: string
}

const initialValues: FormType = {
  email: ''
}

const ForgotPassword = () => {
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const validationSchema = yup.object({
    email: yup.string().email('Email inválido').required('Preencha um valor')
  })

  const onSubmit = async (values: FormType) => {
    setLoading(true)

    const { url, options } = PASSWORD_LOST({
      login: values.email,
      url: window.location.href.replace('perdeu', 'resetar')
    })

    const response = await fetch(url, options)
    const data = await response.json()

    data !== 'Email enviado.' ? setMsg(data.message) : setMsg(data)
    setLoading(false)
  }

  return (
    <>
      <Helmet>
        <title>Esqueceu a senha | Dogs</title>
      </Helmet>

      {IsAuth() && <Redirect to="/conta" />}

      <FormBase>
        {msg ? (
          <S.Msg>{msg}</S.Msg>
        ) : (
          <>
            <Heading>Perdeu a senha?</Heading>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <S.FormWrapper>
                  <Form>
                    <TextField label="Email" name="email" type="email" />

                    {loading ? (
                      <Button size="small" type="submit" disabled>
                        Enviando...
                      </Button>
                    ) : (
                      <Button size="small" type="submit">
                        Enviar
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
