import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="relative flex-1 pt-24">
        <div className="mx-auto w-full max-w-4xl px-6">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
