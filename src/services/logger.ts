import { loggerShow as show } from '../config';

export const logger = {
  info: (...params: any[]) => {
    show.info ? console.log('INFO:', ...params) : null;
  },
  error: (...params: any[]) => {
    show.error ? console.log('ERROR:', ...params) : null;
  },
  debug: (...params: any[]) => {
    show.debug ? console.log('DEBUG:', ...params) : null;
  },
  render: (...params: any[]) => {
    show.render ? console.log('RENDER:', ...params) : null;
  },
  apiReq: (...params: any[]) => {
    show.apiReq ? console.log('API:', ...params) : null;
  },
  apiRes: (...params: any[]) => {
    show.apiRes ? console.log('API Response:', ...params) : null;
  },
};
