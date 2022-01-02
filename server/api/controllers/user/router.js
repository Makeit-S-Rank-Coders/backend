import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/getuserdata',controller.getUserDetails)
  .post('/becomeaseller',controller.becomeASeller)
  .post('/addaddress',controller.addAddress)
  
  
  