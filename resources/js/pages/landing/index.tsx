export function Landing() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-4xl font-bold">Welcome to stickyfloor.</div>

            <div className="flex justify-center mt-4">
                <a href="/login" className="btn btn-primary">
                    Login
                </a>
                <a href="/register" className="btn btn-secondary">
                    Register
                </a>
            </div>
        </div>
    );
}
