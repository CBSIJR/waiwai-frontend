import Form from "@/components/form";
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

    const handleValidityChange = (isValid: boolean) => {
        setIsValidPassword(isValid);
    };

    const fields = [
        {
            id: "firstName",
            name: "firstName",
            type: "text",
            label: "Primeiro nome",
            placeholder: "João",
            value: formData.firstName,
            onChange: handleChange,
        },
        {
            id: "lastName",
            name: "lastName",
            type: "text",
            label: "Sobrenome",
            placeholder: "Silva",
            value: formData.lastName,
            onChange: handleChange,
        },
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
            onValidityChange: handleValidityChange,
        },
        {
            id: "confirmPassword",
            name: "confirmPassword",
            type: "password",
            label: "Confirme sua senha",
            placeholder: "Confirme sua senha",
            value: formData.confirmPassword,
            onChange: handleChange,
        },
    ];

    return (
        <Form
            fields={fields}
            handleSubmit={handleSubmit}
            loading={loading}
            buttonLabel="Registrar"
            error={error}
            success={{
                boolean: success,
                message: "Cadastro realizado com sucesso!",
            }}
            topContent={
                <>
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                        Crie sua conta
                    </h1>
                    <p className="text-sm text-center text-gray-500 mb-6">
                        Cadastre-se com seu e-mail
                    </p>
                </>
            }
            bottomContent={
                <div className="justify-center text-center text-sm flex gap-1">
                    Já tem uma conta?
                    <Link
                        to="/entrar"
                        className="text-primary hover:text-red-800 font-medium"
                    >
                        Entrar
                    </Link>
                </div>
            }
        />
    );
};

export default Registrar;
