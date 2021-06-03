import { useEffect } from 'react'
import * as S from './styles'

import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'
import { fetchPhoto } from '../../store/photo'

import { ReactComponent as ViewsIcon } from '../../assets/visualizacao.svg'

import Heading from '../../components/Heading'
import PageBase from '../../templates/PageBase'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
import Image from '../../components/Image'

import CommentPost from '../../components/CommentPost'

const Photo = () => {
  const { id } = useParams<{ id: string }>()
  const photoState = useSelector((state: RootState) => state.photo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhoto(id))
  }, [dispatch, id])

  return (
    <>
      <Helmet>
        <title>{`${photoState.photo?.title} | Dogs`}</title>
      </Helmet>

      <PageBase>
        <Container>
          {photoState.status === 'loading' ? (
            <Loading />
          ) : (
            <S.Wrapper>
              <Image
                src={photoState.photo?.src ? photoState.photo?.src : ''}
                alt={photoState.photo?.title ? photoState.photo?.title : ''}
              />

              <S.PhotoInfo>
                <Link to={`/perfil/${photoState.photo?.author}`}>
                  <S.PhotoUsername>@{photoState.photo?.author}</S.PhotoUsername>
                </Link>

                <S.PhotoViews>
                  <ViewsIcon />
                  {photoState.photo?.views}
                </S.PhotoViews>
              </S.PhotoInfo>

              <Heading>{photoState.photo?.title}</Heading>

              <S.DogInfo>
                <S.DogWeight>| {photoState.photo?.weight} kg</S.DogWeight>
                <S.DogAge>| {photoState.photo?.age} anos</S.DogAge>
              </S.DogInfo>

              <S.Coments>
                {photoState.comments?.map((comment) => (
                  <S.Coment key={comment.commentID}>
                    <b>{comment.commentAuthor}:</b>
                    {comment.commentContent}
                  </S.Coment>
                ))}
              </S.Coments>

              <CommentPost />
            </S.Wrapper>
          )}
        </Container>
      </PageBase>
    </>
  )
}

export default Photo
