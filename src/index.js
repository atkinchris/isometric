import { AmbientLight, DirectionalLight, Scene, OrthographicCamera, WebGLRenderer } from 'three'

import buildGeometry from './geometry'

const WIDTH = 512
const HEIGHT = 512
const SIZE = 8

const scene = new Scene()
const camera = new OrthographicCamera(-SIZE, SIZE, SIZE, -SIZE)

const renderer = new WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize(WIDTH, HEIGHT)
document.getElementById('root').appendChild(renderer.domElement)

scene.add(new AmbientLight(0x4000ff))

const light = new DirectionalLight(0xffffff, 2)
light.position.set(10, 20, 15)
scene.add(light)

camera.position.set(20, 20, 20)
// camera.position.set(0, 0, 30)
camera.lookAt(scene.position)

buildGeometry(scene)

renderer.render(scene, camera)
