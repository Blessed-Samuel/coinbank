import React from 'react';
import styles from '@/modules/section.module.css';

interface SectionProps {
    classname?: string
    children: React.ReactNode
    bgClass?: string
    id?: string
}

const Section: React.FC<SectionProps> = ({
    children,
    classname,
    bgClass,
    id
}) => {
    return (
        <section
            id={id}
            className={`${styles.section} ${bgClass &&
                styles[bgClass]} w-full px-2 ${classname && classname}`}
        >
            {children}
        </section>
    )
}

export default Section;
