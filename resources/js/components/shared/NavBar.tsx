import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import {
    SquareTerminal,
    Calendar,
    PlusCircle,
    Ticket,
    SquareUser,
    ChevronLeft,
    ChevronRight,
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

export function NavShell({ children }: { children: React.JSX.Element }) {
    const location = useLocation()
    const navigate = useNavigate()

    const [isExpanded, setIsExpanded] = useState(() => {
        // Initialize from localStorage, default to true if not set
        const storedState = localStorage.getItem('sidebar-expanded')
        return storedState === null ? true : JSON.parse(storedState)
    })

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', JSON.stringify(isExpanded))
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
                className={`fixed top-0 left-0 h-full transition-all duration-300 ${
                    isExpanded ? 'w-52' : 'w-14'
                }`}
            >
                <div className="flex h-full flex-col border-r transition-all duration-300 relative">
                    <div className="border-b p-2 flex items-center relative">
                        <img src="/logo.webp" className={'size-10'} />
                        <span
                            className="font-bold whitespace-nowrap transition-opacity duration-300 pl-2"
                            style={{
                                overflow: 'hidden',
                            }}
                        >
                            stickyfloor.
                        </span>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handleToggleSidebar}
                                        aria-label="Toggle"
                                        className={`absolute transition-all hover:bg-gray-200 ${
                                            isExpanded ? 'right-2' : '-right-12'
                                        }`}
                                        style={{
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            zIndex: 10,
                                        }}
                                    >
                                        {isExpanded ? (
                                            <ChevronLeft />
                                        ) : (
                                            <ChevronRight />
                                        )}
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
                                <Tooltip
                                    key={item.label}
                                    disableHoverableContent={isExpanded}
                                >
                                    <TooltipTrigger asChild>
                                        <Link
                                            to={item.route}
                                            className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                                                location.pathname === item.route
                                                    ? 'bg-green'
                                                    : 'hover:bg-gray-200'
                                            }`}
                                            style={{
                                                height: '48px',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            <item.icon className="size-5 min-w-5" />
                                            <span className="ml-2 transition-opacity duration-300">
                                                {item.label}
                                            </span>
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
                            <Tooltip
                                key={'Account'}
                                disableHoverableContent={isExpanded}
                            >
                                <TooltipTrigger asChild>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Link
                                                // to=""
                                                className={`flex items-center gap-2 p-2 rounded-md transition-colors hover:bg-gray-200 ${
                                                    location.pathname ===
                                                    '/account'
                                                        ? 'bg-green'
                                                        : ''
                                                }`}
                                                style={{
                                                    height: '48px',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <SquareUser className="size-5 min-w-5" />
                                                <span className="ml-2 transition-opacity duration-300">
                                                    Account
                                                </span>
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
            <div
                className="flex-grow ml-14 transition-all duration-300"
                style={{ marginLeft: isExpanded ? '13rem' : '3.5rem' }}
            >
                <div className="flex flex-col bg-muted h-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
