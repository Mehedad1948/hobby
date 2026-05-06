import { Button } from '@/components/ui';
import Container from '@/components/ui/container';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  return (
    <Container className='fixed z-30 top-4 md:top-8 left-1/2 -translate-x-1/2'>
      <header className="flex  w-full items-center justify-between bg-primary-dark opacity-90 backdrop-blur-xs px-6 py-3 rounded-[5rem] ">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Replace this div with your actual logo image */}
          <div className="w-8 h-8 bg-secondary-main mask mask-hexagon flex items-center justify-center">
            <span className="text-primary-darker text-xs font-bold">M</span>
          </div>
          <span className="text-white font-bold text-xl tracking-wide">
            GLDON
          </span>
        </Link>

        {/* Middle: Navigation */}
        <Navbar />

        {/* Right: Actions */}
        <div>
          <Button variant={'secondary'} className="">
            Sign in
          </Button>
        </div>

      </header>
    </Container>
  );
}
