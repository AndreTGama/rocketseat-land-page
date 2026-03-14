import { Footer } from "../footer";
import { Header } from "../header";
import { Main } from "../main";
import { LayoutProps } from "@/types/LayoutProps";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
