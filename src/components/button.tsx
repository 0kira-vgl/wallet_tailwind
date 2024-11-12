import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type ButtonProps = ComponentProps<"button"> & {
  title: string;
  variant?: "primary" | "secondary";
};

export function Button({
  title,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const button = tv({
    base: "h-10 transition duration-150 text-zinc-950 font-medium px-10 rounded-xl text-center items-center justify-center",
    variants: {
      color: {
        primary: "bg-buttonPrimary hover:bg-[#9E8ED4]",
        secondary: "bg-buttonSecundary hover:bg-[#E3BA63]",
      },
    },
  });

  return (
    <button
      {...props}
      className={twMerge(button({ color: variant }), className)}
    >
      {title}
    </button>
  );
}
