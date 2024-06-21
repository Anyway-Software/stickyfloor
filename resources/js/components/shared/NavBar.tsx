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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export function NavShell({ children }: { children: any }) {
    return (
        <div className="grid h-screen w-full pl-[53px]">
            <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
                <div className="border-b p-2">
                    <Button variant="outline" size="icon" aria-label="Home">
                        {/* <FootprintsIcon className="size-5 fill-foreground" /> */}
                        <img src="/logo.webp" />
                    </Button>
                </div>
                <TooltipProvider>
                    <nav className="grid gap-1 p-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg bg-muted"
                                    aria-label="Dashboard"
                                >
                                    <SquareTerminal className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Dashboard
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg"
                                    aria-label="Events"
                                >
                                    <Calendar className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Events
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg"
                                    aria-label="Tickets"
                                >
                                    <Ticket className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Tickets
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg"
                                    aria-label="Customers"
                                >
                                    <SquareUser className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Customers
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg"
                                    aria-label="Reports"
                                >
                                    <Book className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Reports
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg"
                                    aria-label="Settings"
                                >
                                    <Settings2 className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Settings
                            </TooltipContent>
                        </Tooltip>
                    </nav>
                    <nav className="mt-auto grid gap-1 p-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Help"
                                >
                                    <LifeBuoy className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Help
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Account"
                                >
                                    <SquareUser className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Account
                            </TooltipContent>
                        </Tooltip>
                    </nav>
                </TooltipProvider>
            </aside>
            <div className="flex flex-col">
                <header className="sticky top-0 z-10 flex h-[62px] items-center gap-1 border-b bg-background px-4">
                    <h1 className="text-xl font-semibold">StickyFloor</h1>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Settings className="size-4" />
                                <span className="sr-only">Settings</span>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="max-h-[80vh]">
                            <DrawerHeader>
                                <DrawerTitle>Configuration</DrawerTitle>
                                <DrawerDescription>
                                    Configure the settings for the event and
                                    ticket options.
                                </DrawerDescription>
                            </DrawerHeader>
                            <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                                <fieldset className="grid gap-6 rounded-lg border p-4">
                                    <legend className="-ml-1 px-1 text-sm font-medium">
                                        Settings
                                    </legend>
                                    <div className="grid gap-3">
                                        <Label htmlFor="model">Model</Label>
                                        <Select>
                                            <SelectTrigger
                                                id="model"
                                                className="items-start [&_[data-description]]:hidden"
                                            >
                                                <SelectValue placeholder="Select a model" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="genesis">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Rabbit className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Genesis
                                                                </span>
                                                            </p>
                                                            <p
                                                                className="text-xs"
                                                                data-description
                                                            >
                                                                Our fastest
                                                                model for
                                                                general use
                                                                cases.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="explorer">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Bird className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Explorer
                                                                </span>
                                                            </p>
                                                            <p
                                                                className="text-xs"
                                                                data-description
                                                            >
                                                                Performance and
                                                                speed for
                                                                efficiency.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="quantum">
                                                    <div className="flex items-start gap-3 text-muted-foreground">
                                                        <Turtle className="size-5" />
                                                        <div className="grid gap-0.5">
                                                            <p>
                                                                Neural{" "}
                                                                <span className="font-medium text-foreground">
                                                                    Quantum
                                                                </span>
                                                            </p>
                                                            <p
                                                                className="text-xs"
                                                                data-description
                                                            >
                                                                The most
                                                                powerful model
                                                                for complex
                                                                computations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="temperature">
                                            Temperature
                                        </Label>
                                        <Input
                                            id="temperature"
                                            type="number"
                                            placeholder="0.4"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="top-p">Top P</Label>
                                        <Input
                                            id="top-p"
                                            type="number"
                                            placeholder="0.7"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="top-k">Top K</Label>
                                        <Input
                                            id="top-k"
                                            type="number"
                                            placeholder="0.0"
                                        />
                                    </div>
                                </fieldset>
                                <fieldset className="grid gap-6 rounded-lg border p-4">
                                    <legend className="-ml-1 px-1 text-sm font-medium">
                                        Messages
                                    </legend>
                                    <div className="grid gap-3">
                                        <Label htmlFor="role">Role</Label>
                                        <Select defaultValue="system">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="system">
                                                    System
                                                </SelectItem>
                                                <SelectItem value="user">
                                                    User
                                                </SelectItem>
                                                <SelectItem value="assistant">
                                                    Assistant
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="content">Content</Label>
                                        <Textarea
                                            id="content"
                                            placeholder="You are a..."
                                        />
                                    </div>
                                </fieldset>
                            </form>
                        </DrawerContent>
                    </Drawer>
                </header>
                {children}
            </div>
        </div>
    );
}
