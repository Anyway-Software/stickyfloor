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
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
                Welcome to stickyfloor.
            </h1>
            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8">
                Event ticketing with super minimal booking fees.
            </p>

            <Card className="w-full max-w-[350px]">
                <CardHeader>
                    <CardTitle>Get started</CardTitle>
                    <CardDescription>Create your first event</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4 justify-center">
                        <img
                            src="./logo.webp"
                            alt="logo"
                            className="w-32 h-32 object-contain mx-auto"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-around">
                    <Button
                        asChild
                        className="w-full sm:w-[calc(50%-0.5rem)] mb-2 sm:mb-0"
                    >
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild className="w-full sm:w-[calc(50%-0.5rem)]">
                        <Link to="/register">Register</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
