import { Mesh, Shape, ExtrudeGeometry, Line, Geometry, Vector3, LineDashedMaterial } from 'three'

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

const makeLine = (x, y, z = 0) => {
  const lineGeometry = new Geometry()
  lineGeometry.vertices.push(new Vector3(0, 0, 2))
  lineGeometry.vertices.push(new Vector3(0, 0, -1))
  const lineMaterial = new LineDashedMaterial({ color: 0x000000, dashSize: 0.25, gapSize: 0.5 })
  const line = new Line(lineGeometry, lineMaterial)
  lineGeometry.translate(x, y, z)
  line.computeLineDistances()
  return line
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

  const extrudeSettings = { depth: 0.1, bevelEnabled: false }
  const panelGeometry = new ExtrudeGeometry(panelShape, extrudeSettings)
  panelGeometry.translate(-BOX_LENGTH / 2, -1.5, 0)

  const leftPanel = new Mesh(panelGeometry, explodedMaterial)
  leftPanel.position.set(0, 0, EXPLODE_DISTANCE)
  group.add(leftPanel)

  group.add(makeLine(-2.35, 2.2, 4))
  group.add(makeLine(-2.35, -0.8, 4))
  group.add(makeLine(2.65, 2.2, 4))
  group.add(makeLine(2.65, -0.8, 4))

  const rightPanel = new Mesh(panelGeometry, explodedMaterial)
  rightPanel.position.set(0, 0, -EXPLODE_DISTANCE)
  group.add(rightPanel)

  group.add(makeLine(-2.35, 2.2, -5))
  group.add(makeLine(-2.35, -0.8, -5))
  group.add(makeLine(2.65, 2.2, -5))
  group.add(makeLine(2.65, -0.8, -5))
}

export default drawPanels
