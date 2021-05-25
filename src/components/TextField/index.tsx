import * as S from './styles'

import { FieldHookConfig, useField } from 'formik'

export type TextFieldProps = {
  label: string
}

const TextField = ({
  label,
  ...props
}: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props)

  return (
    <S.Wrapper>
      <S.Label htmlFor={field.name}>{label}</S.Label>

      <S.Input {...field} type={props.type} />

      {meta.error && <S.Error>{meta.error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
