import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="flex justify-center mb-5 rounded-full shadow-xl ">
        <Image
          className="rounded-full object-cover object-center  border-2 border-white"
          src="/workRick.jpg"
          alt="Ricardo Muchacho Image"
          width="200"
          height="200"
        ></Image>
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
