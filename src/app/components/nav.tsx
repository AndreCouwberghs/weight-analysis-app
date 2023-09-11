'use client'

import Link from "next/link";

export default function Nav() {
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