import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function Landing() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
                Welcome to stickyfloor.
            </h1>
            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-8">
                Event ticketing with super minimal booking fees.
            </p>

            <div className="w-full max-w-[350px] bg-card text-card-foreground shadow-sm rounded-lg p-6 shadow-md">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold leading-none tracking-tight mb-2">
                        Get started
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Create your first event
                    </p>
                </div>
                <div className="grid w-full items-center gap-4 justify-center mb-6">
                    <img
                        src="./logo.webp"
                        alt="logo"
                        className="w-32 h-32 object-contain mx-auto"
                    />
                </div>
                <div className="flex flex-col sm:flex-row justify-around gap-2">
                    <Button asChild className="w-full sm:w-[calc(50%-0.5rem)]">
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild className="w-full sm:w-[calc(50%-0.5rem)]">
                        <Link to="/register">Register</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
