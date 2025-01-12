import { useState } from "react";

const useError = () => {
    const [error, setError] = useState(null);

    // Handler for clearing error message
    const clearError = () => {
        setError(null)
    };

    return {error, setError, clearError};
}

export default useError;