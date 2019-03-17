import { Mesh, CylinderGeometry } from 'three'

import { explodedMaterial } from '../material'

const drawWheels = group => {
  const wheelExplosion = 3
  const wheelGeometry = new CylinderGeometry(0.65, 0.65, 0.65, 64)
  wheelGeometry.rotateX(Math.PI / 2)
  wheelGeometry.translate(-3.5, -1.5, 1.2)
  const passengerFront = new Mesh(wheelGeometry, explodedMaterial)
  passengerFront.position.set(0, -wheelExplosion, 0)
  group.add(passengerFront)

  const passengerRear = new Mesh(wheelGeometry, explodedMaterial)
  passengerRear.position.set(5, -wheelExplosion, 0)
  group.add(passengerRear)

  const driverFront = new Mesh(wheelGeometry, explodedMaterial)
  driverFront.position.set(0, -wheelExplosion, -2.4)
  group.add(driverFront)

  const driverRear = new Mesh(wheelGeometry, explodedMaterial)
  driverRear.position.set(5, -wheelExplosion, -2.4)
  group.add(driverRear)
}

export default drawWheels
