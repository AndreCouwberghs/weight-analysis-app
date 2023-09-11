'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();

    return <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/credentials">Credentials</Link>
        </li>
    </ul>;
}