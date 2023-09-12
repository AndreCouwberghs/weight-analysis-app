'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();

    return <ul>
        <li>
            <Link className={pathname === "/" ? "active-menu-link" : ""} href="/">Home</Link>
        </li>
        <li>
            <Link className={pathname === "/about" ? "active-menu-link" : ""} href="/about">About</Link>
        </li>
        <li>
            <Link className={pathname === "/credentials" ? "active-menu-link" : ""} href="/credentials">Credentials</Link>
        </li>
    </ul>;
}