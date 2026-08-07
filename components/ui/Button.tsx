import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition duration-300 ${
        variant === "primary"
          ? "bg-yellow-500 text-black hover:scale-105"
          : "border border-white/20 text-white hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}