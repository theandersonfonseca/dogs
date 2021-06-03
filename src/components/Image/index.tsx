import React, { useState } from 'react'
import * as S from './styles'

type ImageProps = {
  src: string
  alt: string
}

const Image = ({ src, alt }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true)

  return (
    <S.Wrapper>
      {skeleton && <S.Skeleton />}
      <S.Image
        src={src}
        alt={alt}
        onLoad={() => setSkeleton(false)}
        className={skeleton ? 'skeleton' : ''}
      />
    </S.Wrapper>
  )
}

export default Image
