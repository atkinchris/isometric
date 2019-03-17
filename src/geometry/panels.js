import { Mesh, Shape, ShapeGeometry } from 'three'

import { explodedMaterial } from '../material'

const EXPLODE_DISTANCE = 4
const BOX_HEIGHT = 4
const BOX_LENGTH = 6

const drawPanels = group => {
  const panelShape = new Shape()
  panelShape.moveTo(0, 0)
  panelShape.lineTo(BOX_LENGTH, 0)
  panelShape.lineTo(BOX_LENGTH, BOX_HEIGHT)
  panelShape.lineTo(0, BOX_HEIGHT)
  panelShape.lineTo(0, 0)
  const panelGeometry = new ShapeGeometry(panelShape)
  panelGeometry.translate(-BOX_LENGTH / 2, -1.5, 0)

  const leftPanel = new Mesh(panelGeometry, explodedMaterial)
  leftPanel.position.set(0, 0, EXPLODE_DISTANCE)
  group.add(leftPanel)

  const rightPanel = new Mesh(panelGeometry, explodedMaterial)
  rightPanel.position.set(0, 0, -EXPLODE_DISTANCE)
  group.add(rightPanel)
}

export default drawPanels
