import React, { useState } from 'react'
import * as S from './styles'

import { Helmet } from 'react-helmet'

import { Formik, Form, FormikProps } from 'formik'
import * as yup from 'yup'
import { Redirect } from 'react-router'

import { PHOTO_POST } from '../../Api'

import PageBase from '../../templates/PageBase'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Heading from '../../components/Heading'
import Container from '../../components/Container'
import AccountNav from '../../components/AccountNav'

type FormType = {
  name: string
  weight: string
  age: string
  photo: string
}

const initialValues: FormType = {
  name: '',
  weight: '',
  age: '',
  photo: ''
}

type PhotoType = {
  preview: string
  raw: string | Blob
}

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

const PhotoPost = () => {
  const [photo, setPhoto] = useState<PhotoType>({} as PhotoType)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const validationSchema = yup.object({
    name: yup.string().required('Preencha um valor'),
    weight: yup
      .number()
      .positive('Preencha com um valor válido')
      .required('Preencha um valor'),
    age: yup
      .number()
      .positive('Preencha com um valor válido')
      .required('Preencha um valor'),
    photo: yup
      .mixed()
      .test(
        'FILE_FORMAT',
        'Selecione uma foto válida',
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      )
      .required('Selecione um arquivo')
  })

  const handleSubmit = async (values: FormType) => {
    setLoading(true)
    const formData = new FormData()

    formData.append('img', photo.raw)
    formData.append('nome', values.name)
    formData.append('peso', values.weight)
    formData.append('idade', values.age)

    const token = localStorage.getItem('token') || ''

    const { url, options } = PHOTO_POST({
      formData,
      token
    })

    const response = await fetch(url, options)
    const { post_status: postStatus } = await response.json()

    setLoading(false)

    if (postStatus === 'publish') setStatus(postStatus)
  }

  const handlePhotoFile = (
    formProps: FormikProps<FormType>,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target.files ? e.target.files[0] : ''

    formProps.setFieldValue('photo', target)

    setPhoto({
      preview: URL.createObjectURL(target),
      raw: target
    })
  }

  return (
    <>
      <Helmet>
        <title>Poste Sua Foto | Dogs</title>
      </Helmet>

      {status === 'publish' && <Redirect to="/conta/" />}

      <PageBase>
        <Container>
          <S.Wrapper>
            <Heading>Poste Sua Foto</Heading>

            <AccountNav id="photoPost" />
          </S.Wrapper>

          <S.Content>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formProps) => (
                <S.FormWrapper>
                  <Form>
                    <TextField label="Nome" name="name" type="text" />

                    <TextField label="Peso" name="weight" type="number" />

                    <TextField label="Idade" name="age" type="number" />

                    <S.InputFile
                      type="file"
                      name="photo"
                      onChange={(e) => handlePhotoFile(formProps, e)}
                    />

                    {formProps.errors && (
                      <S.Error>{formProps.errors.photo}</S.Error>
                    )}

                    {loading ? (
                      <Button type="submit" disabled>
                        Enviando...
                      </Button>
                    ) : (
                      <Button type="submit">Enviar</Button>
                    )}
                  </Form>
                </S.FormWrapper>
              )}
            </Formik>

            {photo.preview && <S.Preview src={photo.preview} />}
          </S.Content>
        </Container>
      </PageBase>
    </>
  )
}

export default PhotoPost
