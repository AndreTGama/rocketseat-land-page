import { Logo } from "../image/logo";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 py-8">
          <Logo />
          <nav className="flex flex-col md:flex-row gap-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Home</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Blog</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};