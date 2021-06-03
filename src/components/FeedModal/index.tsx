import React, { Dispatch, SetStateAction, useEffect } from 'react'
import * as S from './styles'

import { fetchPhoto } from '../../store/photo'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/configureStore'

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
  const photoState = useSelector((state: RootState) => state.photo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhoto(String(modal.id)))
  }, [modal.id, dispatch])

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) setModal({ open: false, id: null })
  }

  return (
    <>
      {photoState.status === 'loading' ? (
        <Loading />
      ) : (
        <S.Wrapper onClick={handleOutsideClick}>
          <S.ContentWrapper>
            <Image
              src={photoState.photo?.src ? photoState.photo?.src : ''}
              alt={photoState.photo?.title ? photoState.photo?.title : ''}
            />

            <S.Content>
              <S.PhotoInfo>
                <Link to={`/perfil/${photoState.photo?.author}`}>
                  <S.PhotoUsername>@{photoState.photo?.author}</S.PhotoUsername>
                </Link>

                <S.PhotoViews>
                  <ViewsIcon />
                  {photoState.photo?.views}
                </S.PhotoViews>
              </S.PhotoInfo>

              <Link to={`/foto/${photoState.photo?.id}`}>
                <Heading>{photoState.photo?.title}</Heading>
              </Link>

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
            </S.Content>
          </S.ContentWrapper>
        </S.Wrapper>
      )}
    </>
  )
}

export default FeedModal
