import $api from "../http";

export default class AuthService {
  static async login(email, password) {
    return $api.post("/user/auth/login", { email, password });
  }

  static async registration(email, password) {
    return $api.post("/user/auth/registration", { email, password });
  }
}
