import Form from "@/components/form";
import { fnErrorMessage } from "@/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSigninMutation } from "./api/Mutation";

const EntrarPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const mutation = useSigninMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError("");
    };

    const validateEmail = (email: string): boolean => {
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

        mutation.mutate(
            {
                email: formData.email,
                password: formData.password,
            },
            {
                onSuccess: () => {
                    setSuccess(true);
                },
                onError: (err: unknown) => {
                    const errMsg = fnErrorMessage(err);
                    setError(errMsg);
                    setSuccess(false);
                },
                onSettled: () => {
                    setLoading(false);
                },
            }
        );
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
        <div className="flex flex-1 justify-center items-center">
            <Form
                fields={fields}
                handleSubmit={handleSubmit}
                loading={loading}
                error={error}
                buttonLabel="Entrar"
                success={{
                    boolean: success,
                    message: "Login realizado com sucesso!",
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
        </div>
    );
};

export default EntrarPage;
