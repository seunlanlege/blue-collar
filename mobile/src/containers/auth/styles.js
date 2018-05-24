import { StyleSheet, Dimensions } from 'react-native'

const IMAGE_HEIGHT = Dimensions.get('window').width / 3

export const login = StyleSheet.create({
  keyboardWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  takeTheTourWrapper: {
    marginTop: 12,
    width: '95%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  takeTheTour: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3d6587',
    color: '#3d6587',
    fontWeight: 'bold',
  },
  imageWrapper: {
    marginTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: IMAGE_HEIGHT,
    height: IMAGE_HEIGHT,
  },
  buttonWrapper: {
    marginTop: 36,
    width: '85%',
    justifyContent: 'space-around',
  },
  signUpFacebook: {
    flex: 0.5,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#495991',
    borderRadius: 6,
  },
  facebookAuth: {
    paddingLeft: 15,
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 18,
  },
  divider: {
    flexDirection: 'row',
    marginTop: 20,
  },
  line: {
    flex: 1,
    borderTopWidth: 2,
    borderColor: '#F2F2F4',
  },
  lineText: {
    flex: 0.4,
    top: -7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  textInputContainer: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    marginTop: 8,
  },
  textInputInner: {
    flex: 1,
    flexDirection: 'column',
  },
  textInputIcon: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: '#CCCCCC',
  },
  textInput: {
    height: 45,
    paddingLeft: 12,
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  bottomFooter: {
    flex: 1.2,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 80,
    justifyContent: 'flex-start',
  },
  signUpButton: {
    flex: 0.4,
    height: 45,
    marginTop: 10,
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4369B0',
    borderRadius: 6,
  },
  signUpButtonText: {
    color: '#4369B0',
    fontWeight: '500',
    fontSize: 18,
  },
})
