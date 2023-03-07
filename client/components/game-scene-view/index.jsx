import React, { useEffect, useState } from 'react'
import { Stage, AnimatedSprite, Container } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import { useSelector, useDispatch } from 'react-redux'

import Background from './background'
import Fade from './fade'
import Car from './car'
import Enemy from './enemy'
import SideroadLeft from './sideroad-left'
import SideroadRight from './sideroad-right'

import { setEnemy } from '../../redux/reducers/data'

const ticker = new PIXI.Ticker()
ticker.maxFPS = 40

const stageWidth = 1120
const stageHeight = 649
const radius = 20

const GameSceneView = () => {
  const enemy = useSelector((state) => state.data.enemy)
  const [carPosition, setCarPosition] = useState('center') // eslint-disable-line no-unused-vars

  const [currentFrame, setCurrentFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [frames, setFrames] = useState([]) // eslint-disable-line no-unused-vars
  const [gameOver, setGameOver] = useState(false) // eslint-disable-line no-unused-vars

  const dispatch = useDispatch()

  const updateEnemy = (data) => {
    dispatch(setEnemy(data))
  }

  useEffect(() => {
    if (enemy.direction === carPosition && enemy.y > 500 && enemy.y < 650) {
      setIsPlaying(true)
      setGameOver(true)
    }
  }, [enemy])

  useEffect(() => {
    const texture = PIXI.Texture.from('images/explosion_spritesheet.avif')

    const frameWidth = 6720 / 6 // width of each frame
    const frameHeight = 3245 / 5 // height of each frame

    let vFrames = []

    for (let i = 0; i < 30; i += 1) {
      const col = i % 6 // column of current frame
      const row = Math.floor(i / 6) // row of current frame

      const frame = new PIXI.Rectangle(col * frameWidth, row * frameHeight, frameWidth, frameHeight)

      vFrames = [...vFrames, { name: `frame${i}`, frame }]
    }

    setFrames(vFrames.map((v) => new PIXI.Texture(texture.baseTexture, v.frame)))
  }, [])

  const mask = new PIXI.Graphics()
  mask.beginFill(0xffffff)
  mask.drawRoundedRect(0, 0, stageWidth, stageHeight, radius)
  mask.endFill()

  return (
    <Stage
      width={stageWidth}
      height={stageHeight}
      options={{ transparent: true, backgroundAlpha: 0 }}
    >
      <Container mask={mask}>
        <Background />

        <SideroadRight gameOver={gameOver} />
        <SideroadLeft gameOver={gameOver} />

        <Enemy updateEnemy={updateEnemy} enemy={enemy} gameOver={gameOver} />

        <Fade />

        <Car setCarPosition={setCarPosition} gameOver={gameOver} />

        {isPlaying && (
          <Container position={[500, 250]} anchor={0.5}>
            <AnimatedSprite
              animationSpeed={0.3}
              isPlaying={isPlaying}
              textures={frames}
              anchor={0.5}
              loop={false}
              currentFrame={currentFrame}
              onComplete={() => {
                setCurrentFrame(0)
                setIsPlaying(false)
              }}
            />
          </Container>
        )}
      </Container>
    </Stage>
  )
}

GameSceneView.propTypes = {}

export default GameSceneView
