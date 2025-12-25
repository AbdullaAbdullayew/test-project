import React from "react"

type ButtonProps = {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "danger"
    size?: "sm" | "md" | "lg"
    disabled?: boolean
    onClick?: () => void
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    onClick,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant} btn-${size} ${disabled ? "btn-disabled" : ""
                }`}
        >
            {children}
        </button>
    )
}