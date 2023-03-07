import React, { useMemo } from 'react'
import { BlurFilter } from 'pixi.js'
import { Stage } from '@inlet/react-pixi'
import { useSelector, useDispatch } from 'react-redux'

import Background from './background'
import Fade from './fade'
import Car from './car'
import Enemy from './enemy'
import SideroadLeft from './sideroad-left'
import SideroadRight from './sideroad-right'

import { setEnemy } from '../../redux/reducers/data'

const GameSceneView = () => {
  const enemy = useSelector((state) => state.data.enemy)
  const blurFilter = useMemo(() => new BlurFilter(4), []) // eslint-disable-line no-unused-vars
  const blurFilterMountainFade = useMemo(() => new BlurFilter(20), []) // eslint-disable-line no-unused-vars
  const noBlur = useMemo(() => new BlurFilter(0), []) // eslint-disable-line no-unused-vars

  const dispatch = useDispatch()

  const updateEnemy = (data) => {
    dispatch(setEnemy(data))
  }

  return (
    <Stage width={1120} height={649}>
      <Background />

      <SideroadRight />
      <SideroadLeft />

      <Enemy updateEnemy={updateEnemy} enemy={enemy} />

      <Fade />
      <Car />
    </Stage>
  )
}

GameSceneView.propTypes = {}

export default GameSceneView
