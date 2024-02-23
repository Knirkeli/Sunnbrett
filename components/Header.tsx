import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={`${styles.header} mb-8 border-b relative`}>
        <div className='flex items-center justify-start max-w-full px-4 sm:px-6 lg:max-w-7xl pl-15'>
          <div>
          <Link href="/">
              <Image className="w-40 h-40 md:w-64 md:h-64" src="/tempmedia/logo.png" alt="Sunnbrett" width={200} height={200} />
          </Link>
          </div>
          <div className='ml-9'>
              <h1 className="text-white text-3xl">Spel for alle</h1>
          </div>
        </div>
        <div className='absolute md:bottom-5 bottom-1 right-0 flex items-end justify-end mx-auto max-w-2xl px-40 py-5 sm:px-6 lg:max-w-7xl'>
          <Link href="/om-oss">
              <p className="text-white mr-5">Om oss</p>
          </Link>
          <Link href="/spel">
              <p className="text-white mr-5">Våre spel</p>
          </Link>
          <Link href="/nyhende">
              <p className="text-white mr-5">Nyhende</p>
          </Link>
          <Link href="/bidragsytare">
              <p className="text-white mr-5">Bidragsytare</p>
          </Link>
        </div>
    </header>
  );
}