import React, { useMemo, useEffect, useState } from 'react'
import { BlurFilter } from 'pixi.js'
import { Stage, Container, Sprite, Text } from '@inlet/react-pixi'
import socketIO from 'socket.io-client'

import Background from './background'
import Car from './car'
import SideroadLeft from './sideroad-left'

const socket = socketIO.connect('wss://wrongway-racer-api.spls.ae/')
// eslint-disable-file no-use-before-define
// import Head from './head'

const GameSceneView = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []) // eslint-disable-line no-unused-vars
  const blurFilterMountainFade = useMemo(() => new BlurFilter(20), []) // eslint-disable-line no-unused-vars
  const noBlur = useMemo(() => new BlurFilter(0), []) // eslint-disable-line no-unused-vars
  const [isConnected, setIsConnected] = useState(socket.connected)

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    socket.onAny((eventName, ...args) => {
      // eslint-disable-next-line no-console
      console.log(eventName, args)
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('pong')
    }
  }, [])

  return (
    <>
      <div>
        <p>Connected: {`${isConnected}`}</p>
      </div>

      <Stage width={1120} height={649}>
        <Background />

        <Sprite
          image="images/mountain_right.png"
          x={1120 / 2 + 300}
          y={649 / 2}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={0.18}
        />

        <Sprite
          image="images/sideroad_right.png"
          x={1120 / 2 + 300}
          y={649 / 2 + 130}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={0.18}
        />

        <SideroadLeft />

        <Sprite
          image="images/cars/enemy_right.png"
          x={1120 / 2 + 300}
          y={649 - 110}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={0.8}
          filters={[noBlur]}
        />
        <Sprite
          image="images/cars/car_center.png"
          x={1120 / 2}
          y={649 - 110}
          anchor={{ x: 0.5, y: 0.5 }}
          scale={0.5}
          filters={[noBlur]}
        />
        <Sprite
          image="https://pixijs.io/pixi-react/img/bunny.png"
          x={400}
          y={270}
          anchor={{ x: 0.5, y: 0.5 }}
        />

        <Container x={400} y={330}>
          <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
        </Container>
      </Stage>
    </>
  )
}

GameSceneView.propTypes = {}

export default GameSceneView
