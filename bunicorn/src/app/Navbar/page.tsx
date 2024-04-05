import Link from 'next/link';
import Image from 'next/image';
import logo from '..//..//..//public/images/logoWhite.png'


export default function Page() {
  return (
    <nav className='p-1'>
        <div className='flex justify-around'>
            <div className='pr-[150px]'>
                <Link  href="/">
                <Image src={logo} alt="Example" width={130} height={100} />
                </Link>
                
            </div>
            <div className='flex justify-around items-center gap-[90px]'>
                <ul className='flex justify-center items-start gap-10'>
                    <li>
                    <Link href="/">Home</Link>
                    </li>
                    <li>
                    <Link href="/about">About</Link>
                    </li>
                    <li>
                    <Link href="/services">Services</Link>
                    </li>
                    <li>
                    <Link href="/feature">Feature</Link>
                    </li>
                    <li>
                    <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                    <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>

                <button className='p-3 pl-5 pr-5 bg-sky-500 text-white rounded-l-lg'>
                    <Link href="/signup">Signup</Link>
                </button>
            </div>
        </div>
    </nav>
  );
}
