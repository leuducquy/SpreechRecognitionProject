
import axios from 'axios';

import Config from '../../Config';

import {store} from '../boot/configureStore'


const TokenNize = axios.create({
  baseURL:Config.urls.DOMAIN,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  }
});
const getOption = async()=>{
  const token = store.getState().auth.token;
    return {
        headers: {
        
          Authorization:token ? `Bearer ${token}`:''
        }
      };
}
const login = async (email, password) => {
   
   
    
    const url = 'auth/login'
  const body = {
      email:email,
      password:password
  }
    try {
      const res= await TokenNize.post(
        url,
        body,
       
      );
      console.tron.display({
      name: `res`,
       preview :``,
      value: {
      state: res
      }
      })
      return res
    } catch (error) {
     return error
    }
  };
  const getBaseMarket = async () => {
   
   
    
    const url = 'market/getbasedmarkets'
  
    try {
      const res= await TokenNize.get(
        url,
      
      );
      console.tron.display({
      name: `res`,
       preview :``,
      value: {
      state: res
      }
      })
      return res
    } catch (error) {
     return error
    }
  };
  const getMarketSumaries = async () => {
   
   
    
    const url = 'public/v1/market/get-summaries'
  
    try {
      const res= await TokenNize.get(
        url,
      
      );
      console.tron.display({
      name: `res`,
       preview :``,
      value: {
      state: res
      }
      })
      return res
    } catch (error) {
     return error
    }
  };
  const getMarket= async () => {
   
   
    
    const url = 'market/getmarkets'
  
    try {
      const res= await TokenNize.get(
        url,
      
      );
      console.tron.display({
      name: `res`,
       preview :``,
      value: {
      state: res
      }
      })
      return res
    } catch (error) {
     return error
    }
  };
export {
    login,
  getBaseMarket,
  getMarketSumaries,
  getMarket
}
