import axios from 'axios';

// 全局设置axios
// axios.defaults.headers.post['Content-type'] = 'application/json;charset=UTF-8';// 请求头
// axios.defaults.headers.post['Content-type'] =  'multipart/form-data';// 请求头
axios.defaults.baseURL = 'https://api.apiopen.top/'; // 服务器接口地址发生改变,数据请求接口地址
axios.defaults.timeout = 30000; // 请求超时时间
// axios.defaults.withCredentials=true;
// axios.defaults.headers['Content-Type'] = 'application/josn;charset=UTF-8';

const request = (method, url, data, config = {}) => {
  const options = Object.assign({}, config, {
    url,
    method,
    data
  });
  options.headers = options.headers || {};

  return new Promise((resolve, reject) => {
    axios.request(options)
      .then((res) => {
        resolve(res);
      }).catch((error) => { 
        // 在这里做错误处理
        reject(error);
      });
  });
};

// 封装axios方法
export const Net = {
  get(url, config) {
    return request('get', url, null, config);
  },
  post(url, data, config) {
    return request('post', url, data, config);
  },
  put(url, data, config) {
    return request('put', url, data, config);
  },
  delete(url, data, config) {
    return request('delete', url, data, null, config);
  },
  head(url, config) {
    return request('head', url, null, config);
  },
  patch(url, data, config) {
    return request('patch', url, data, config);
  }
};
