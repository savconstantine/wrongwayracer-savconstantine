import React, { useMemo } from 'react'
import { BlurFilter } from 'pixi.js'
import { Sprite } from '@inlet/react-pixi'

const Background = () => {
  const blurFilterMountainFade = useMemo(() => new BlurFilter(20), [])

  return (
    <>
      <Sprite
        image="images/sky.png"
        x={1120 / 2}
        y={649 / 2}
        anchor={{ x: 0.5, y: 0.5 }}
        scale={0.28}
      />
      <Sprite
        image="images/mountain_fade.png"
        x={1120 / 2}
        y={649 / 2 + 50}
        anchor={{ x: 0.5, y: 0.5 }}
        scale={0.42}
      />

      <Sprite
        image="images/road.png"
        x={1120 / 2}
        y={649 - 110}
        anchor={{ x: 0.5, y: 0.5 }}
        scale={0.28}
      />

      <Sprite
        image="images/mountain_fade.png"
        x={1120 / 2}
        y={649 / 2 + 70}
        anchor={{ x: 0.5, y: 0.5 }}
        scale={0.3}
        filters={[blurFilterMountainFade]}
      />

      <Sprite
        image="images/mountain_fade.png"
        x={1120 / 2}
        y={649 / 2 + 70}
        anchor={{ x: 0.5, y: 0.5 }}
        scale={0.3}
        filters={[blurFilterMountainFade]}
      />
    </>
  )
}

Background.propTypes = {}

export default React.memo(Background)
