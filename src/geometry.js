import {
  BoxGeometry,
  Group,
  MeshPhongMaterial,
  ExtrudeGeometry,
  Mesh,
  SmoothShading,
  Shape,
  ShapeGeometry,
  DoubleSide,
} from 'three'

const buildGeometry = scene => {
  const group = new Group()
  // group.rotateY(Math.PI / 2)
  const BOX_HEIGHT = 4
  const BOX_LENGTH = 6
  const BOX_WIDTH = 3
  const EXPLODE_DISTANCE = 4

  const material = new MeshPhongMaterial({
    color: 0x555555,
    specular: 0xffffff,
    shininess: 50,
    flatShading: SmoothShading,
  })

  const explodedMaterial = new MeshPhongMaterial({
    color: 0x225555,
    specular: 0xffffff,
    shininess: 50,
    flatShading: SmoothShading,
  })

  {
    const boxGeometry = new BoxGeometry(BOX_LENGTH, BOX_HEIGHT, BOX_WIDTH)
    boxGeometry.translate(0, 0.5, 0)
    const box = new Mesh(boxGeometry, material)
    box.position.set(0, 0, 0)
    group.add(box)
  }

  {
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

  {
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

  {
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

  scene.add(group)
}

export default buildGeometry
