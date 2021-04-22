import React from 'react';
import axios from "axios";
import * as config from 'config/Config.js';

export const UseAxios = (url, type, data) => {
  let method = "get";
  if(type !== null) {
    method = type;
  };
  return axios({
                url: url,
                method: method,
                data: data
              });
}