import { Logo } from "../image/logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 py-8">
          <Logo />
          <nav className="flex flex-col md:flex-row gap-4 text-blue-100">
            <a href="#" className="text-sm hover:text-blue-200">Home</a>
            <a href="#" className="text-sm hover:text-blue-200">Blog</a>
            <a href="#" className="text-sm hover:text-blue-200">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};