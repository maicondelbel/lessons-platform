import { ReactNode } from "react";

interface IButtonProps {
    link: string;
    solid: boolean;
    label: string;
    icon: ReactNode;
}

export function Button(props: IButtonProps) {
    const { link, solid, label, icon } = props;
    return (
        <a
            href={link}
            className={`${
                solid
                    ? "hover:bg-green-700 bg-green-500"
                    : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900 border"
            } p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors sm:w-1/2 md:w-auto`}
        >
            {icon}
            {label}
        </a>
    );
}
