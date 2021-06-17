
// if(__DEV__ === false) {
//  import Constants from 'expo-constants';
// }




const ENV = {
    dev: {
      urls: {
        DOMAIN: 'https://api.tokenize-dev.com/mobile-api/',
      
      },
      utilities: {
        DOMAIN_CONTACT: 'https://www.media.jpassport.asia/contactus',
      }
    },
    beta: {
     
      urls: {
        DOMAIN: 'https://api.tokenize-dev.com/mobile-api/',
      
      },
      utilities: {
        DOMAIN_CONTACT: 'https://www.media.jpassport.asia/contactus',
      }
      // Add other keys you want here
    },
    prod: {
      urls: {
        DOMAIN: 'https://jpassport.asia/',
      
      },
      utilities: {
        DOMAIN_CONTACT: 'https://www.media.jpassport.asia/contactus',
      }
      // Add other keys you want here
    }
};

const Config = ENV.beta
  
  export default Config;
