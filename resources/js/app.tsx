import React, { StrictMode, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
    createRouter,
    useNavigate,
} from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationProvider } from './context/NavigationContext'
import { addResponseInterceptor } from './api'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const queryClient = new QueryClient()

const App: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        addResponseInterceptor(navigate)
    }, [navigate])

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationProvider>
                <RouterProvider router={router} />
            </NavigationProvider>
        </QueryClientProvider>
    )
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <App />
        </StrictMode>,
    )
}
