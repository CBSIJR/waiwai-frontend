import { useState } from "react";

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

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError("");
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

        return true;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError("");

        try {
            const apiUrl =
                import.meta.env.VITE_API_URL || "http://localhost:8000";

            const response = await fetch(`${apiUrl}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Erro ao registrar usuário.");
            }

            setSuccess(true);

            // Armazena o token recebido
            localStorage.setItem("accessToken", data.access_token);
            localStorage.setItem("refreshToken", data.refresh_token);
        } catch (err: any) {
            setError(err.message || "Ocorreu um erro ao fazer o registro.");
        } finally {
            setLoading(false);
        }
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
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        Cadastro realizado com sucesso!
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Primeiro Nome
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Seu primeiro nome"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Sobrenome
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Seu sobrenome"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Exemplo@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Senha
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Sua senha"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Confirme sua Senha
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirme sua senha"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full py-2 px-4 mt-2 ${loading ? "bg-gray-400" : "bg-primary hover:bg-red-800"} text-white font-medium rounded-md transition duration-200`}
                    >
                        {loading ? "Processando..." : "Registrar"}
                    </button>

                    <div className="text-center text-sm">
                        Já tem uma conta?{" "}
                        <a
                            href="/login"
                            className="text-primary hover:text-red-800 font-medium"
                        >
                            Entrar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registrar;
