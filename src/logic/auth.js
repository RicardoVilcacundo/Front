import axios from "axios";

const ENDPOINT_PATH = "http://localhost:8000/usr/usuarios/";

export default {
    async register() {
        const response = await auth.register(this.email, this.password);
        console.log(response);
      },
    login(email, password) {
        const user = { email, password };
        return axios.post(ENDPOINT_PATH + "login", user);
    }
    };