import Link from "next/link";
import { Button } from "./button";
import { Car, HomeIcon } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className = "flex items-center h-16 justify-between">
        {/* Logo */}
        <div className="flex items-center py-2">
          <Link
            href="/"
            className="text-xl font-bold text-primary font-mono tracking-wider"
          >
            🚗 Auction
          </Link>
        </div>

        {/* Navbar components */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/cars">
              <Car className="w-4 h-4" />
              <span className="hidden lg:inline">Car</span>
            </Link>
          </Button>

          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/">
              <HomeIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Home</span>
            </Link>
          </Button>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
