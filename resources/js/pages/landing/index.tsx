import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import * as React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export function Landing() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Welcome to stickyfloor.</CardTitle>
                    <CardDescription>
                        Event ticketing with super minimal booking fees.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4 items-center justify-center">
                        // image pointing to the logo
                        <img src="/avatars/01.png" alt="logo" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
