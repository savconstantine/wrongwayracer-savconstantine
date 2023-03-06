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
  resetPositionXCondition = -900
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
  useTick((delta) => {
    const sprite = spriteRef.current

    // Move the sprite by its velocity
    sprite.x += sprite.vx * sprite.vspeed * delta
    sprite.y += sprite.vy * sprite.vspeed * delta
    sprite.vscale += vscaleModifier
    sprite.scale.set(sprite.vscale * sprite.vspeed * delta)
    sprite.vspeed += sprite.vspeed * vspeedModifier

    if (sprite.x > resetPositionXCondition) {
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

const SideroadRight = () => {
  const SideroadRightItems = [
    {
      image: 'images/mountain_right.png',
      initX: stageWidth / 2 + 50,
      initY: stageHeight / 2 + 50,
      vx: 50,
      vy: 0.5,
      vscale: 0.0005,
      vscaleModifier: 0.011,
      vspeed: 0.015,
      vspeedModifier: 0.001,
      resetPositionXCondition: 1300
    },
    {
      image: 'images/sideroad_right.png',
      initX: stageWidth / 2,
      initY: stageHeight / 2 + 50,
      vx: 22,
      vy: 5,
      vscale: 0.001,
      vscaleModifier: 0.006,
      vspeed: 0.09,
      vspeedModifier: 0.003,
      resetPositionXCondition: 3000
    }
  ]

  return (
    <Container x={0} y={0}>
      {SideroadRightItems.map((item) => (
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
        />
      ))}
    </Container>
  )
}

SideroadRight.propTypes = {}

export default SideroadRight
