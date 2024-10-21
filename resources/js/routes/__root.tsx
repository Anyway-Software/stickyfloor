import { Toaster } from '@/components/ui/toaster'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import React from 'react'

export const Route = createRootRoute({
    component: () => (
        <>
            {/* <div className="p-2 flex gap-2">
                <Link to="/login" className="[&.active]:font-bold">
                    Login
                </Link>{" "}
                <Link to="/register" className="[&.active]:font-bold">
                    Register
                </Link>
                <Link to="/" className="[&.active]:font-bold">
                    home
                </Link>
            </div>
            <hr /> */}
            <Outlet />
            <Toaster />
            {/* <TanStackRouterDevtools /> */}
        </>
    ),
})
