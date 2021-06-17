import * as d from '../../comon/Transform';

const styles = {
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 10,
  
    width: "90%",
    height : 100,
    overflow: "hidden",
  
  },
  overlayStyle: {
    height: d.windowSize.height,
    width: d.windowSize.width,
    position: 'absolute',
    backgroundColor: '#000',
  },
  dialogStyle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    position: 'relative',
    paddingVertical: 15 * d.ratioH,
    paddingHorizontal: 30 * d.ratioW,
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
};

export default styles;
