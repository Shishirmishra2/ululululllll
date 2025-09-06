"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeSlashIcon,
  GoogleLogoIcon,
} from "@phosphor-icons/react/ssr";
import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <section className="min-h-screen text-white flex items-center">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          size="icon"
          className="mb-8 text-white hover:bg-white/10"
          asChild>
          <Link href={"/"}>
            <ArrowLeftIcon size={24} />
          </Link>
        </Button>

        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Sign In</h1>
            <p className="text-gray-300">
              Welcome back! Please sign in to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <Input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-2 border-white/20 rounded-2xl px-6 py-6 h-16 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-0"
            />

            {/* Password */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-transparent border-2 border-white/20 rounded-2xl px-6 py-6 pr-12 h-16 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                {showPassword ? (
                  <EyeSlashIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                  className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
                <label
                  htmlFor="remember"
                  className="text-sm cursor-pointer text-gray-300">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-purple-400 hover:text-purple-300">
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-2xl">
              Sign In
            </Button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-400">OR</span>
              </div>
            </div>

            {/* Google Sign In */}
            <Button variant="secondary" className="w-full h-14 rounded-2xl">
              <GoogleLogoIcon weight="bold" />
              Continue with Google
            </Button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-white hover:text-purple-300">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
