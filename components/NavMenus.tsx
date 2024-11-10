// MenuLinks.js
import React from 'react';
import Link from 'next/link';

type LinkItem = {
    href: string;
    label: string;
};

type MenuLinkProps = {
    links: LinkItem[];
    closeMenu: () => void;
};

const MenuLinks: React.FC<MenuLinkProps> = ({ links, closeMenu }) => {
    return (
        <div className="ml-4 space-y-1">
            {links.map((link: LinkItem, index: number) => (
                <Link
                    key={index}
                    href={link.href}
                    onClick={closeMenu}
                    className="border-b text-xs block px-4 py-2 hover:bg-gray-100"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default MenuLinks;
