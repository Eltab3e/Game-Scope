//required
import theme from "@/theme";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <StyledComponentsRegistry>
                <ThemeProvider theme={theme}>
                    <SkeletonTheme
                        baseColor="#313131"
                        highlightColor="#525252"
                    >
                        {children}
                    </SkeletonTheme>
                </ThemeProvider>
            </StyledComponentsRegistry>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
