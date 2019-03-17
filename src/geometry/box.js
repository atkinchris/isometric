import { BoxGeometry, Mesh } from 'three'

import { material } from '../material'

const BOX_HEIGHT = 4
const BOX_LENGTH = 6
const BOX_WIDTH = 3

const drawBox = group => {
  const boxGeometry = new BoxGeometry(BOX_LENGTH, BOX_HEIGHT, BOX_WIDTH)
  boxGeometry.translate(0, 0.5, 0)
  const box = new Mesh(boxGeometry, material)
  box.position.set(0, 0, 0)
  group.add(box)
}

export default drawBox
