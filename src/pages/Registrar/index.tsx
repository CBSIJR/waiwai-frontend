import InputField from "@/components/inputs/inputField";
import { signup } from "@/services/authService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registrar = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError("");
    };

    const validateEmail = (email: string): boolean => {
        // Regex para validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.password
        ) {
            setError("Todos os campos são obrigatórios.");
            return false;
        }

        if (!validateEmail(formData.email)) {
            setError("Por favor, insira um email válido.");
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("As senhas não coincidem.");
            return false;
        }

        if (formData.firstName.length < 3 || formData.firstName.length > 15) {
            setError("O primeiro nome deve ter entre 3 e 15 caracteres.");
            return false;
        }

        if (formData.lastName.length < 3 || formData.lastName.length > 15) {
            setError("O sobrenome deve ter entre 3 e 15 caracteres.");
            return false;
        }

        if (formData.password.length < 8 || formData.password.length > 32) {
            setError("A senha deve ter entre 8 e 32 caracteres.");
            return false;
        }

        if (!isValidPassword) {
            setError("Digite uma senha válida.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError("");

        try {
            const tokens = await signup({
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                password: formData.password,
            });

            localStorage.setItem("access_token", tokens.access_token);
            localStorage.setItem("refresh_token", tokens.refresh_token);
            setSuccess(true);
            navigate("/");
        } catch (err: any) {
            setError(err.response.data.detail[0].msg || "Ocorreu um erro ao fazer o registro.");
        } finally {
            setLoading(false);
        }
    };

    const handleValidityChange = (isValid: boolean) => {
        setIsValidPassword(isValid);
    };

    return (
        <div className="flex items-center justify-center min-h-screen mt-8">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Crie sua conta
                </h1>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Cadastre-se com seu e-mail
                </p>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-primary px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        Cadastro realizado com sucesso!
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    <InputField
                        id="firstName"
                        name="firstName"
                        type="text"
                        label="Primeiro Nome"
                        placeholder="Seu primeiro nome"
                        value={formData.firstName}
                        onChange={handleChange}
                    />

                    <InputField
                        id="lastName"
                        name="lastName"
                        type="text"
                        label="Sobrenome"
                        placeholder="Seu sobrenome"
                        value={formData.lastName}
                        onChange={handleChange}
                    />

                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Exemplo@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <InputField
                        id="password"
                        name="password"
                        type="password"
                        label="Senha"
                        placeholder="Sua senha"
                        value={formData.password}
                        onChange={handleChange}
                        onValidityChange={handleValidityChange}
                    />

                    <InputField
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        label="Confirme sua Senha"
                        placeholder="Confirme sua senha"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full py-2 px-4 mt-2 ${loading ? "bg-gray-400" : "bg-primary hover:bg-red-800"} text-white font-medium rounded-md transition duration-200`}
                    >
                        {loading ? "Processando..." : "Registrar"}
                    </button>

                    <div className="text-center text-sm">
                        Já tem uma conta?{" "}
                        <Link
                            to="/entrar"
                            className="text-primary hover:text-red-800 font-medium"
                        >
                            Entrar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registrar;
