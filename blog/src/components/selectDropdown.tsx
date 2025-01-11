import React from "react";
import { Controller, Control } from "react-hook-form";
import Select from "react-select";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Label } from "./ui/label";

interface SelectDropdownProps {
  name: string;
  control: Control<any>;
  options: { value: string; label: string }[];
  isMulti?: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  isValid?: boolean;
  className?: string;
  icon?: React.ReactNode; // Optional icon prop
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  name,
  control,
  options,
  isMulti = false,
  label,
  placeholder,
  error,
  isValid,
  className,
  icon, // Icon passed as a prop
}) => {
  return (
    <div className={clsx("space-y-1", className)}>
      <Label className="text-sm font-medium">{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative">
            {icon && (
              <div className="absolute left-3 top-3.5 h-5 w-5 text-gray-400">
                {icon}
              </div>
            )}
            <Select
              {...field}
              options={options}
              isMulti={isMulti}
              placeholder={placeholder}
              classNamePrefix="react-select"
              className="react-select-container"
              closeMenuOnSelect={!isMulti}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  paddingLeft: icon ? "2.5rem" : provided.paddingLeft, // Adjust padding if icon is present
                  borderColor: error
                    ? "rgb(239 68 68)" // TailwindCSS color for red-500
                    : isValid
                    ? "rgb(34 197 94)" // TailwindCSS color for green-500
                    : "rgb(209 213 219)", // TailwindCSS color for gray-300
                  "&:hover": {
                    borderColor: error
                      ? "rgb(239 68 68)" // TailwindCSS color for red-500
                      : isValid
                      ? "rgb(34 197 94)" // TailwindCSS color for green-500
                      : "rgb(156 163 175)", // TailwindCSS color for gray-400
                  },
                  boxShadow: "none",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 4,
                colors: {
                  ...theme.colors,
                  primary25: "rgb(219 234 254)", // TailwindCSS color for blue-100
                  primary: "rgb(99 102 241)", // TailwindCSS color for indigo-500
                },
              })}
            />
            {error && (
              <ExclamationCircleIcon className="absolute right-3 top-3.5 h-5 w-5 text-red-500" />
            )}
            {isValid && (
              <CheckCircleIcon className="absolute right-3 top-3.5 h-5 w-5 text-green-500" />
            )}
          </div>
        )}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default SelectDropdown;
