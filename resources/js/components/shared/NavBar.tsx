import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import {
    SquareTerminal,
    Calendar,
    PlusCircle,
    Ticket,
    SquareUser,
} from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navItems = [
    { label: 'Dashboard', icon: SquareTerminal, route: '/dashboard' },
    { label: 'Events', icon: Calendar, route: '/events' },
    { label: 'Create Event', icon: PlusCircle, route: '/create_event' },
    { label: 'Tickets', icon: Ticket, route: '/tickets' },
]

export function NavShell({ children }: { children: any }) {
    const location = useLocation()
    const navigate = useNavigate()

    const [isExpanded, setIsExpanded] = useState(() => {
        // Initialize from localStorage, default to true if not set
        const storedState = localStorage.getItem('sidebar-expanded')
        return storedState === null ? true : JSON.parse(storedState)
    })

    const [isTransitionComplete, setIsTransitionComplete] = useState(isExpanded)

    // Update local storage whenever the state changes
    useEffect(() => {
        localStorage.setItem('sidebar-expanded', JSON.stringify(isExpanded))

        // Delay setting the transition complete state to match the expansion duration
        const timeout = setTimeout(() => {
            setIsTransitionComplete(isExpanded)
        }, 300) // Match this duration with the CSS transition duration

        return () => clearTimeout(timeout)
    }, [isExpanded])

    const handleToggleSidebar = () => {
        setIsExpanded(!isExpanded)
    }

    const handleLogout = () => {
        localStorage.removeItem('api_token')
        navigate({ to: '/login' })
    }

    return (
        <div className="flex h-screen w-full">
            <aside
                className={`flex-shrink-0 transition-all duration-300 ${
                    isExpanded ? 'w-64' : 'w-14'
                }`}
            >
                <div className="flex h-full flex-col border-r transition-all duration-300 relative">
                    <div className="border-b p-2 flex items-center justify-between relative">
                        <Link
                            to="/dashboard"
                            className="flex items-center gap-2"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Home"
                            >
                                <img src="/logo.webp" />
                            </Button>
                            {isExpanded && (
                                <span
                                    className={`font-bold whitespace-nowrap transition-opacity duration-300 ${
                                        isTransitionComplete
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    }`}
                                >
                                    stickyfloor.
                                </span>
                            )}
                        </Link>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handleToggleSidebar}
                                        aria-label="Toggle"
                                        className={`absolute transition-all ${
                                            isExpanded ? 'right-2' : '-right-12'
                                        }`}
                                        style={{
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            zIndex: 10,
                                        }}
                                    >
                                        {isExpanded ? '<' : '>'}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    {isExpanded ? 'Shrink' : 'Expand'}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <TooltipProvider>
                        <nav className="grid gap-1 p-2">
                            {navItems.map((item) => (
                                <Tooltip key={item.label} disabled={isExpanded}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            to={item.route}
                                            className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                                                location.pathname === item.route
                                                    ? 'bg-green'
                                                    : ''
                                            }`}
                                            style={{
                                                height: '48px', // Fixed height for consistency
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            <item.icon className="size-5" />
                                            {isExpanded && (
                                                <span
                                                    className={`ml-2 transition-opacity duration-300 ${
                                                        isTransitionComplete
                                                            ? 'opacity-100'
                                                            : 'opacity-0'
                                                    }`}
                                                >
                                                    {item.label}
                                                </span>
                                            )}
                                        </Link>
                                    </TooltipTrigger>
                                    {!isExpanded && (
                                        <TooltipContent
                                            side="right"
                                            sideOffset={5}
                                        >
                                            {item.label}
                                        </TooltipContent>
                                    )}
                                </Tooltip>
                            ))}
                        </nav>
                        <nav className="mt-auto grid gap-1 p-2">
                            <Tooltip key={'Account'} disabled={isExpanded}>
                                <TooltipTrigger asChild>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Link
                                                to="#"
                                                className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                                                    location.pathname ===
                                                    '/account'
                                                        ? 'bg-green'
                                                        : ''
                                                }`}
                                                style={{
                                                    height: '48px', // Fixed height for consistency
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                <SquareUser className="size-5" />
                                                {isExpanded && (
                                                    <span
                                                        className={`ml-2 transition-opacity duration-300 ${
                                                            isTransitionComplete
                                                                ? 'opacity-100'
                                                                : 'opacity-0'
                                                        }`}
                                                    >
                                                        Account
                                                    </span>
                                                )}
                                            </Link>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>
                                                Account
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                Settings
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Support
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                onSelect={handleLogout}
                                            >
                                                Logout
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TooltipTrigger>
                                {!isExpanded && (
                                    <TooltipContent side="right" sideOffset={5}>
                                        Account
                                    </TooltipContent>
                                )}
                            </Tooltip>
                        </nav>
                    </TooltipProvider>
                </div>
            </aside>
            <div className="flex-grow transition-all duration-300">
                <div className="flex flex-col pt-10 bg-muted">{children}</div>
            </div>
        </div>
    )
}
