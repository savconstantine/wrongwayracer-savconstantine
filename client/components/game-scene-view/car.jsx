import React, { useState, useRef, useEffect } from 'react'
import { Sprite, useTick } from '@inlet/react-pixi'

const leftCarPositionX = 1120 / 2 - 300
const rightCarPositionX = 1120 / 2 + 300
const centerCarPositionX = 1120 / 2
const carPositionY = 649 - 110

const leftCarPositionXshowTexture = 1120 / 2 - 150
const rightCarPositionXshowTexture = 1120 / 2 + 150

let additionalDirection = 'center'

const Car = ({ setCarPosition, gameOver }) => {
  const [texture, setTexture] = useState('center')
  const [moveDirection, setMoveDirection] = useState('')
  const spriteRef = useRef()

  const textures = {
    center: 'images/cars/car_center.png',
    left: 'images/cars/car_left.png',
    right: 'images/cars/car_right.png'
  }

  useEffect(() => {
    const sprite = spriteRef.current
    sprite.x = centerCarPositionX
  }, [])

  const changeAdditionalDirection = (newDirection) => {
    if (newDirection === 'left' && additionalDirection === 'center') {
      additionalDirection = 'left'
    } else if (newDirection === 'right' && additionalDirection === 'center') {
      additionalDirection = 'right'
    } else if (newDirection === 'left' && additionalDirection === 'right') {
      additionalDirection = 'center'
    } else if (newDirection === 'right' && additionalDirection === 'left') {
      additionalDirection = 'center'
    }
  }

  const speed = 5
  const direction = {
    x: 5,
    y: 5
  }

  function update() {
    const sprite = spriteRef.current
    if (gameOver) {
      if (sprite.alpha > 0) sprite.alpha -= 0.05

      return
    }

    if (sprite.alpha < 1) sprite.alpha += 0.05

    if (moveDirection === 'left') {
      sprite.x -= direction.x * speed
    } else if (moveDirection === 'right') {
      sprite.x += direction.x * speed
    }

    if (sprite.x < leftCarPositionX) sprite.x = leftCarPositionX
    if (sprite.x > rightCarPositionX) sprite.x = rightCarPositionX

    if (
      (moveDirection === 'left' &&
        additionalDirection === 'center' &&
        sprite.x < centerCarPositionX) ||
      (moveDirection === 'right' &&
        additionalDirection === 'center' &&
        sprite.x > centerCarPositionX)
    ) {
      sprite.x = centerCarPositionX
    }

    sprite.y = carPositionY + Math.floor(Math.random() * 4) - 2

    if (sprite.x < leftCarPositionXshowTexture) {
      setTexture('left')
      setCarPosition('left')
    } else if (sprite.x > rightCarPositionXshowTexture) {
      setTexture('right')
      setCarPosition('right')
    } else {
      setTexture('center')
      setCarPosition('center')
    }
  }

  useEffect(() => {
    const onKeyDown = (event) => {
      switch (event.keyCode) {
        case 37: // Left arrow
          setMoveDirection('left')
          changeAdditionalDirection('left')
          break
        case 39: // Right arrow
          setMoveDirection('right')
          changeAdditionalDirection('right')
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [textures.length])

  useTick(() => {
    update()
  })

  return (
    <Sprite ref={spriteRef} image={textures[texture]} anchor={{ x: 0.5, y: 0.5 }} scale={0.5} />
  )
}

Car.propTypes = {}

export default React.memo(Car)
