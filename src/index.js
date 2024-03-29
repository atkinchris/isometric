import { Scene, OrthographicCamera, WebGLRenderer } from 'three'

import buildGeometry from './geometry'

const WIDTH = 512
const HEIGHT = 512
const SIZE = 8

const scene = new Scene()
const camera = new OrthographicCamera(-SIZE, SIZE, SIZE, -SIZE)

const renderer = new WebGLRenderer({ alpha: true, antialias: true })
renderer.setPixelRatio(2)
renderer.setSize(WIDTH, HEIGHT)
document.getElementById('root').appendChild(renderer.domElement)

const group = buildGeometry(scene)

// Debug positioning
group.rotateY(0)
// group.rotateY(Math.PI / 2)

camera.position.set(20, 20, 20)
// camera.position.set(0, 0, 30)
camera.lookAt(scene.position)
renderer.render(scene, camera)
