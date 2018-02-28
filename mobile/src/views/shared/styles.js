import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textInputInner: {
    flex: 1,
    flexDirection: 'column',
  },
  textInputIcon: {
    width: 40,
    height: 40,
    borderRightWidth: 1,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  textInput: {
    height: 40,
    paddingLeft: 12,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: '#CCCCCC',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  signUpButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4369B0',
    borderRadius: 6,
  },
})

export default styles
