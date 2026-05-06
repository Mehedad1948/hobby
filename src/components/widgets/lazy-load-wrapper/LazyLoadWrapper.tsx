'use client'

import React, { useRef, useState, useEffect, Fragment } from 'react';

type LazyLoadWrapperProps = {
    children: React.ReactNode;
    rootMargin?: string; // optional threshold margin
};

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
    children,
    rootMargin = '200px 0px', // preload before it's fully in view
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current || isVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin,
                threshold: 0.01,
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isVisible]);

    return <>
        <div ref={ref} />
        {isVisible ? children : null}
    </>
};

export default LazyLoadWrapper;
