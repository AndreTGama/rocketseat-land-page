import { ReactNode } from "react";
import { LinkProps } from "next/link";

export type ActiveLinkProps = LinkProps & {
  children: ReactNode;
};