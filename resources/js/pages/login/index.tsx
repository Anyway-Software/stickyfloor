import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
    useMutation,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from '@tanstack/react-router'
import { useToast } from '@/components/ui/use-toast'
import { api } from '../../api'

const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})

type FormData = z.infer<typeof schema>

async function loginUser(userData: FormData) {
    const response = await api.post('/auth/login', userData)
    return response.data
}

export function Login() {
    const queryClient = new QueryClient()
    const navigate = useNavigate()
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            localStorage.setItem('api_token', data.accessToken)
            toast({
                title: 'Login Successful',
                description: 'You have successfully logged in.',
            })
            navigate({ to: '/dashboard' })
        },
        onError: (error) => {
            toast({
                title: 'Login Failed',
                description: 'Invalid email or password. Please try again.',
            })
            console.error('Login failed:', error)
        },
    })

    const onSubmit = (data: FormData) => {
        mutation.mutate(data)
    }

    // const handleGoogleLogin = () => {
    //     window.location.href = "/auth/google/redirect";
    // };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                <div className="flex items-center justify-center py-12">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mx-auto grid w-[350px] gap-6"
                    >
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email.message as string}
                                    </p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register('password')}
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password.message as string}
                                    </p>
                                )}
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                            {/* <Button type="button" onClick={handleGoogleLogin} className="w-full">
                                Sign in with Google
                            </Button> */}
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{' '}
                            <Link to="/register" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
                <div
                    className="hidden bg-muted lg:block"
                    style={{
                        backgroundImage: 'url("./logo.webp")',
                        backgroundRepeat: 'repeat',
                        backgroundSize: '100px 100px',
                        height: '75vh',
                        width: '100%',
                        rotate: '178deg',
                    }}
                ></div>
            </div>
        </QueryClientProvider>
    )
}
