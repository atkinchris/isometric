import { ExtrudeGeometry, Mesh, Shape } from 'three'

import { material } from '../material'

const BOX_WIDTH = 3

const drawCab = group => {
  const cabShape = new Shape()
  cabShape.moveTo(0, 0)
  cabShape.lineTo(2, 0)
  cabShape.lineTo(2, 2.5)
  cabShape.lineTo(0.75, 2.5)
  cabShape.lineTo(0, 1.5)
  cabShape.lineTo(0, 0)
  const cabGeometry = new ExtrudeGeometry(cabShape, {
    curveSegments: 0,
    depth: BOX_WIDTH,
    bevelEnabled: false,
  })
  cabGeometry.translate(0, 0, -BOX_WIDTH / 2)
  const cab = new Mesh(cabGeometry, material)
  cab.position.set(-5, -1.5, 0)
  group.add(cab)
}

export default drawCab
