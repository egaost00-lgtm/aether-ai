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
          ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-[0_10px_30px_rgba(249,115,22,0.25)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(249,115,22,0.35)]"
          : "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
      }`}
    >
      {children}
    </Link>
  );
}