import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

type ButtonLinkProps = ButtonBaseProps & {
  "aria-label"?: string;
  href: string;
  rel?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-brand-yellow bg-brand-yellow text-brand-black hover:border-white hover:bg-white",
  secondary:
    "border-white/30 bg-transparent text-brand-white hover:border-brand-yellow hover:text-brand-yellow",
  ghost: "border-transparent bg-transparent text-neutral-300 hover:text-brand-yellow",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-6 py-3 text-sm",
};

export function buttonClassName({
  className,
  size = "md",
  variant = "primary",
}: Pick<ButtonBaseProps, "className" | "size" | "variant"> = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-md border font-black transition duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-brand-yellow",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );
}

export function Button({
  className,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClassName({ className, size, variant })} type={type} {...props} />
  );
}

export function ButtonLink({
  children,
  className,
  href,
  rel,
  size = "md",
  target,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const safeRel = target === "_blank" ? (rel ?? "noreferrer") : rel;
  const classNames = buttonClassName({ className, size, variant });

  if (isExternal) {
    return (
      <a className={classNames} href={href} rel={safeRel} target={target} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href} {...props}>
      {children}
    </Link>
  );
}
