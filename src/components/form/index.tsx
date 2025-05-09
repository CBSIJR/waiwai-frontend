import InputField from "../inputs/inputField";

interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onValidityChange?: (isValid: boolean) => void;
}

interface FormProps {
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
    fields: InputFieldProps[];
    error: string;
    success: {
        boolean: boolean;
        message: string;
    };
    topContent?: React.ReactNode;
    bottomContent?: React.ReactNode;
    buttonLabel: string;
}

export default function Form({
    handleSubmit,
    loading,
    fields,
    error,
    success,
    topContent,
    bottomContent,
    buttonLabel
}: FormProps) {
    return (
        <div className="flex items-center justify-center min-h-screen mt-8">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
                {topContent}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-primary px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {success.boolean && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {success.message}
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    {fields.map((field, index) => (
                        <InputField key={index} {...field} />
                    ))}

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`w-full py-2 px-4 mt-2 ${loading ? "bg-gray-400" : "bg-primary hover:bg-red-800"} text-white font-medium rounded-md transition duration-200`}
                    >
                        {loading ? "Processando..." : buttonLabel}
                    </button>

                    {bottomContent}
                </div>
            </div>
        </div>
    );
}
