import { ReactNode } from 'react';

const Container = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={`container xl:max-w-7xl w-full mx-auto px-3 ${className}`}>{children}</div>
    );
};

export default Container;
