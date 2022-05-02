import {useState} from "react";

export interface ApiResponse {
    isLoading: boolean,
    data?: any
    error?: any,
    execute: Function
}

export default function useGetRequest(url: string): ApiResponse {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<any>(null);

    const execute = async () => {
        setIsLoading(true)
        try {
            const result = await fetch(url)
            const json = await result.json()
            setData(json);
        } catch (error) {
            setError(error)
        }
        setIsLoading(false)
    };

    return {isLoading, error, data, execute};
}
