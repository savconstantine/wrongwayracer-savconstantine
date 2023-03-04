import React, { useMemo, useEffect, useState } from 'react'
import { BlurFilter } from 'pixi.js'
import { Stage, Container, Sprite, Text } from '@pixi/react'
import socketIO from 'socket.io-client'

const socket = socketIO.connect('wss://wrongway-racer-api.spls.ae/')

// import Head from './head'

const Dummy = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), [])
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
      <Stage>
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

Dummy.propTypes = {}

export default React.memo(Dummy)
