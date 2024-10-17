import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

export function Landing() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Welcome to stickyfloor.</CardTitle>
                    <CardDescription>
                        Event ticketing with super minimal booking fees.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4 justify-center">
                        <img
                            src="./logo.webp"
                            alt="logo"
                            className="object-contain"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-around">
                    <Button asChild className="w-full mx-2">
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild className="w-full mx-2">
                        <Link to="/register">Register</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
