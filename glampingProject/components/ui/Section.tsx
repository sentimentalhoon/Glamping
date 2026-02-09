
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    background?: "default" | "white" | "muted" | "primary" | "image";
    container?: boolean;
}

export function Section({ 
    children, 
    className = "", 
    background = "default", // default is transparent/bg-background
    container = true,
    ...props 
}: SectionProps) {
    const bgStyles = {
        default: "bg-background",
        white: "bg-surface",
        muted: "bg-muted",
        primary: "bg-primary text-primary-foreground",
        image: "relative text-white", // For hero sections (forced white)
    };

    return (
        <section 
            className={`section-padding ${bgStyles[background]} ${className}`}
            {...props}
        >
            {container ? (
                <div className="container-width">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export function SectionHeader({ 
    title, 
    subtitle, 
    description, 
    align = "center",
    className = "" 
}: SectionHeaderProps) {
    const alignStyles = {
        left: "text-left",
        center: "text-center mx-auto",
        right: "text-right ml-auto",
    };

    return (
        <div className={`mb-12 max-w-3xl ${alignStyles[align]} ${className}`}>
            {subtitle && (
                <span className="section-subheading block mb-3">
                    {subtitle}
                </span>
            )}
            <h2 className="section-heading mb-6">
                {title}
            </h2>
            {description && (
                <div className={`w-20 h-1 bg-secondary mb-6 ${align === "center" ? "mx-auto" : ""}`} />
            )}
            {description && (
                <p className="text-lg text-foreground/80 leading-relaxed font-light break-keep">
                    {description}
                </p>
            )}
        </div>
    );
}
