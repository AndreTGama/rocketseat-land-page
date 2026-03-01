"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Image src="/Brand-Logo.svg" alt="Logo" width={64} height={64} className="mr-2" />
          
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium ${
                pathname === "/" ? "text-blue-500" : "text-gray-300 transition-colors hover:text-blue-500"
              }`}
            >
              Início
            </Link>

            <Link
              href="/blog"
              className={`text-sm font-medium ${
                pathname.startsWith("/blog") ? "text-blue-500" : "text-gray-300 transition-colors hover:text-blue-500"
              }`}
            >
              Blog
            </Link>

            <Button variant="secondary" size="sm">
              Começar
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};