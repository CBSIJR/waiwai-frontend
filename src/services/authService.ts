import axios from "axios";

export const signup = async (data: SignupPayload) =>
    await axios
        .post<AuthResponse>(`api/auth/signup`, data)
        .then((res) => res.data);
