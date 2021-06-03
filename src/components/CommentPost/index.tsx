import { useState } from 'react'
import * as S from './styles'

import { RootState } from '../../store/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import { photoActions } from '../../store/photo'
import { COMMENT_POST } from '../../Api'

import { ReactComponent as SendCommentIcon } from '../../assets/enviar.svg'

import IsAuth from '../../helpers/isAuth'

const CommentPost = () => {
  const photoState = useSelector((state: RootState) => state.photo)
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
  const [sendingComment, setSendingComment] = useState(false)

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (comment.trim().length === 0) return

    setSendingComment(true)

    const { url, options } = COMMENT_POST(String(photoState.photo?.id), {
      comment: comment
    })

    const response = await fetch(url, options)
    const responseData = await response.json()

    const {
      comment_ID: commentID,
      comment_author: commentAuthor,
      comment_content: commentContent
    } = responseData

    dispatch(
      photoActions.addComment({ commentID, commentAuthor, commentContent })
    )

    setComment('')
    setSendingComment(false)
  }

  return (
    <>
      {IsAuth() && (
        <S.FormComment>
          <S.TextAreaComment
            placeholder="Comente..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <S.ButtonComment
            onClick={handleSubmitComment}
            disabled={sendingComment}
          >
            <SendCommentIcon />
          </S.ButtonComment>
        </S.FormComment>
      )}
    </>
  )
}

export default CommentPost
