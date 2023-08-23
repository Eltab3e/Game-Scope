"use client";
import Theme from "@/theme";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
    return <Theme>{children}</Theme>;
};

export default Providers;
