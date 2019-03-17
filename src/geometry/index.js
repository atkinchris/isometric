import { Group } from 'three'

import drawBox from './box'
import drawCab from './cab'
import drawDoors from './doors'
import drawPanels from './panels'
import drawWheels from './wheels'

const buildGeometry = scene => {
  const group = new Group()
  // group.rotateY(Math.PI / 2)

  drawBox(group)
  drawCab(group)
  drawDoors(group)
  drawPanels(group)
  drawWheels(group)

  scene.add(group)
}

export default buildGeometry
