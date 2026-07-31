import LoginForm from "../../_components/LoginForm";

export default function LoginPage() {
  return (
    <section className="flex min-h-[calc(100vh-90px)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-lg sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access your RentNest account
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}