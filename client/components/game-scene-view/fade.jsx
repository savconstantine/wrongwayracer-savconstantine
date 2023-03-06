import React, { useMemo, useRef, useEffect } from 'react'
import { BlurFilter } from 'pixi.js'
import { Graphics } from '@inlet/react-pixi'

const BlurredGraphics = ({
  blurFilter = 20,
  x = 1120 / 2,
  y = 649 / 2,
  alpha = 0.4,
  scale = 0.5,
  drawEllipse = { x: 0, y: 0, width: 900, height: 100 }
}) => {
  const graphicsRef = useRef(null)
  const blurFilterMountainFade = useMemo(() => new BlurFilter(blurFilter), [])

  useEffect(() => {
    const graphics = graphicsRef.current

    graphics.x = x
    graphics.y = y
    graphics.alpha = alpha

    graphics.scale.set(scale)
  }, [])

  return (
    <Graphics
      ref={graphicsRef}
      filters={[blurFilterMountainFade]}
      draw={(g) => {
        // Draw a circle with a radius of 100 in the center of the stage
        g.beginFill(0xffffff)
        g.drawEllipse(drawEllipse.x, drawEllipse.y, drawEllipse.width, drawEllipse.height)
        g.endFill()
      }}
    />
  )
}

const Background = () => {
  return (
    <>
      <BlurredGraphics
        blurFilter={20}
        y={649 / 2 + 60}
        alpha={0.4}
        scale={0.5}
        drawEllipse={{ x: 0, y: 0, width: 1000, height: 100 }}
      />
      <BlurredGraphics
        blurFilter={20}
        y={649 / 2 + 60}
        alpha={0.6}
        scale={0.3}
        drawEllipse={{ x: 0, y: 0, width: 850, height: 85 }}
      />
      <BlurredGraphics
        blurFilter={15}
        y={649 / 2 + 60}
        alpha={0.6}
        scale={0.3}
        drawEllipse={{ x: 0, y: 0, width: 800, height: 80 }}
      />
    </>
  )
}

Background.propTypes = {}

export default React.memo(Background)
