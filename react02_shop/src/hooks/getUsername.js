import { useState, useEffect } from "react";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function useGetUsername() {
    let [username, setUsername] = useState('');
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ['getName'],
        refetchOnWindowFocus: false,
        retry: 2,
        queryFn: async () => {
            const response = await axios.get('/api/username.json');
            return response.data;
        }
    });

    useEffect(() => {
        if (isLoading) {
            setUsername('받아들이는 중');
        } else if (isError) {
            setUsername('오류 발생');
        } else if (isSuccess) {
            setUsername(data);
        }
    }, [data, isLoading, isError]);

    return [username];
}