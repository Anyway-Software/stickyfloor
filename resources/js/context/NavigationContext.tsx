// resources/js/context/NavigationContext.tsx

import React, { createContext, useContext, ReactNode } from 'react';
import { useNavigate } from '@tanstack/react-router';

const NavigationContext = createContext<ReturnType<typeof useNavigate> | null>(null);

interface NavigationProviderProps {
    children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    return (
        <NavigationContext.Provider value={navigate}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (context === null) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};
