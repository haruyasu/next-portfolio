import Link from "next/link";

function Navigation() {
  return (
    <header className="container max-w-screen-xl mx-auto flex py-5 flex-row items-center px-5">
      <Link href="/">
        <a>
          <img
            src="https://placehold.jp/80x80.png"
            alt="me"
            width={80}
            height={80}
          />
        </a>
      </Link>
      <nav className="ml-auto">
        <Link href="/about">
          <a className="mr-5">About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
}

export default Navigation;
