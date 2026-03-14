import { LogoProps } from "@/types/LogoProps";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({
  href = "/",
  width = 116,
  height = 32,
  title = "Home",
}: LogoProps) => {
  return (
    <Link href={href} title={title}>
      <Image
        src="/Brand-Logo.svg"
        alt="Rocketseat Logo"
        width={width}
        height={height}
      />
    </Link>
  );
};
