"use client";

import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, Phone, User, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [role, setRole] = useState("TENANT");

  return (
    <form className="space-y-5">
      {/* Full Name */}
      <div className="space-y-2">
        <Label>Full Name</Label>

        <div className="relative">
          <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

          <Input placeholder="Your Name" className="pl-10 h-11" />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label>Email</Label>

        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="example@gmail.com"
            className="pl-10 h-11"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label>Phone (Optional)</Label>

        <div className="relative">
          <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="+8801XXXXXXXXX" className="pl-10 h-11" />
        </div>
      </div>

      {/* Profile */}
      <div className="space-y-2">
        <Label>Profile URL (Optional)</Label>

        <div className="relative">
          <ImageIcon className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="https://..." className="pl-10 h-11" />
        </div>
      </div>

      {/* Role */}
      <div className="space-y-2">
        <Label>Select Role</Label>

        <Tabs value={role} onValueChange={setRole} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="TENANT">Tenant</TabsTrigger>

            <TabsTrigger value="LANDLORD">Landlord</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label>Password</Label>

        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="pl-10 pr-11 h-11"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-primary"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Button */}
      <Button type="submit" className="h-11 w-full rounded-xl text-base">
        Create Account
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
