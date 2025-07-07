import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { GoogleIcon } from "../../../assets/icons/googleIcon";
import { GlassInputWrapper } from "./glassInputWrapper";
import type { SignInPageProps } from "../../../lib/types/auth/login";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../lib/routes";

export const SignInPage: React.FC<SignInPageProps> = ({
  title = (
    <span className="font-light text-foreground tracking-tighter">Welcome</span>
  ),
  description = "Sign in to your account and pick up where you left off.",
  heroImageSrc,
  onSignIn,
  onGoogleSignIn,
  onForgotPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-geist">
      {/* Left column: sign-in form */}
      <section className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-6">
            <h1 className="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight">
              {title}
            </h1>
            <p className="animate-element animate-delay-200 text-muted-foreground">
              {description}
            </p>

            <div className="space-y-5">
              <div className="animate-element animate-delay-300">
                <label className="text-sm font-medium text-muted-foreground">
                  Email Address
                </label>
                <GlassInputWrapper>
                  <input
                    value={form.email}
                    type="email"
                    placeholder="Enter your email address"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                  />
                </GlassInputWrapper>
              </div>

              <div className="animate-element animate-delay-400">
                <label className="text-sm font-medium text-muted-foreground">
                  Password
                </label>
                <GlassInputWrapper>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      placeholder="Enter your password"
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                      ) : (
                        <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                      )}
                    </button>
                  </div>
                </GlassInputWrapper>
              </div>

              <div className="animate-element animate-delay-500 flex items-center justify-between text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="custom-checkbox"
                  />
                  <span className="text-foreground/90">Keep me signed in</span>
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onForgotPassword?.();
                  }}
                  className="hover:underline text-violet-400 transition-colors"
                >
                  Forgot password
                </a>
              </div>

              <button
                onClick={() => onSignIn?.({ ...form })}
                className="animate-element animate-delay-600 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Sign In
              </button>
            </div>

            <div className="animate-element animate-delay-700 relative flex items-center justify-center">
              <span className="w-full border-t border-border"></span>
              <span className="px-4 text-sm text-muted-foreground bg-background absolute">
                Or continue with
              </span>
            </div>

            <button
              onClick={onGoogleSignIn}
              className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-border rounded-2xl py-4 hover:bg-secondary transition-colors"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <p className="animate-element animate-delay-900 text-center text-sm text-muted-foreground">
              New to our platform?{" "}
              <Link
                to={ROUTER.AUTH.SIGN_UP}
                className="text-violet-400 hover:underline transition-colors"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </section>

      {heroImageSrc && (
        <section className="hidden lg:block flex-1 relative p-4">
          <div
            className="animate-slide-right animate-delay-300 absolute inset-4 rounded-3xl bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
          ></div>
        </section>
      )}
    </div>
  );
};
