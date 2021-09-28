import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import { getTopRankingAciton } from '../store/creatActions'
import { useSelector } from 'react-redux'

import RemThemeHeader from '@/components/theme-header-rem'
import YHTopRanking from '@/components/top-ranking/index.jsx'
import { RankingWrapper } from './style'


export default memo(function RemRanking() {


  const upRanking = useSelector((state) => {
    return {
      upRanking: state.getIn(['recommend', 'upRanking'])
    }
  }, shallowEqual)

  const newRanking = useSelector((state) => {
    return {
      newRanking: state.getIn(['recommend', 'newRanking'])
    }
  }, shallowEqual)

  const originRanking = useSelector((state) => {
    return {
      originRanking: state.getIn(['recommend', 'originRanking'])
    }
  }, shallowEqual)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopRankingAciton(0))
    dispatch(getTopRankingAciton(2))
    dispatch(getTopRankingAciton(3))

  }, [dispatch])

  return (
    <>
      <RemThemeHeader title='排行榜' links={[]} />
      <RankingWrapper>
        <YHTopRanking info={upRanking.upRanking} />
        <YHTopRanking info={newRanking.newRanking} />
        <YHTopRanking info={originRanking.originRanking} />
      </RankingWrapper>

    </>
  )
})
