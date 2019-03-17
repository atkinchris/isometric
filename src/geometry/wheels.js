import { Mesh, CylinderGeometry, Geometry, Vector3, LineDashedMaterial, Line } from 'three'

import { explodedMaterial, material } from '../material'

const makeDashedLine = (x, y, z = 0, length = 12) => {
  const lineGeometry = new Geometry()
  lineGeometry.vertices.push(new Vector3(0, 0, 0))
  lineGeometry.vertices.push(new Vector3(0, 0, length))
  const lineMaterial = new LineDashedMaterial({ color: 0x000000, dashSize: 0.25, gapSize: 0.5 })
  const line = new Line(lineGeometry, lineMaterial)
  lineGeometry.translate(x, y, -5.5)
  line.computeLineDistances()
  return line
}

const drawWheels = group => {
  const wheelExplosion = 3
  const wheelGeometry = new CylinderGeometry(0.65, 0.65, 0.65, 64)
  wheelGeometry.rotateX(Math.PI / 2)
  wheelGeometry.translate(-3.5, -1.5, 1.2)

  const passengerFront = new Mesh(wheelGeometry, explodedMaterial)
  passengerFront.position.set(0, -wheelExplosion, 2.65)
  group.add(passengerFront)

  const passengerRear = new Mesh(wheelGeometry, explodedMaterial)
  passengerRear.position.set(5, -wheelExplosion, 2.65)
  group.add(passengerRear)

  const driverFront = new Mesh(wheelGeometry, explodedMaterial)
  driverFront.position.set(0, -wheelExplosion, -5)
  group.add(driverFront)

  const driverRear = new Mesh(wheelGeometry, explodedMaterial)
  driverRear.position.set(5, -wheelExplosion, -5)
  group.add(driverRear)

  group.add(makeDashedLine(1.5, -4.5))
  group.add(makeDashedLine(-3.5, -4.5))

  const axleGeometry = new CylinderGeometry(0.15, 0.15, 3, 8)
  axleGeometry.rotateX(Math.PI / 2)
  axleGeometry.translate(-3.5, -1.5, 6)

  const frontAxle = new Mesh(axleGeometry, material)
  frontAxle.position.set(0, -wheelExplosion, -6)
  group.add(frontAxle)

  const rearAxle = new Mesh(axleGeometry, material)
  rearAxle.position.set(5, -wheelExplosion, -6)
  group.add(rearAxle)

  const crankGeometry = new CylinderGeometry(0.15, 0.15, 5, 8)
  crankGeometry.rotateZ(Math.PI / 2)
  crankGeometry.translate(-1, -1.5, 0)
  const crank = new Mesh(crankGeometry, material)
  crank.position.set(0, -wheelExplosion, 0)
  group.add(crank)
}

export default drawWheels
