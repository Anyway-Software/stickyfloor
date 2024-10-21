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

const navItems = [
    { label: 'Dashboard', icon: SquareTerminal },
    { label: 'Events', icon: Calendar },
    { label: 'Create Event', icon: PlusCircle },
    { label: 'Tickets', icon: Ticket },
    { label: 'Customers', icon: SquareUser },
    { label: 'Reports', icon: Book },
    { label: 'Settings', icon: Settings2 },
]

const bottomNavItems = [
    { label: 'Help', icon: LifeBuoy },
    { label: 'Account', icon: SquareUser },
]

export function NavShell({ children }: { children: any }) {
    return (
        <div className="grid h-screen w-full pl-[53px]">
            <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
                <div className="border-b p-2">
                    <Button variant="outline" size="icon" aria-label="Home">
                        <img src="/logo.webp" />
                    </Button>
                </div>
                <TooltipProvider>
                    <nav className="grid gap-1 p-2">
                        {navItems.map((item) => (
                            <Tooltip key={item.label}>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-lg"
                                        aria-label={item.label}
                                    >
                                        <item.icon className="size-5" />
                                    </Button>
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
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="mt-auto rounded-lg"
                                        aria-label={item.label}
                                    >
                                        <item.icon className="size-5" />
                                    </Button>
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
