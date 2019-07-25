import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
    const [active, setActive] = useLocalStorage('darkMode')
    useEffect(() => {
        const darkModeActive = localStorage.getItem('darkMode') === true;
        active ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [active])
    return [active, setActive];
}

export default useDarkMode;