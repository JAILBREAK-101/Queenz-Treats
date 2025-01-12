import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getApiUrl = () => {
    return import.meta.env.VITE_BACKEND_API_URL || 'http://127.0.0.1:5000'; // Fallback to development URL
};
