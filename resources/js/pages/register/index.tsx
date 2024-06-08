import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    useMutation,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "@tanstack/react-router";
import { useToast } from "@/components/ui/use-toast";

const schema = z
    .object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        c_password: z.string().min(6, "Password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.c_password, {
        message: "Passwords must match",
        path: ["c_password"],
    });

type FormData = z.infer<typeof schema>;

async function registerUser(userData: FormData) {
    const response = await axios.post(
        "/api/auth/register",
        userData,
    );
    return response.data;
}

export function Register() {
    const queryClient = new QueryClient();
    const navigate = useNavigate();
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            toast({
                title: "Registration Successful",
                description: "You have successfully registered. Please log in.",
            });
            navigate({ to: "/login" });
        },
        onError: (error) => {
            toast({
                title: "Registration Failed",
                description:
                    "There was an error registering your account. Please try again.",
            });
            console.error("Registration failed:", error);
        },
    });

    const onSubmit = (data: FormData) => {
        mutation.mutate(data);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                <div className="flex items-center justify-center py-12">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mx-auto grid w-[350px] gap-6"
                    >
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Register</h1>
                            <p className="text-balance text-muted-foreground">
                                Create your account by filling the information
                                below
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="text-red-500">
                                        {errors.name.message as string}
                                    </p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email.message as string}
                                    </p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password.message as string}
                                    </p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="c_password">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="c_password"
                                    type="password"
                                    {...register("c_password")}
                                />
                                {errors.c_password && (
                                    <p className="text-red-500">
                                        {errors.c_password.message as string}
                                    </p>
                                )}
                            </div>
                            <Button type="submit" className="w-full">
                                Register
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="underline">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
                <div
                    className="hidden bg-muted lg:block"
                    style={{
                        backgroundImage:
                            'url("https://anyway.software/_ipx/w_1080,q_75/%2F_next%2Fstatic%2Fmedia%2Ftim.b4f6f12b.jpeg?url=%2F_next%2Fstatic%2Fmedia%2Ftim.b4f6f12b.jpeg&w=1080&q=75")',
                        backgroundRepeat: "repeat",
                        backgroundSize: "100px 100px",
                        height: "100vh",
                        width: "100%",
                    }}
                ></div>
            </div>
        </QueryClientProvider>
    );
}
