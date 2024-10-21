import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import {
    Bird,
    Book,
    Bot,
    Code2,
    FootprintsIcon,
    LifeBuoy,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Ticket,
    Calendar,
    Turtle,
    PlusCircle,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
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
    // { label: 'Customers', icon: SquareUser },
    // { label: 'Reports', icon: Book },
    // { label: 'Settings', icon: Settings2 },
]

const bottomNavItems = [
    // { label: 'Help', icon: LifeBuoy },
    { label: 'Account', icon: SquareUser, route: '/account' },
]

export function NavShell({ children }: { children: any }) {
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('api_token')
        navigate({ to: '/login' })
    }


    return (
        <div className="grid h-screen w-full pl-[53px]">
            <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
                <div className="border-b p-2">
                    <Link to="/dashboard">
                        <Button variant="outline" size="icon" aria-label="Home">
                            <img src="/logo.webp" />
                        </Button>
                    </Link>
                </div>
                <TooltipProvider>
                    <nav className="grid gap-1 p-2">
                        {navItems.map((item) => (
                            <Tooltip key={item.label}>
                                <TooltipTrigger asChild>
                                    <Link to={item.route} className={location.pathname === item.route ? "bg-green" : ""}>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-lg"
                                            aria-label={item.label}
                                        >
                                            <item.icon className="size-5" />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    {item.label}
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </nav>
                    <nav className="mt-auto grid gap-1 p-2">
                        {bottomNavItems.map((item) => (
                            <Tooltip key={item.label}>
                                <TooltipTrigger asChild>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        // className="rounded-full"
                                    >
                                        <SquareUser className="h-5 w-5" />
                                        <span className="sr-only">
                                            Toggle user menu
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onSelect={handleLogout}
                                        // className=""
                                    >
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>


                                    {/* <Button
                                        variant="ghost"
                                        size="icon"
                                        className="mt-auto rounded-lg"
                                        aria-label={item.label}
                                    >
                                        <item.icon className="size-5" />
                                    </Button> */}
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    {item.label}
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </nav>
                </TooltipProvider>
            </aside>
            <div className="flex flex-col pt-10 bg-muted">{children}</div>
        </div>
    )
}
