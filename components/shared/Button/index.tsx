//required
import React, { ReactNode } from "react";
import styled from "styled-components";
//components
import Spinner from "../Spinner";

const StyledButton = styled.button<any>`
    width: ${(props) => (props.fullwidth ? "100%" : "default")};
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.base};
    border: ${(props) => {
        if (props.variant === "outline") {
            return `1px solid ${props.theme.colors.purple}`;
        } else {
            return "none";
        }
    }};
    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return props.theme.colors.purple;
            case "outline":
                return props.theme.colors.secondaryBg;
            default:
                return "transparent";
        }
    }};
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
    svg {
        color: ${(props) => {
            if (props.variant === "primary") {
                return props.theme.colors.white;
            } else {
                return props.theme.colors.purple;
            }
        }};
    }
    padding: ${(props) => {
        switch (props.padding) {
            case "primary":
                return "0 5rem";
            case "secondary":
                return "0 3rem";
            default:
                return "0 2rem";
        }
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    border-radius: 2rem;
    font-weight: 600;
    line-height: 140%;
    white-space: nowrap;
    cursor: pointer;
`;

const Button = ({
    children,
    variant,
    height,
    color,
    padding,
    postIcon,
    preIcon,
    type,
    loading,
    onClick,
    fullwidth,
    animate,
}: {
    children: ReactNode;
    variant?: "primary" | "outline";
    height?: "primary" | "secondary" | "tertiary";
    color?: string;
    padding?: "primary" | "secondary";
    postIcon?: any;
    preIcon?: any;
    type?: "button" | "submit" | "reset" | undefined;
    loading?: boolean;
    onClick?: () => void;
    fullwidth?: boolean;
    animate?: boolean;
}) => {
    const PostIcon = postIcon;
    const PreIcon = preIcon;

    const generateIconColor = (props: any) => {
        switch (props.variant) {
            case "primary":
                return props.theme.colors.white;
            case "outline":
                return props.theme.colors.pruple;
            default:
                return color;
        }
    };

    return (
        <StyledButton
            variant={variant}
            height={height}
            color={color}
            padding={padding}
            type={type}
            onClick={onClick}
            fullwidth={fullwidth}
            animate={animate ? true : undefined}
        >
            {PreIcon && <PreIcon color={generateIconColor} />}
            {loading ? <Spinner /> : children}
            {PostIcon && <PostIcon color={generateIconColor} />}
        </StyledButton>
    );
};

export default Button;
