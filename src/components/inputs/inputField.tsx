import {
    faCheck,
    faEye,
    faEyeSlash,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    onValidityChange?: (isValid: boolean) => void;
}

interface PasswordStrength {
    hasDigit: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasMinOrMaxLength: boolean;
}

interface PasswordRequirementProps {
    isMet: boolean;
    text: string;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({
    isMet,
    text,
}) => {
    return (
        <div className="flex items-center">
            <FontAwesomeIcon
                icon={isMet ? faCheck : faTimes}
                className={`mr-2 ${isMet ? "text-green-500" : "text-primary"}`}
            />
            <span className={isMet ? "text-green-700" : "text-gray-700"}>
                {text}
            </span>
        </div>
    );
};

const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    type,
    label,
    placeholder,
    value,
    onChange,
    required = true,
    onValidityChange,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
        hasDigit: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasMinOrMaxLength: false,
    });

    const inputType =
        type === "password" ? (showPassword ? "text" : "password") : type;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const requirements = [
        {
            isMet: passwordStrength.hasLowerCase,
            text: "Deve conter pelo menos uma letra minúscula",
        },

        {
            isMet: passwordStrength.hasDigit,
            text: "Deve conter pelo menos um dígito numérico",
        },
        {
            isMet: passwordStrength.hasUpperCase,
            text: "Deve conter pelo menos uma letra maiúscula",
        },
        {
            isMet: passwordStrength.hasMinOrMaxLength,
            text: "A senha deve ter entre 8 e 32 caracteres.",
        },
    ];

    useEffect(() => {
        if (type === "password") {
            const strength = {
                hasDigit: /\d/.test(value),
                hasUpperCase: /[A-Z]/.test(value),
                hasLowerCase: /[a-z]/.test(value),
                hasMinOrMaxLength: value.length >= 8 && value.length <= 32,
            };

            setPasswordStrength(strength);

            const isValid =
                strength.hasDigit &&
                strength.hasUpperCase &&
                strength.hasLowerCase &&
                strength.hasMinOrMaxLength;

            if (onValidityChange) {
                onValidityChange(isValid);
            }
        }
    }, [value, type, onValidityChange]);

   
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                {label}
                {required && <span className="text-primary ml-1">*</span>}
            </label>
            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        onChange(e);
                        if (
                            type === "password" &&
                            !passwordTouched &&
                            e.target.value.length > 0
                        ) {
                            setPasswordTouched(true);
                        }
                    }}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-primary"
                    required={required}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={togglePasswordVisibility}
                        tabIndex={-1}
                        aria-label={
                            showPassword ? "Esconder senha" : "Mostrar senha"
                        }
                    >
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            className="text-gray-500"
                        />
                    </button>
                )}
            </div>

            {type === "password" &&
                passwordTouched &&
                onValidityChange &&
                value.length > 0 && (
                    <div className="mt-2">
                        <div className="grid grid-cols-1 gap-1 text-sm">
                            {requirements.map((item, index) => (
                                <PasswordRequirement key={index} {...item} />
                            ))}
                        </div>
                    </div>
                )}
        </div>
    );
};

export default InputField;
