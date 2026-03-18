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
        className={cn(`text-action-sm ${isCurrentPath ? "text-blue-200" : "text-gray-100 transition-colors hover:text-blue-200"}`)}
    >
        {children}
    </Link>
    );
};