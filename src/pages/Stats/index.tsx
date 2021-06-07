import { lazy, Suspense, useEffect, useState } from 'react'
import * as S from './styles'

import { Helmet } from 'react-helmet'

import { STATS_GET } from '../../Api'

import PageBase from '../../templates/PageBase'
import Heading from '../../components/Heading'
import Container from '../../components/Container'
import AccountNav from '../../components/AccountNav'
import Loading from '../../components/Loading'
import { StatsType } from '../../components/StatsGraphs'

const StatsGraphs = lazy(() => import('../../components/StatsGraphs'))

const Stats = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<StatsType[]>({} as StatsType[])

  useEffect(() => {
    setLoading(true)

    const getStats = async () => {
      const { url, options } = STATS_GET()

      const response = await fetch(url, options)
      const responseData = await response.json()

      setData(responseData)
      setLoading(false)
    }

    getStats()
  }, [])

  return (
    <>
      <Helmet>
        <title>Estatísticas | Dogs</title>
      </Helmet>

      <PageBase>
        <Container>
          <S.Wrapper>
            <Heading>Estatísticas</Heading>

            <AccountNav id="stats" />
          </S.Wrapper>

          {loading ? (
            <Loading />
          ) : (
            <S.GraphWrapper>
              <Suspense fallback={<div></div>}>
                <StatsGraphs data={data} />
              </Suspense>
            </S.GraphWrapper>
          )}
        </Container>
      </PageBase>
    </>
  )
}

export default Stats
