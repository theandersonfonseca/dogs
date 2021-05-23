import * as S from './styles'

import PageBase from '../PageBase'

type FormBaseProps = {
  children: React.ReactNode
}

const FormBase = ({ children }: FormBaseProps) => (
  <PageBase>
    <S.Wrapper>
      <S.Image />

      <S.ContentSection>{children}</S.ContentSection>
    </S.Wrapper>
  </PageBase>
)

export default FormBase
