import React from 'react';
import styles from '@/modules/section.module.css';

interface SectionProps {
    classname?: string
    customStyles?: string
    children: React.ReactNode
    bgClass?: string
    id?: string
}

const Section: React.FC<SectionProps> = ({
    children,
    classname,
    customStyles,
    bgClass,
    id
}) => {
    return (
        <section
            id={id}
            className={`${styles.section} ${customStyles} ${bgClass &&
                styles[bgClass]} w-full px-2 ${classname && classname}`}
        >
            {children}
        </section>
    )
}

export default Section;
