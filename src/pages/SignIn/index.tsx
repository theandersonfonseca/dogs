import { useEffect } from 'react'
import * as S from './styles'

import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'

import { Formik, Form } from 'formik'
import * as yup from 'yup'

import FormBase from '../../templates/FormBase'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import TextField from '../../components/TextField'

import { useSelector, useDispatch } from 'react-redux'
import { fetchToken, tokenActions } from '../../store/token'
import { RootState } from '../../store/configureStore'
import { fetchUser } from '../../store/user'
import IsAuth from '../../helpers/isAuth'

type FormType = {
  username: string
  password: string
}

const initialValues: FormType = {
  username: '',
  password: ''
}

const SignIn = () => {
  const tokenState = useSelector((state: RootState) => state.token)
  const dispatch = useDispatch()

  const validationSchema = yup.object({
    username: yup.string().required('Preencha um valor'),
    password: yup.string().required('Preencha um valor')
  })

  const handleSubmit = async (values: FormType) => {
    dispatch(fetchToken(values))
  }

  useEffect(() => {
    !!tokenState.token && dispatch(fetchUser(tokenState.token))
  }, [tokenState, dispatch])

  useEffect(() => {
    if (tokenState.status === 'incorrect data') {
      setTimeout(() => {
        dispatch(tokenActions.resetState())
      }, 3000)
    }
  }, [tokenState.status, dispatch])

  return (
    <>
      <Helmet>
        <title>Login | Dogs</title>
      </Helmet>

      {IsAuth() && <Redirect to="/conta" />}

      <FormBase>
        <Heading>Login</Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <S.FormWrapper>
              <Form>
                <TextField label="Usuário" name="username" type="text" />

                <TextField label="Senha" name="password" type="password" />

                {tokenState.loading ? (
                  <Button type="submit" disabled>
                    Carregando...
                  </Button>
                ) : (
                  <Button type="submit">Entrar</Button>
                )}
              </Form>
            </S.FormWrapper>
          )}
        </Formik>

        {tokenState.status === 'incorrect data' && (
          <S.Error>Dados incorretos</S.Error>
        )}

        <Link to="login/perdeu">
          <S.ForgotPasswordLink>Perdeu a senha?</S.ForgotPasswordLink>
        </Link>

        <S.SignUpCallWrapper>
          <S.SignUpCallTitle>Cadastre-se</S.SignUpCallTitle>

          <S.SignUpCallText>
            Ainda não possui conta? Cadastre-se no site.
          </S.SignUpCallText>

          <Link to="/criar">
            <Button size="small">Cadastro</Button>
          </Link>
        </S.SignUpCallWrapper>
      </FormBase>
    </>
  )
}

export default SignIn
