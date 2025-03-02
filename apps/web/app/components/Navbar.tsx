"use client";
import { Button } from "@/components//ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 w-full bg-blue-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold">
              Faithful Connects
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {session ? (
                <>
                  <span className="text-white">{session.user?.name}</span>
                  <Button
                    variant="secondary"
                    className="bg-white text-royal-blue-600 hover:bg-gray-100"
                    onClick={() => signOut()}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link href="/signin">
                  <Button
                    variant="secondary"
                    className="bg-white text-royal-blue-600 hover:bg-gray-100"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {session ? (
                <>
                  <div className="text-white py-2 px-1">
                    {session.user?.name}
                  </div>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-royal-blue-600 hover:bg-gray-100"
                    onClick={() => signOut()}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link href="/signin">
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-royal-blue-600 hover:bg-gray-100"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
