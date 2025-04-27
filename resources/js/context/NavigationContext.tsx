// resources/js/context/NavigationContext.tsx

import React, { createContext, useContext, useEffect, ReactNode } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { addResponseInterceptor } from '@/api' // <-- import here!

const NavigationContext = createContext<ReturnType<typeof useNavigate> | null>(
    null,
)

interface NavigationProviderProps {
    children: ReactNode
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
    children,
}) => {
    const navigate = useNavigate()
    useEffect(() => {
        addResponseInterceptor(navigate)
    }, [navigate])

    return (
        <NavigationContext.Provider value={navigate}>
            {children}
        </NavigationContext.Provider>
    )
}

export const useNavigation = () => {
    const context = useContext(NavigationContext)
    if (context === null) {
        throw new Error(
            'useNavigation must be used within a NavigationProvider',
        )
    }
    return context
}
