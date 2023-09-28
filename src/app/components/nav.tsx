'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();

    return <section className="top-nav">
        <div>
            WAA
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
        </label>
        <ul className="menu">
            <li>
                <Link className={pathname === "/" ? "active-menu-link" : ""} href="/">Home</Link>
            </li>
            <li>
                <Link className={pathname === "/about" ? "active-menu-link" : ""} href="/about">About</Link>
            </li>
            <li>
                <Link className={pathname === "/credentials" ? "active-menu-link" : ""} href="/credentials">Credentials</Link>
            </li>
        </ul>
    </section>;
}