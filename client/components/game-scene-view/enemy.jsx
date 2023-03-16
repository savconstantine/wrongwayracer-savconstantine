import React, { useState, useRef, useEffect } from 'react'
import { Sprite, useTick } from '@inlet/react-pixi'

const stageWidth = 1120
const stageHeight = 649

const initX = stageWidth / 2 - 25
const initY = stageHeight / 2 + 50
const initVscale = 0.01
const initVspeed = 0.003

const Enemy = ({ updateEnemy, enemy, gameOver }) => {
  const [texture, setTexture] = useState('center')
  const spriteRef = useRef()

  // updateEnemy(enemy)

  const textures = {
    center: 'images/cars/enemy_center.png',
    left: 'images/cars/enemy_left.png',
    right: 'images/cars/enemy_right.png'
  }

  useEffect(() => {
    const sprite = spriteRef.current

    sprite.x = initX
    sprite.y = initY
    sprite.vscale = initVscale
    sprite.vspeed = initVspeed
    sprite.scale.set(0)
    sprite.alpha = 1
  }, [])

  const speed = 1
  const direction = {
    x: 5,
    y: 3
  }

  function update() {
    const sprite = spriteRef.current

    const resetSprite = () => {
      sprite.x = initX
      sprite.y = initY
      sprite.vscale = initVscale
      sprite.vspeed = initVspeed
      sprite.scale.set(0)
    }

    if (!enemy.isActive) {
      resetSprite()
      return
    }

    if (gameOver) {
      if (sprite.alpha > 0) sprite.alpha -= 0.05
      return
    }
    if (sprite.alpha < 1) sprite.alpha += 0.05
    if (enemy.direction === 'left') {
      setTexture('left')
      sprite.x -= direction.x * (sprite.y < 450 ? speed / 2 : speed)
      sprite.y += direction.y * (sprite.y < 450 ? speed / 2 : speed)
    } else if (enemy.direction === 'right') {
      setTexture('right')
      sprite.x += direction.x * (sprite.y < 450 ? speed / 2 : speed)
      sprite.y += direction.y * (sprite.y < 450 ? speed / 2 : speed)
    } else if (enemy.direction === 'center') {
      setTexture('center')
      sprite.y += direction.y * (sprite.y < 450 ? speed / 2 : speed)
    }

    sprite.vscale = sprite.vscale >= 0.6 ? 0.6 : sprite.vscale + 0.01

    sprite.scale.set(sprite.vscale)
    sprite.vspeed += sprite.vspeed * 0.03

    updateEnemy({
      isActive: true,
      direction: enemy.direction,
      x: sprite.x,
      y: sprite.y
    })

    if (sprite.y > 900) {
      // Reset the position of the sprite to the center
      resetSprite()
    }
  }

  useTick(() => {
    update()
  })

  return <Sprite ref={spriteRef} image={textures[texture]} anchor={{ x: 0.5, y: 0.5 }} />
}

Enemy.propTypes = {}

export default React.memo(Enemy)
