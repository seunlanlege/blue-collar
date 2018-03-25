import { NativeModules, findNodeHandle } from 'react-native'

const { UIManager } = NativeModules

export default function(ref, debug) {
  const handle = findNodeHandle(ref)
  setTimeout(() => {
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      if (debug) {
        console.log(x, y, width, height, pageX, pageY)
      }
      ref.currentPosition(pageX, pageY)
    })
  }, 0)
}
