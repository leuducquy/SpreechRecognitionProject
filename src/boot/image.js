import { Asset } from 'expo-asset'

// png/jpeg
export const images = {
  logo: require('../../assets/images/logo.png'),
 
  splash: require('../../assets/images/splash.png'),
  jpassport_logo: require('../../assets/images/jpassportLogo.png'),
  google: require('../../assets/images/google.png'),
  twiter: require('../../assets/images/twiter.png'),
  logoLogin: require('../../assets/images/logoLogin.png'),
  gem: require('../../assets/images/gem.png'),
  bolt: require('../../assets/images/bolt.png'),
  profileActive: require('../../assets/images/profileActive.png'),
  profileInActive: require('../../assets/images/profileInActive.png'),
  taskInActive: require('../../assets/images/taskInActive.png'),
  taskActive: require('../../assets/images/taskActive.png'),
  challengeInActive: require('../../assets/images/challengeInActive.png'),
  challengeActive: require('../../assets/images/challengeActive.png'),
  rewardTextBaner: require('../../assets/images/rewardTextBaner.png'),
  info: require('../../assets/images/info.png'),
  bannerBigIcon: require('../../assets/images/bannerBigIcon.png'),
  successIconText: require('../../assets/images/successIconText.png'),
  successIcon: require('../../assets/images/successIcon.png'),
  playIcon: require('../../assets/images/playIcon.png'),
  happyIcon: require('../../assets/images/happyIcon.png'),
  cloundIcon: require('../../assets/images/cloundIcon.png'),
  checkIcon: require('../../assets/images/checkIcon.png'),
  logoHome: require('../../assets/images/homeLogo.png'),
  homeBackGround: require('../../assets/images/homeBackGround.png'),
  passwordIcon: require('../../assets/images/passwordIcon.png'),
  emailIcon: require('../../assets/images/emailIcon.png'),
  eyeIcon: require('../../assets/images/eyeIcon.png'),
  searcIcon: require('../../assets/images/searcIcon.png'),
  homeTabIcon: require('../../assets/images/HomeTabIcon.png'),
  marketTabIcon: require('../../assets/images/MarketsTabIcon.png'),
walletsTabIcon: require('../../assets/images/WalletTabIcon.png'),
portfolioTabIcon: require('../../assets/images/PortlioTabIcon.png'),
moreTabIcon: require('../../assets/images/MoreTabIcon.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
