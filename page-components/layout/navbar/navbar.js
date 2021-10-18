import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      This is the Navbar.{' '}
      <Link href='/'>
        <a>Return Home</a>
      </Link>
    </header>
  );
};
