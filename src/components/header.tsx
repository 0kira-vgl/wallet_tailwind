import Link from "next/link";
import { Button } from "./button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6">
      <Link href="/" className="text-3xl font-bold md:text-2xl">
        Wallet
      </Link>

      <div className="hidden space-x-8 md:block">
        <Link href="/" className="font-medium hover:underline">
          Sign up
        </Link>
        <Button title="Log in" />
      </div>
    </header>
  );
}
