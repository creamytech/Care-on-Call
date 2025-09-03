"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-brand text-white shadow-md hover:bg-brand-700 hover:shadow-lg",
        destructive: "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg",
        outline: "border-2 border-brand bg-transparent text-brand shadow-sm hover:bg-brand hover:text-white hover:shadow-md",
        secondary: "bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300 hover:shadow-md",
        ghost: "hover:bg-brand/10 hover:text-brand text-gray-700",
        link: "text-brand underline-offset-4 hover:underline hover:text-brand-700",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-4 py-1 text-xs font-medium",
        lg: "h-12 rounded-lg px-8 py-3 text-base font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }