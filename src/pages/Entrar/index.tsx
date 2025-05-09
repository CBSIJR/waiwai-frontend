import Form from "@/components/form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Entrar = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
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
        if (!formData.email || !formData.password) {
            setError("Todos os campos são obrigatórios.");
            return false;
        }

        if (!validateEmail(formData.email)) {
            setError("Por favor, insira um email válido.");
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
            /* const tokens = await signup({
                email: formData.email,
                password: formData.password,
            }); */

            /* localStorage.setItem("access_token", tokens.access_token);
            localStorage.setItem("refresh_token", tokens.refresh_token); */
            setSuccess(true);
            navigate("/");
        } catch (err: any) {
            if (err.response.status === 422) {
                const detail = err.response?.data?.detail;
                const allMessages = Array.isArray(detail)
                    ? detail.map((o) => o.msg).join(" ")
                    : typeof detail === "string"
                      ? detail
                      : "Ocorreu um erro ao fazer o registro.";

                setError(allMessages);
            } else {
                setError(
                    err.response?.data?.detail ||
                        "Ocorreu um erro ao fazer o registro."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    const fields = [
        {
            id: "email",
            name: "email",
            type: "email",
            label: "Email",
            placeholder: "exemplo@email.com",
            value: formData.email,
            onChange: handleChange,
        },
        {
            id: "password",
            name: "password",
            type: "password",
            label: "Senha",
            placeholder: "Digite sua senha",
            value: formData.password,
            onChange: handleChange,
        },
    ];

    return (
        <Form
            fields={fields}
            handleSubmit={handleSubmit}
            loading={loading}
            error={error}
            buttonLabel="Entrar"
            success={{
                boolean: success,
                message: "Cadastro realizado com sucesso!",
            }}
            topContent={
                <>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                        Entre na sua conta
                    </h1>
                    <p className="text-sm text-center text-gray-500 mb-6">
                        Entre com seu e-mail
                    </p>
                </>
            }
            bottomContent={
                <div className="justify-center text-center text-sm flex gap-1">
                    Não tem uma conta?
                    <Link
                        to="/registrar"
                        className="text-primary hover:text-red-800 font-medium"
                    >
                        Registrar
                    </Link>
                </div>
            }
        />
    );
};

export default Entrar;
