import React, { ReactNode } from "react";
import styled from "styled-components";
import Spinner from "../Spinner";

const StyledButton = styled.button<any>`
    width: ${(props) => (props.fullwidth ? "100%" : "default")};
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.base};
    border: ${(props) => {
        if (props.variant === "outline") {
            return `1px solid ${props.theme.colors.cta}`;
        } else {
            return "none";
        }
    }};
    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return props.theme.colors.cta;
            case "outline":
                return props.theme.colors.backgroundPrimary;
            default:
                return "transparent";
        }
    }};
    height: ${(props) => {
        switch (props.height) {
            case "primary":
                return "72px";
            case "secondary":
                return "60px";
            case "tertiary":
                return "46px";
            default:
                return;
        }
    }};
    svg {
        color: ${(props) => {
            if (props.variant === "primary") {
                return props.theme.colors.text;
            } else {
                return props.theme.colors.cta;
            }
        }};
    }
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 12px;
    padding: 12px 20px;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
`;

const Button = ({
    children,
    variant,
    height,
    color,
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
    postIcon?: any;
    preIcon?: any;
    type?: "button" | "submit" | "reset" | undefined;
    loading?: boolean;
    onClick?: () => void;
    fullwidth?: any;
    animate?: boolean;
}) => {
    const PostIcon = postIcon;
    const PreIcon = preIcon;

    const generateIconColor = (props: any) => {
        switch (props.variant) {
            case "primary":
                return props.theme.colors.text;
            case "outline":
                return props.theme.colors.cta;
            default:
                return color;
        }
    };

    return (
        <StyledButton
            variant={variant}
            height={height}
            color={color}
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
