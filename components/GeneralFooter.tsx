'use client';

import React from 'react';
import DesktopFooter from './DesktopFooter'; // Import Desktop Footer
import MobileFooter from './MobileFooter'; // Import Mobile Footer
import useMediaQuery from '@/components/FooterMediaQuery'; // Import the custom useMediaQuery hook

const GeneralFooter: React.FC = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)'); // Check if the screen is a desktop

    return (
        <>
            {isDesktop ? <DesktopFooter /> : <MobileFooter />} {/* Render DesktopFooter or MobileFooter based on screen size */}
        </>
    );
};

export default GeneralFooter; // Ensure this is correctly exported
