import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";

export function Register() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Register</h1>
                        <p className="text-balance text-muted-foreground">
                            Create your account by filling the information below
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">
                                Confirm Password
                            </Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Register
                        </Button>
                        <a href="/auth/google/redirect">
                            <Button type="button" className="w-full">
                                Sign in with Google
                            </Button>
                        </a>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            <div 
                className="hidden bg-muted lg:block"
                style={{
                    backgroundImage: 'url("https://anyway.software/_ipx/w_1080,q_75/%2F_next%2Fstatic%2Fmedia%2Ftim.b4f6f12b.jpeg?url=%2F_next%2Fstatic%2Fmedia%2Ftim.b4f6f12b.jpeg&w=1080&q=75")',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '100px 100px',
                    height: '100vh',
                    width: '100%',
                    rotate: '22deg',
                }}>
            </div>
        </div>
    );
}
