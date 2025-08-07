import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FlyingDragon = ({ position = [0, 6, 0], scale = 1 }) => {
  const group      = useRef()          
  const dragonRef  = useRef()          
  const { scene, animations } = useGLTF('/models/demon_dragon_full_texture.glb')

  const { actions, names } = useAnimations(animations, scene)

  useEffect(() => {
    if (!actions) return
    const flyKey = names.find(n => n.toLowerCase().includes('fly'))
    const action = actions[flyKey] ?? actions[names[0]]

    action?.reset().play().setLoop(THREE.LoopRepeat)
  }, [actions, names])

  const radius = 5, height = 4, speed = 0.5
  useFrame(({ clock }) => {
    if (dragonRef.current) {
      const t = clock.getElapsedTime() * speed
      const x = Math.cos(t) * radius
      const z = Math.sin(t) * radius
      const y = height + Math.sin(t * 2) * 0.1

      dragonRef.current.position.set(x, y, z)
      dragonRef.current.rotation.set(
        0,
       - t + Math.PI / 2 + -Math.PI / 2, 
        Math.sin(t * 2) * 0.1
      )
    }

    if (group.current && dragonRef.current) {
      const shadow = group.current.children.find(c => c.type === 'Mesh')
      if (shadow) {
        shadow.position.set(
          dragonRef.current.position.x,
          0.1,
          dragonRef.current.position.z
        )
      }
    }
  })

  return (
    <group ref={group} scale={scale}>
      <primitive ref={dragonRef} object={scene} />

      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.5]} />
        <meshBasicMaterial color="black" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

FlyingDragon.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.number,
}

export default FlyingDragon
