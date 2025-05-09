import axios from "axios";

export const signup = async (data: SignupPayload) =>
    await axios
        .post<AuthResponse>(`api/auth/signup`, data)
        .then((res) => res.data);

        export const signin = (data: LoginPayload) =>
            axios.post<AuthResponse>(`api/auth/signin`, data).then(res => res.data);