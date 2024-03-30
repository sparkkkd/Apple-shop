import * as THREE from 'three'
import { Float, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { motion } from 'framer-motion-3d'
import { MotionValue } from 'framer-motion'

type GLTFResult = GLTF & {
	nodes: {
		AdjkxvMXIDEHBMM: THREE.Mesh
		AwsQCWysocWlYzN: THREE.Mesh
		drpRvcOgsocXGbn: THREE.Mesh
		KXVnYLSfTdVnSOf: THREE.Mesh
		nnqwwoLVdMJlHIF: THREE.Mesh
		SRYqzKwamLGuEGm: THREE.Mesh
		xtMgDHhPqFLAHyB: THREE.Mesh
		yxqQUnbopbiRvZr: THREE.Mesh
		IkoiNqATMVoZFKD: THREE.Mesh
		rqgRAGHOwnuBypi: THREE.Mesh
		pXBNoLiaMwsDHRF: THREE.Mesh
		IykfmVvLplTsTEW: THREE.Mesh
		DCLCbjzqejuvsqH: THREE.Mesh
		WJwwVjsahIXbJpU: THREE.Mesh
		wLfSXtbwRlBrwof: THREE.Mesh
		YfrJNXgMvGOAfzz: THREE.Mesh
		buRWvyqhBBgcJFo: THREE.Mesh
		CfghdUoyzvwzIum: THREE.Mesh
		MHfUXxLdYldKhVJ_0: THREE.Mesh
		pvdHknDTGDzVpwc: THREE.Mesh
		TvgBVmqNmSrFVfW: THREE.Mesh
		wqbHSzWaUxBCwxY_0: THREE.Mesh
		evAxFwhaQUwXuua: THREE.Mesh
		MGPAkjCLsByKXcN: THREE.Mesh
		USxQiqZgxHbRvqB: THREE.Mesh
		vFwJFNASGvEHWhs: THREE.Mesh
		DjdhycfQYjKMDyn: THREE.Mesh
		vELORlCJixqPHsZ: THREE.Mesh
		xXDHkMplTIDAXLN: THREE.Mesh
		EbQGKrWAqhBHiMv: THREE.Mesh
		usFLmqcyrnltBUr: THREE.Mesh
	}
	materials: {
		eShKpuMNVJTRrgg: THREE.MeshStandardMaterial
		xNrofRCqOXXHVZt: THREE.MeshStandardMaterial
		PpwUTnTFZJXxCoE: THREE.MeshStandardMaterial
		jlzuBkUzuJqgiAK: THREE.MeshStandardMaterial
		PaletteMaterial001: THREE.MeshStandardMaterial
		PaletteMaterial002: THREE.MeshStandardMaterial
		hUlRcbieVuIiOXG: THREE.MeshStandardMaterial
		yQQySPTfbEJufve: THREE.MeshStandardMaterial
		hiVunnLeAHkwGEo: THREE.MeshStandardMaterial
		HGhEhpqSBZRnjHC: THREE.MeshStandardMaterial
		yiDkEwDSyEhavuP: THREE.MeshStandardMaterial
		PaletteMaterial003: THREE.MeshStandardMaterial
		vhaEJjZoqGtyLdo: THREE.MeshStandardMaterial
		yhcAXNGcJWCqtIS: THREE.MeshStandardMaterial
		oZRkkORNzkufnGD: THREE.MeshStandardMaterial
		bCgzXjHOanGdTFV: THREE.MeshStandardMaterial
		PaletteMaterial004: THREE.MeshStandardMaterial
		jpGaQNgTtEGkTfo: THREE.MeshStandardMaterial
		dxCVrUCvYhjVxqy: THREE.MeshStandardMaterial
		xdyiJLYTYRfJffH: THREE.MeshStandardMaterial
		pIhYLPqiSQOZTjn: THREE.MeshStandardMaterial
		MHFGNLrDQbTNima: THREE.MeshStandardMaterial
		KSIxMqttXxxmOYl: THREE.MeshStandardMaterial
		kUhjpatHUvkBwfM: THREE.MeshStandardMaterial
		mcPrzcBUcdqUybC: THREE.MeshStandardMaterial
		RJoymvEsaIItifI: THREE.MeshStandardMaterial
		ujsvqBWRMnqdwPx: THREE.MeshStandardMaterial
		zFdeDaGNRwzccye: THREE.MeshStandardMaterial
		['Material.001']: THREE.MeshStandardMaterial
		TBLSREBUyLMVtJa: THREE.MeshStandardMaterial
		sxNzrmuTqVeaXdg: THREE.MeshStandardMaterial
	}
}

interface ModelProps {
	rotatePropY: number
	rotatePropX: number
	rotatePropZ: number
	positionX: number
	positionZ: MotionValue<number>
}

export default function Model({ rotatePropY, positionZ, positionX }: ModelProps) {
	const { nodes, materials } = useGLTF('/Apple-shop/iphone-model.glb') as GLTFResult

	return (
		<Float>
			<group dispose={null} scale={0.4}>
				<motion.mesh
					rotation-y={rotatePropY}
					rotation-x={0}
					rotation-z={0}
					position={[positionX, 0, positionZ]}
				>
					<motion.mesh
						geometry={nodes.AdjkxvMXIDEHBMM.geometry}
						material={materials.eShKpuMNVJTRrgg}
					/>
					<motion.mesh
						geometry={nodes.AwsQCWysocWlYzN.geometry}
						material={materials.xNrofRCqOXXHVZt}
					/>
					<motion.mesh
						geometry={nodes.drpRvcOgsocXGbn.geometry}
						material={materials.PpwUTnTFZJXxCoE}
					/>
					<motion.mesh
						geometry={nodes.KXVnYLSfTdVnSOf.geometry}
						material={materials.jlzuBkUzuJqgiAK}
					/>
					<motion.mesh
						geometry={nodes.nnqwwoLVdMJlHIF.geometry}
						material={materials.PaletteMaterial001}
					/>
					<motion.mesh
						geometry={nodes.SRYqzKwamLGuEGm.geometry}
						material={materials.PaletteMaterial002}
					/>
					<motion.mesh
						geometry={nodes.xtMgDHhPqFLAHyB.geometry}
						material={materials.hUlRcbieVuIiOXG}
					/>
					<motion.mesh
						geometry={nodes.yxqQUnbopbiRvZr.geometry}
						material={materials.yQQySPTfbEJufve}
					/>
					<motion.mesh
						geometry={nodes.IkoiNqATMVoZFKD.geometry}
						material={materials.hiVunnLeAHkwGEo}
					/>
					<motion.mesh
						geometry={nodes.rqgRAGHOwnuBypi.geometry}
						material={materials.HGhEhpqSBZRnjHC}
					/>
					<motion.mesh
						geometry={nodes.pXBNoLiaMwsDHRF.geometry}
						material={materials.yiDkEwDSyEhavuP}
					/>
					<motion.mesh
						geometry={nodes.IykfmVvLplTsTEW.geometry}
						material={materials.PaletteMaterial003}
					/>
					<motion.mesh
						geometry={nodes.DCLCbjzqejuvsqH.geometry}
						material={materials.vhaEJjZoqGtyLdo}
					/>
					<motion.mesh
						geometry={nodes.WJwwVjsahIXbJpU.geometry}
						material={materials.yhcAXNGcJWCqtIS}
					/>
					<motion.mesh
						geometry={nodes.wLfSXtbwRlBrwof.geometry}
						material={materials.oZRkkORNzkufnGD}
					/>
					<motion.mesh
						geometry={nodes.YfrJNXgMvGOAfzz.geometry}
						material={materials.bCgzXjHOanGdTFV}
					/>
					<motion.mesh
						geometry={nodes.buRWvyqhBBgcJFo.geometry}
						material={materials.PaletteMaterial004}
					/>
					<motion.mesh
						geometry={nodes.CfghdUoyzvwzIum.geometry}
						material={materials.jpGaQNgTtEGkTfo}
					/>
					<motion.mesh
						geometry={nodes.MHfUXxLdYldKhVJ_0.geometry}
						material={materials.dxCVrUCvYhjVxqy}
					/>
					<motion.mesh
						geometry={nodes.pvdHknDTGDzVpwc.geometry}
						material={materials.xdyiJLYTYRfJffH}
					/>
					<motion.mesh
						geometry={nodes.TvgBVmqNmSrFVfW.geometry}
						material={materials.pIhYLPqiSQOZTjn}
					/>
					<motion.mesh
						geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
						material={materials.MHFGNLrDQbTNima}
					/>
					<motion.mesh
						geometry={nodes.evAxFwhaQUwXuua.geometry}
						material={materials.KSIxMqttXxxmOYl}
					/>
					<motion.mesh
						geometry={nodes.MGPAkjCLsByKXcN.geometry}
						material={materials.kUhjpatHUvkBwfM}
					/>
					<motion.mesh
						geometry={nodes.USxQiqZgxHbRvqB.geometry}
						material={materials.mcPrzcBUcdqUybC}
					/>
					<motion.mesh
						geometry={nodes.vFwJFNASGvEHWhs.geometry}
						material={materials.RJoymvEsaIItifI}
					/>
					<motion.mesh
						geometry={nodes.DjdhycfQYjKMDyn.geometry}
						material={materials.ujsvqBWRMnqdwPx}
					/>
					<motion.mesh
						geometry={nodes.vELORlCJixqPHsZ.geometry}
						material={materials.zFdeDaGNRwzccye}
					/>
					<motion.mesh
						geometry={nodes.xXDHkMplTIDAXLN.geometry}
						material={materials['Material.001']}
						scale={[-1, 1, 1]}
					/>
					<mesh geometry={nodes.usFLmqcyrnltBUr.geometry} material={materials.sxNzrmuTqVeaXdg} />
				</motion.mesh>
			</group>
		</Float>
	)
}

useGLTF.preload('/Apple-shop/iphone-model.glb')
