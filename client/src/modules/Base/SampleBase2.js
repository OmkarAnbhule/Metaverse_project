/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SampleBase2(props) {
    const { nodes, materials } = useGLTF('/models/metaverse.glb')
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="Cube001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials['Material.002']}
                    position={[0.335, 3.109, -0.441]}
                    rotation={[0, -0.021, 0.006]}
                    scale={[-3.886, -3.045, -3.799]}
                />
                <mesh
                    name="Plane001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001.geometry}
                    material={materials['Material.001']}
                    scale={9.878}
                />
                <mesh
                    name="Cube"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials['Material.003']}
                    position={[2.955, 1.089, -5.152]}
                    scale={[0.103, 1, 1]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/metaverse.glb')
