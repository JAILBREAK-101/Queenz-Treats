"use client";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type InputFieldProps = {
  name: string;
  label: string;
  register: any;
  type?: string;
  icon?: React.ReactNode;
  [key: string]: any;
};

const InputField = ({
  name,
  label,
  register,
  type = "text",
  icon,
  isError,
  errorMessage,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = !!errorMessage;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative mb-4">
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
            {icon}
          </div>
        )}
        <Input
          {...register(name)}
          type={isPassword && showPassword ? "text" : type}
          id={name}
          className={`
            peer w-full h-16 border border-gray-200 rounded-2xl px-3 py-2 outline-none transition-all
            ${isFocused || hasValue ? "pt-5 pb-1.5" : "py-3"}
            ${icon ? "pl-10" : "pl-3"} pr-10 text-black text-[17px]
            ${
              isError
                ? "border-error-500"
                : "focus:border-none focus-visible:ring-1 focus-visible:ring-blue-700"
            } `}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(!!e.target.value)}
        />
        <Label
          htmlFor={name}
          className={`
          absolute left-3  transition-all pointer-events-none
           ${icon ? "left-10" : "left-3"}
          ${
            isFocused || hasValue
              ? "top-1 text-sm text-gray-400"
              : "top-1/2 -translate-y-1/2 text-base text-gray-500"
          }
        `}
        >
          {label}
        </Label>
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-900" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-900" />
            )}
          </button>
        )}
      </div>
      {isError && <p className="mt-1 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;