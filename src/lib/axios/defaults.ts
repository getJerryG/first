import axios from 'axios';
import { BASEURL } from '../../config/index';
const instance = axios.create()
instance.defaults.timeout =2500
instance.defaults.baseURL = BASEURL
axios.defaults.timeout = 5*1000
axios.defaults.withCredentials =true
axios.defaults.headers.post['Content-Type'] = 'application/X-www-form-urlencoded;charset=UTF-8'
export default axios