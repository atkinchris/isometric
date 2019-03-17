import { Mesh, Shape, ExtrudeGeometry } from 'three'

import { explodedMaterial } from '../material'

const EXPLODE_DISTANCE = 4
const BOX_HEIGHT = 4
const BOX_LENGTH = 6

const makeHole = (x, y) => {
  const holeRadius = 0.15
  const holeShape = new Shape()
  holeShape.moveTo(0 + x, holeRadius + y)
  holeShape.quadraticCurveTo(holeRadius + x, holeRadius + y, holeRadius + x, 0 + y)
  holeShape.quadraticCurveTo(holeRadius + x, -holeRadius + y, 0 + x, -holeRadius + y)
  holeShape.quadraticCurveTo(-holeRadius + x, -holeRadius + y, -holeRadius + x, 0 + y)
  holeShape.quadraticCurveTo(-holeRadius + x, holeRadius + y, 0 + x, holeRadius + y)
  return holeShape
}

const drawPanels = group => {
  const panelShape = new Shape()
  panelShape.moveTo(0, 0)
  panelShape.lineTo(BOX_LENGTH, 0)
  panelShape.lineTo(BOX_LENGTH, BOX_HEIGHT)
  panelShape.lineTo(0, BOX_HEIGHT)
  panelShape.lineTo(0, 0)

  panelShape.holes.push(makeHole(0.5, 3.5))
  panelShape.holes.push(makeHole(0.5, 0.5))
  panelShape.holes.push(makeHole(5.5, 3.5))
  panelShape.holes.push(makeHole(5.5, 0.5))

  const extrudeSettings = { amount: 0.1, bevelEnabled: false }
  const panelGeometry = new ExtrudeGeometry(panelShape, extrudeSettings)
  panelGeometry.translate(-BOX_LENGTH / 2, -1.5, 0)

  const leftPanel = new Mesh(panelGeometry, explodedMaterial)
  leftPanel.position.set(0, 0, EXPLODE_DISTANCE)
  group.add(leftPanel)

  const rightPanel = new Mesh(panelGeometry, explodedMaterial)
  rightPanel.position.set(0, 0, -EXPLODE_DISTANCE)
  group.add(rightPanel)
}

export default drawPanels
