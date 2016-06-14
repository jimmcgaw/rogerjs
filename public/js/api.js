import { get } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
  fetchLinks(){
    get('/api/links').done(response => {
      ServerActions.receiveLinks(response);
    });
  }
};

export default API;
