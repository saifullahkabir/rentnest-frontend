"use client";

import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, Phone, User, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  name: string;
  email: string;
  phone?: string;
  profileImage?: string;
  password: string;
  role: "TENANT" | "LANDLORD";
};

type Role = RegisterFormData["role"];

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      profileImage: "",
      password: "",
      role: "TENANT",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await res.json();

      if (result.success) {
        toast.success(result.message || "Registration successfully");

        router.push("/auth/login");
      } else {
        toast.error(result.message || "Registration failed");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-2">
        <Label>Full Name</Label>

        <div className="relative">
          <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

          <Input
            className="pl-10 h-11"
            placeholder="Full Name"
            {...register("name", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
        </div>
        {errors.name && (
          <p className="ml-4 text-sm text-red-500">
            {errors.name.message as string}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label>Email</Label>

        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10 h-11"
            type="email"
            placeholder="Email"
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
          <p className="ml-4 text-sm text-red-500">
            {errors.email.message as string}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label>Phone (Optional)</Label>

        <div className="relative">
          <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10 h-11"
            placeholder="Phone"
            {...register("phone", {
              pattern: {
                value: /^(\+8801|01)[3-9]\d{8}$/,
                message: "Invalid phone number",
              },
            })}
          />
        </div>
        {errors.phone && (
          <p className=" ml-4 text-sm text-red-500">
            {errors.phone.message as string}
          </p>
        )}
      </div>

      {/* Profile */}
      <div className="space-y-2">
        <Label>Profile URL (Optional)</Label>

        <div className="relative">
          <ImageIcon className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10 h-11"
            placeholder="Profile Image URL"
            {...register("profileImage", {
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Invalid URL",
              },
            })}
          />
        </div>

        {errors.profileImage && (
          <p className="ml-4 text-sm text-red-500">
            {errors.profileImage.message as string}
          </p>
        )}
      </div>

      {/* Role */}
      <div className="space-y-2">
        <Label>Select Role</Label>

        <Tabs
          defaultValue="TENANT"
          onValueChange={(value) => setValue("role", value as Role)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="TENANT">Tenant</TabsTrigger>
            <TabsTrigger value="LANDLORD">Landlord</TabsTrigger>
          </TabsList>
        </Tabs>

        <input
          type="hidden"
          {...register("role", {
            required: "Role is required",
          })}
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label>Password</Label>

        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10 pr-11 h-11"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-primary"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {errors.password && (
          <p className="ml-4 text-sm text-red-500">
            {errors.password.message as string}
          </p>
        )}
      </div>

      {/* Button */}
      <Button type="submit" disabled={isSubmitting} className="w-full h-11">
        {isSubmitting ? "Creating..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-primary hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
