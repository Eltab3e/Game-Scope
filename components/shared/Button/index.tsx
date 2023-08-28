//required
import React, { ReactNode } from "react";
import styled from "styled-components";
//components
import Spinner from "../Spinner";

interface ButtonProps {
    children: ReactNode;
    color?: string;
    preIcon?: React.ElementType;
    postIcon?: React.ElementType;
    loading?: boolean;
    fullwidth?: boolean;
    onClick?: () => void;
    variant?: "primary" | "outline";
    type?: "button" | "submit" | "reset";
    height?: "primary" | "secondary" | "tertiary";
}

const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
    gap: 1.2rem;
    font-weight: 600;
    line-height: 140%;
    border-radius: 2rem;

    font-size: ${(props) => props.theme.fontSizes.base};
    width: ${(props) => (props.fullwidth ? "100%" : "auto")};

    height: ${(props) => {
        switch (props.height) {
            case "primary":
                return "7.2rem";
            case "secondary":
                return "6rem";
            case "tertiary":
                return "4.6rem";
            default:
                return;
        }
    }};

    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return props.theme.colors.purple;
            case "outline":
                return props.theme.colors.secondaryBg;
            default:
                return;
        }
    }};

    color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return props.theme.colors.white;
            case "outline":
                return props.theme.colors.purple;
            default:
                return;
        }
    }};

    border: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "none";
            case "outline":
                return `1px solid ${props.theme.colors.purple}`;
            default:
                return;
        }
    }};
`;

const Button: React.FC<ButtonProps> = ({
    children,
    color,
    preIcon: PreIcon,
    postIcon: PostIcon,
    loading,
    fullwidth,
    onClick,
    variant,
    type,
    height,
}: ButtonProps) => {
    return (
        <StyledButton
            color={color}
            fullwidth={fullwidth}
            onClick={onClick}
            variant={variant}
            type={type}
            height={height}
        >
            {PreIcon && <PreIcon />}
            {loading ? <Spinner /> : children}
            {PostIcon && <PostIcon />}
        </StyledButton>
    );
};

export default Button;
