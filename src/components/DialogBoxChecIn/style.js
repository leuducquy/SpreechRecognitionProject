import { Colors } from '../../comon'
import * as d from '../../comon/Transform'

const styles = {
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: d.windowSize.height,
    width: d.windowSize.width,
  },
  content: {
    justifyContent: `center`,
    alignItems: 'center',
  },
  overlayStyle: {
    height: d.windowSize.height,
    width: d.windowSize.width,
    position: 'absolute',
    backgroundColor: '#000',
  },
  dialogStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    position: 'relative',
    paddingVertical: 15 * d.ratioH,

    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: 18 * d.ratioW,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  descriptionStyle: {
    fontSize: 15 * d.ratioW,
    marginTop: 10 * d.ratioH,
    marginHorizontal: 5 * d.ratioW,
  },
  buttonContainer: {
    borderTopWidth: 0.5,
    borderColor: '#757575',
    flexDirection: 'row',
    height: 50 * d.ratioH,
    marginTop: 50 * d.ratioH,
  },
  cancelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderColor: '#757575',
    flex: 0.5,
  },
  cancelStyle: {
    fontSize: 20 * d.ratioW,
    fontWeight: '600',
    color: '#F22F3D',
  },
  acceptContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  acceptStyle: {
    fontSize: 20 * d.ratioW,
    fontWeight: '600',
    color: '#216FEF',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.baseBlack,
  },
  overLay: {
    position: `absolute`,

    right: 20,
    left: 20,
    bottom: 40,
  },
  button: {
    backgroundColor:Colors.baseColor,
  },
  titleBold:{
    fontSize: 24,
    fontWeight: '700',
    color: Colors.baseBlack,
  }
}

export default styles
