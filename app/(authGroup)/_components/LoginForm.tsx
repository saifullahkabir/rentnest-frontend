"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "../_actions/loginAction";
import { toast } from "sonner";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirectTo") || "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    const result = await loginAction(data, redirectTo);

    if (!result.success) {
      toast.error(result.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email */}
      <div className="space-y-2">
        <Label>Email</Label>

        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

          <Input
            type="email"
            placeholder="Enter your email"
            className="pl-10 h-11"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
          />
        </div>

        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label>Password</Label>

        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="pl-10 pr-11 h-11"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-primary"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-primary hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Button */}
      <Button type="submit" disabled={isSubmitting} className="w-full h-11">
        {isSubmitting ? "Signing In..." : "Login"}
      </Button>

      {/* Register */}
      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-primary hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
}
