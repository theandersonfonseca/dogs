import { useEffect, useState } from 'react'
import * as S from './styles'

import { PHOTOS_GET } from '../../Api'

import { ReactComponent as ViewsIcon } from '../../assets/visualizacao.svg'
import Loading from '../Loading'
import FeedModal, { ModalType } from '../FeedModal'
import Image from '../Image'

type FeedProps = {
  user?: string | null
}

type PhotoType = {
  id: number
  src: string
  title: string
  acessos: string
}

const Feed = ({ user }: FeedProps) => {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState<PhotoType[]>([])
  const [modal, setModal] = useState<ModalType>({
    open: false,
    id: null
  })
  const [infinite, setInfinite] = useState(true)

  useEffect(() => {
    setLoading(true)

    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({
        page: String(page),
        total: '6',
        user: user ? user : ''
      })

      const response = await fetch(url, options)
      const data = await response.json()

      const photos = data.map((photo: PhotoType) => ({
        id: photo.id,
        src: photo.src,
        title: photo.title,
        acessos: photo.acessos
      }))

      if (photos.length < 6) setInfinite(false)

      setPhotos((oldPhotos) => [...oldPhotos, ...photos])
      setLoading(false)
    }

    fetchPhotos()
  }, [page, user])

  useEffect(() => {
    if (photos[0]) setLoading(false)
  }, [photos])

  const handlePhotoModal = (id: number) => {
    setModal({ open: true, id: String(id) })
  }

  useEffect(() => {
    let wait = false

    const onScroll = () => {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight

        if (scroll > height * 0.75 && !wait) {
          setPage((oldValue) => oldValue + 1)

          wait = true

          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('wheel', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onScroll)
    }
  }, [infinite])

  return (
    <>
      {loading && <Loading />}

      <S.Wrapper>
        {photos?.map((photo: PhotoType) => (
          <S.PhotoWrapper
            key={photo.id}
            onClick={() => handlePhotoModal(photo.id)}
          >
            <Image src={photo.src} alt={photo.title} />

            <S.Overlay>
              <ViewsIcon /> {photo.acessos}
            </S.Overlay>
          </S.PhotoWrapper>
        ))}
      </S.Wrapper>

      {modal.open && <FeedModal modal={modal} setModal={setModal} />}
    </>
  )
}

export default Feed
