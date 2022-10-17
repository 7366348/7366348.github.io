// 1. 引入
import axios from "axios";

// 2. 创建实例
const instance = axios.create({
    // 每次请求的协议、IP地址,设置该配置后，每次请求路径都可以使用相对路径，例如"/admin/login"
    baseURL: "http://127.0.0.1:7001",
    // 请求超时时间
    timeout: 10000,
    // 每次请求携带cookie
    withCredentials: true
});

// 3. 导出
export default instance