import { Mesh, CylinderGeometry, Geometry, Vector3, LineDashedMaterial, Line } from 'three'

import { explodedMaterial } from '../material'

const makeDashedLine = (x, y, z = 0) => {
  const lineGeometry = new Geometry()
  lineGeometry.vertices.push(new Vector3(0, 0, 2))
  lineGeometry.vertices.push(new Vector3(0, 0, -2))
  const lineMaterial = new LineDashedMaterial({ color: 0x000000, dashSize: 0.25, gapSize: 0.5 })
  const line = new Line(lineGeometry, lineMaterial)
  lineGeometry.translate(x, y, z)
  line.computeLineDistances()
  return line
}

const drawWheels = group => {
  const wheelExplosion = 3
  const wheelGeometry = new CylinderGeometry(0.65, 0.65, 0.65, 64)
  wheelGeometry.rotateX(Math.PI / 2)
  wheelGeometry.translate(-3.5, -1.5, 1.2)
  const passengerFront = new Mesh(wheelGeometry, explodedMaterial)
  passengerFront.position.set(0, -wheelExplosion, 2)
  group.add(passengerFront)

  const passengerRear = new Mesh(wheelGeometry, explodedMaterial)
  passengerRear.position.set(5, -wheelExplosion, 2)
  group.add(passengerRear)

  group.add(makeDashedLine(1.5, -4.5, 3.5))
  group.add(makeDashedLine(1.5, -4.5, -4.5))
  group.add(makeDashedLine(-3.5, -4.5, 3.5))
  group.add(makeDashedLine(-3.5, -4.5, -4.5))

  const driverFront = new Mesh(wheelGeometry, explodedMaterial)
  driverFront.position.set(0, -wheelExplosion, -6)
  group.add(driverFront)

  const driverRear = new Mesh(wheelGeometry, explodedMaterial)
  driverRear.position.set(5, -wheelExplosion, -6)
  group.add(driverRear)
}

export default drawWheels
