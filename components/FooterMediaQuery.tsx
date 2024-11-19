'use client';

import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        const updateMatches = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addEventListener('change', updateMatches);

        // Initial check
        updateMatches();

        // Cleanup event listener on unmount
        return () => {
            mediaQueryList.removeEventListener('change', updateMatches);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;
