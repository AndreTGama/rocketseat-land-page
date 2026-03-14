import { LogoProps } from "@/types/LogoProps";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({href, width, height} : LogoProps) => {
  return (
    <Link href={href || "/"}>
      <Image
        src="/Brand-Logo.svg"
        alt="Logo"
        width={width || 116}
        height={height || 32}
        className="h-8 w-auto"
      />
    </Link>
  );
};
