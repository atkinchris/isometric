import { LineBasicMaterial, EdgesGeometry, LineSegments } from 'three'

const widthEdges = mesh => {
  const edgesGeometry = new EdgesGeometry(mesh.geometry)
  const edgeMaterial = new LineBasicMaterial({ color: 0x000000, linewidth: 6 })
  const edges = new LineSegments(edgesGeometry, edgeMaterial)
  mesh.add(edges)
}

export default widthEdges
