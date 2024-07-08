import axios from "axios";

const Api = async (method, url, data, header = {}) => {
    const token = localStorage.getItem("genericToken");
    axios.defaults.headers.common["Authorization"] = token
      ? `Bearer ${token}`
      : null;
    try {
        const result = await axios({
            url: "http://localhost:4000/" + url,
            method: method,
            data: data,
            headers: header
        })
        return result.data;

    } catch (error) {
        return error;
    }


}
export default Api