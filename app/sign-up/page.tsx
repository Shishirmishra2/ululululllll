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

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

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
            <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
            <p className="text-gray-300">
              It only takes a minute to create your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="bg-transparent border-2 border-white/20 rounded-2xl px-6 py-6 h-16 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-0"
                />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent border-2 border-white/20 rounded-2xl px-6 py-6 h-16 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-0"
                />
              </div>
            </div>

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

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) =>
                  setAgreeToTerms(checked as boolean)
                }
                className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <label
                htmlFor="terms"
                className="text-sm leading-5 cursor-pointer">
                I agree the AlgoPlay{" "}
                <span className="text-purple-400">Terms of Services</span> and{" "}
                <span className="text-purple-400">Privacy Policy</span>
              </label>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              disabled={!agreeToTerms}
              className="w-full h-14 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed">
              Sign Up
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

            {/* Google Sign Up */}
            <Button variant="secondary" className="w-full h-14 rounded-2xl">
              <GoogleLogoIcon weight="bold" />
              Continue with Google
            </Button>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-gray-400">
                Already registered?{" "}
                <a href="/sign-in" className="text-white hover:text-purple-300">
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
