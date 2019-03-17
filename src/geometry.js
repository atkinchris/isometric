import { BoxGeometry, MeshPhongMaterial, Mesh, SmoothShading } from 'three'

const buildGeometry = scene => {
  const material = new MeshPhongMaterial({
    color: 0x555555,
    specular: 0xffffff,
    shininess: 50,
    flatShading: SmoothShading,
  })

  const boxGeometry = new BoxGeometry(4, 3, 2)
  const box = new Mesh(boxGeometry, material)
  scene.add(box)
}

export default buildGeometry
