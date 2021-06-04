import { useEffect, useState } from 'react'
import * as S from './styles'

import { Link, Redirect, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'
import { fetchPhoto } from '../../store/photo'
import { PHOTO_DELETE } from '../../Api'

import { ReactComponent as ViewsIcon } from '../../assets/visualizacao.svg'

import Heading from '../../components/Heading'
import PageBase from '../../templates/PageBase'
import Container from '../../components/Container'
import Loading from '../../components/Loading'
import Image from '../../components/Image'

import CommentPost from '../../components/CommentPost'

const Photo = () => {
  const { id } = useParams<{ id: string }>()
  const { photo, comments, status } = useSelector(
    (state: RootState) => state.photo
  )
  const { username } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    dispatch(fetchPhoto(id))
  }, [dispatch, id])

  const handlePhotoDelete = async () => {
    const { url, options } = PHOTO_DELETE(photo?.id as string)

    const response = await fetch(url, options)
    const reponseData = await response.json()

    if (reponseData === 'Post deletado.') setDeleted(true)
  }

  return (
    <>
      <Helmet>
        <title>{`${photo?.title} | Dogs`}</title>
      </Helmet>

      {deleted && <Redirect to="/" />}

      <PageBase>
        <Container>
          {status === 'loading' ? (
            <Loading />
          ) : (
            <S.Wrapper>
              <Image src={photo?.src as string} alt={photo?.title as string} />

              <S.PhotoInfo>
                {username === photo?.author ? (
                  <S.DeletePhoto onClick={handlePhotoDelete}>
                    Deletar
                  </S.DeletePhoto>
                ) : (
                  <Link to={`/perfil/${photo?.author}`}>
                    <S.PhotoUsername>@{photo?.author}</S.PhotoUsername>
                  </Link>
                )}

                <S.PhotoViews>
                  <ViewsIcon />
                  {photo?.views}
                </S.PhotoViews>
              </S.PhotoInfo>

              <Heading>{photo?.title}</Heading>

              <S.DogInfo>
                <S.DogWeight>| {photo?.weight} kg</S.DogWeight>
                <S.DogAge>| {photo?.age} anos</S.DogAge>
              </S.DogInfo>

              <S.Coments>
                {comments?.map((comment) => (
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
