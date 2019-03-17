import { MeshPhongMaterial, SmoothShading } from 'three'

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

export { material, explodedMaterial }
