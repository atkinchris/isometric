import { Mesh, Shape, ShapeGeometry, DoubleSide } from 'three'

import { explodedMaterial } from '../material'

const BOX_HEIGHT = 4
const BOX_WIDTH = 3
const EXPLODE_DISTANCE = 4

const drawDoors = group => {
  const doorShape = new Shape()
  doorShape.moveTo(0, 0)
  doorShape.lineTo(BOX_WIDTH / 2, 0)
  doorShape.lineTo(BOX_WIDTH / 2, BOX_HEIGHT)
  doorShape.lineTo(0, BOX_HEIGHT)
  doorShape.lineTo(0, 0)
  const doorGeometry = new ShapeGeometry(doorShape)
  doorGeometry.rotateY(Math.PI / 2)
  doorGeometry.translate(3, -1.5, 0.5)

  const leftDoor = new Mesh(doorGeometry, explodedMaterial)
  leftDoor.position.set(EXPLODE_DISTANCE - 2, 0, 1)
  group.add(leftDoor)
  leftDoor.traverse(node => {
    // eslint-disable-next-line no-param-reassign
    node.material.side = DoubleSide
  })

  const rightDoor = new Mesh(doorGeometry, explodedMaterial)
  rightDoor.position.set(EXPLODE_DISTANCE - 1, 0, -0.5)
  group.add(rightDoor)
  rightDoor.traverse(node => {
    // eslint-disable-next-line no-param-reassign
    node.material.side = DoubleSide
  })
}

export default drawDoors
