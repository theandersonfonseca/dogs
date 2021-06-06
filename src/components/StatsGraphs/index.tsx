import { useEffect, useState } from 'react'
import * as S from './styles'

import { VictoryBar, VictoryPie, VictoryChart } from 'victory'

export type StatsType = {
  id: string
  title: string
  acessos: string
}

type StatsGraphsProps = {
  data: StatsType[]
}

const StatsGraphs = ({ data }: StatsGraphsProps) => {
  const [total, setTotal] = useState(0)
  const dataGraph = data[0]
    ? data.map((photo) => ({
        x: photo.title,
        y: Number(photo.acessos)
      }))
    : null

  useEffect(() => {
    if (!data[0]) return

    const viewsArr = data.map((photo) => photo.acessos)
    const totalCalc = viewsArr.reduce((acc, cur) => acc + Number(cur), 0)

    setTotal(totalCalc)
  }, [data])

  return (
    <S.Wrapper>
      {data[0] && dataGraph ? (
        <>
          {' '}
          <S.TotalWrapper>
            <S.Title>Acessos:</S.Title>
            <S.Views>{total}</S.Views>
          </S.TotalWrapper>
          <S.GraphItem>
            <VictoryPie
              data={dataGraph}
              innerRadius={50}
              padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
              style={{
                data: {
                  fillOpacity: 0.9,
                  stroke: '#ffffff',
                  strokeWidth: 2
                },
                labels: {
                  fontSize: 14,
                  fill: '#333333'
                }
              }}
            />
          </S.GraphItem>
          <S.GraphItem>
            <VictoryChart>
              <VictoryBar data={dataGraph} alignment="start" />
            </VictoryChart>
          </S.GraphItem>{' '}
        </>
      ) : (
        ''
      )}
    </S.Wrapper>
  )
}

export default StatsGraphs
