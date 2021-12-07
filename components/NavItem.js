import Link from 'next/link'

export default function NavItem({ href, isActive, children }) {
    return (
        <li>
            <Link
                href={href}
                className={`block px-4 py-2 rounded-md ${isActive ? 'bg-amber-100 text-amber-700' : ''}`}
            >
            {children}
            </Link>
        </li>
    )
}