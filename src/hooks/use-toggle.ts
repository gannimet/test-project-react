import { useState } from 'react';

export function useToggle(initial: boolean) {
    const [value, setValue] = useState(initial);

    const toggle = () => setValue(!value);

    return [value, toggle];
}
