import React, { Dispatch, SetStateAction, useEffect } from 'react'
import * as S from './styles'

import { fetchPhoto } from '../../store/photo'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'
import { PHOTO_DELETE } from '../../Api'

import { Link } from 'react-router-dom'

import { ReactComponent as ViewsIcon } from '../../assets/visualizacao.svg'
import Heading from '../Heading'
import Loading from '../Loading'
import Image from '../Image'

import CommentPost from '../CommentPost'

export type ModalType = {
  open: boolean
  id: string | null
}

type FeedModalProps = {
  modal: ModalType
  setModal: Dispatch<SetStateAction<ModalType>>
}

const FeedModal = ({ modal, setModal }: FeedModalProps) => {
  const { photo, comments, status } = useSelector(
    (state: RootState) => state.photo
  )
  const { username } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhoto(String(modal.id)))
  }, [modal.id, dispatch])

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) setModal({ open: false, id: null })
  }

  const handlePhotoDelete = async () => {
    const { url, options } = PHOTO_DELETE(photo?.id as string)

    const response = await fetch(url, options)
    const reponseData = await response.json()

    if (reponseData === 'Post deletado.') window.location.reload()
  }

  return (
    <>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <S.Wrapper onClick={handleOutsideClick}>
          <S.ContentWrapper>
            <Image src={photo?.src as string} alt={photo?.title as string} />

            <S.Content>
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

              <Link to={`/foto/${photo?.id}`}>
                <Heading>{photo?.title}</Heading>
              </Link>

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
            </S.Content>
          </S.ContentWrapper>
        </S.Wrapper>
      )}
    </>
  )
}

export default FeedModal
