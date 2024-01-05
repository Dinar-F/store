import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
    const [debauncedValue, setDebauncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebauncedValue(value), delay || 500);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return  debauncedValue ;
};