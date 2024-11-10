import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type MenuLinkProps = {
    links: { href: string, label: string, iconPath?: string }[];
    closeMenu: () => void;
};

const MenuLinks: React.FC<MenuLinkProps> = ({ links, closeMenu }) => {
    return (
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-2 text-xs py-2 px-4 hover:bg-gray-100 border-b border-gray-100"
                >
                    {/* If there is an icon, display it */}
                    {link.iconPath && (
                        <Image src={link.iconPath} alt={link.label} width={100} height={100} className="w-5 h-5" />
                    )}
                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default MenuLinks;
