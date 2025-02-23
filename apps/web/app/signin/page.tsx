"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { Session } from "@fcn/types"; // Ensure this matches your session type

export default function SignIn() {
  const {
    data: session,
    status,
  }: {
    data: Session;
    status: "loading" | "authenticated" | "unauthenticated";
  } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Redirect if user is already logged in
  useEffect(() => {
    if (status === "authenticated" && session) {
      // Check if the user is new and redirect accordingly
      if (session.user?.isNewUser) {
        router.push("/welcome");
      } else {
        router.push("/dashboard");
      }
    }
  }, [status, session, router]);

  // Handle Social Sign-In
  const handleSocialSignIn = async (provider: string) => {
    setError("");
    setIsSigningIn(true);
    try {
      const response = await signIn(provider, { callbackUrl: "/dashboard" });
      if (response?.error) {
        throw new Error(response.error);
      }
      // No need to check response.ok here; NextAuth.js handles the redirect internally
    } catch (err: any) {
      setError(
        `Error signing in with ${provider}: ${err.message || "Please try again."}`
      );
      console.error(`Sign-In Error (${provider}):`, err);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 pt-10 lg:pt-0">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full bg-blue-600 text-white flex flex-col justify-center items-start px-8 lg:px-16 py-12">
        <Image
          src="/logo.png"
          alt="Faithful Connects Logo"
          width={48}
          height={48}
          className="mb-4 lg:mb-6 rounded-full"
        />
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center lg:text-left">
          Login to your{" "}
          <span className="text-yellow-300">Faithful Connects</span> account.
        </h1>
        <p className="mt-4 text-sm lg:text-lg text-center lg:text-left">
          Simplify social. Amplify connections.
        </p>
        <div className="mt-6 bg-blue-500/20 p-4 rounded-lg">
          <p className="text-xs lg:text-sm text-center lg:text-left">
            🌟 <strong>Get started effortlessly:</strong> Sign in with Google,
            LinkedIn, Twitter, or Facebook.
          </p>
        </div>
        <p className="mt-10 text-xs lg:text-sm text-center lg:text-left">
          <a href="/privacy" className="underline text-blue-200">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="underline text-blue-200">
            Terms of Service
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full flex justify-center items-center bg-gray-50 px-6 lg:px-10 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Alerts */}
            {error && (
              <Alert variant="destructive" className="mb-4">
                {error}
              </Alert>
            )}

            {/* Google Sign-In */}
            <Button
              className="w-full mb-4 border border-gray-300 bg-white hover:bg-gray-100 text-gray-700"
              onClick={() => handleSocialSignIn("google")}
              disabled={isSigningIn}
            >
              <div className="flex items-center justify-center space-x-2">
                <FcGoogle className="text-xl" />
                <span>
                  {isSigningIn ? "Signing in..." : "Sign in with Google"}
                </span>
              </div>
            </Button>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-gray-500">
              By signing in, you agree to our{" "}
              <a href="/terms" className="underline text-blue-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline text-blue-600">
                Privacy Policy
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
