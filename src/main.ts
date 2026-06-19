
import {addToScene, createArcRotateCamera, createBox, createEngine, createHemisphericLight, createSceneContext, createStandardMaterial, registerScene, startEngine} from "@babylonjs/lite"

// setup
const canvas = document.querySelector("canvas")!
const engine = await createEngine(canvas)
const scene = createSceneContext(engine)

// camera
const camera = createArcRotateCamera(0, 1, 3, {x: 0, y: 0, z: 0})
scene.camera = camera

// light
addToScene(scene, createHemisphericLight([0.1, 0.2, 0.3], 1))

// box
const box = createBox(engine, 1)
box.material = createStandardMaterial()
addToScene(scene, box)

// run
setInterval(() => { box.rotation.y += 0.01 }, 8)
await registerScene(scene)
await startEngine(engine)

