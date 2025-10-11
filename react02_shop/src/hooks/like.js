import { useState } from 'react';

export function useLike() {
    let [like, setLike] = useState(0)
    function toggleLike() {
        setLike(like + 1);
    }
    return [like, toggleLike];
}
