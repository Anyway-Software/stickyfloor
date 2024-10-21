import { NavShell } from '@/components/shared/NavBar'
import { Dashboard } from '@/pages/dashboard'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dashboard')({
    component: () => (
        <NavShell>
            <Dashboard />
        </NavShell>
    ),
})
