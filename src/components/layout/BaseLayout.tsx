import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BaseLayoutProps {
    children: ReactNode;
    className?: string;
}

export function BaseLayout({ children, className }: BaseLayoutProps) {
    return (
        <div className={cn("min-h-screen bg-white", className)}>
            <main className="relative flex flex-col flex-1">{children}</main>
        </div>
    );
}
