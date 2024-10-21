import { NavShell } from '@/components/shared/NavBar'
import { Tickets } from '@/pages/tickets'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tickets')({
    component: () => (
        <NavShell>
            <Tickets />
        </NavShell>
    ),
})
