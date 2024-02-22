import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={`${styles.header} mb-8 border-b`}>
        <Link href="/">
            <Image src="/tempmedia/logo.png" alt="Sunnbrett" width={200} height={200} />
        </Link>
        <div className='flex items-center justify-between mx-auto max-w-2xl -px-4 sm:px-6 lg:max-w-7xl'>
            <h1 className="text-white text-3xl">Spel for alle</h1>
        </div>
    </header>
  );
}