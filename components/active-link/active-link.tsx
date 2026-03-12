import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ActiveLinkProps } from "@/types/ActiveLinkProps";

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
    const pathname = usePathname();
    const isCurrentPath = pathname === href || pathname === rest.as || (typeof rest.as === "string" && pathname.startsWith(rest.as));

    return (
    <Link
        href={href}
        className={cn(`text-sm font-medium ${isCurrentPath ? "text-blue-500" : "text-gray-300 transition-colors hover:text-blue-500"}`)}
    >
        {children}
    </Link>
    );
};