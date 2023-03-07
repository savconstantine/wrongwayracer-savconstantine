import React, { useRef, useEffect } from 'react'
import { Container, Sprite, useTick } from '@inlet/react-pixi'

const stageWidth = 1120
const stageHeight = 649

const SpriteAnimation = ({
  image,
  initX,
  initY,
  vx,
  vy,
  vscale,
  vscaleModifier = 0.003,
  vspeed,
  vspeedModifier = 0.001,
  resetPositionXCondition = -900,
  gameOver
}) => {
  const spriteRef = useRef(null)

  useEffect(() => {
    const sprite = spriteRef.current

    sprite.x = initX
    sprite.y = initY
    sprite.scale.set(0)

    sprite.vx = vx
    sprite.vy = vy
    sprite.vscale = vscale
    sprite.vspeed = vspeed
  }, [image, initX, initY, vx, vy, vscale, vspeed])

  // Define the animation loop using the useTick hook
  useTick(() => {
    if (gameOver) return
    const sprite = spriteRef.current

    // Move the sprite by its velocity
    sprite.x += sprite.vx * sprite.vspeed
    sprite.y += sprite.vy * sprite.vspeed
    sprite.vscale += vscaleModifier
    sprite.scale.set(sprite.vscale * sprite.vspeed)
    sprite.vspeed += sprite.vspeed * vspeedModifier

    if (sprite.x < resetPositionXCondition) {
      // Reset the position of the sprite to the center
      sprite.x = initX
      sprite.y = initY
      sprite.vscale = 0
      sprite.vspeed = vspeed
      sprite.scale.set(0)
    }
  })

  return <Sprite ref={spriteRef} image={image} anchor={{ x: 0.5, y: 0.5 }} />
}

const SideroadLeft = ({ gameOver }) => {
  const sideRoadLeftItems = [
    {
      image: 'images/mountain_left.png',
      initX: stageWidth / 2 - 80,
      initY: stageHeight / 2 + 50,
      vx: -50,
      vy: 0.4,
      vscale: 0.0005,
      vscaleModifier: 0.011,
      vspeed: 0.01,
      vspeedModifier: 0.001,
      resetPositionXCondition: -300
    },
    {
      image: 'images/sideroad_left.png',
      initX: stageWidth / 2 - 100,
      initY: stageHeight / 2 + 50,
      vx: -10,
      vy: 2,
      vscale: 0.0004,
      vspeed: 0.09,
      vspeedModifier: 0.003,
      resetPositionXCondition: -1000
    }
  ]

  return (
    <Container x={0} y={0}>
      {sideRoadLeftItems.map((item) => (
        <SpriteAnimation
          key={item.image}
          image={item.image}
          initX={item.initX}
          initY={item.initY}
          vx={item.vx}
          vy={item.vy}
          vscale={item.vscale}
          vscaleModifier={item.vscaleModifier}
          vspeed={item.vspeed}
          vspeedModifier={item.vspeedModifier}
          resetPositionXCondition={item.resetPositionXCondition}
          gameOver={gameOver}
        />
      ))}
    </Container>
  )
}

SideroadLeft.propTypes = {}

export default SideroadLeft
