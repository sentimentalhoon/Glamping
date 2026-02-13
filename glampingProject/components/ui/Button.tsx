
import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    external?: boolean;
}

export function Button({ 
    children, 
    className, 
    variant = "primary", 
    size = "md", 
    href,
    external,
    ...props 
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-md hover:shadow-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-background hover:text-primary hover:scale-105 shadow-md hover:shadow-lg",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "text-primary hover:bg-muted",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`;

    if (href) {
        if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
            return (
                <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button 
            className={combinedClasses}
            {...props}
        >
            {children}
        </button>
    );
}
