import { CaretRight } from "phosphor-react";
import { ReactNode } from "react";

interface ICardWithIconProps {
    link: string;
    icon: ReactNode;
    title: string;
    subtitle: string;
}

export function CardWithIcon(props: ICardWithIconProps) {
    const { icon, link, subtitle, title } = props;
    return (
        <a
            className="w-full bg-gray-700 rounded overflow-hidden flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors"
            href={link}
        >
            <div className="bg-green-700 h-full text-4xl p-3 sm:p-6 flex items-center">
                {icon}
            </div>

            <div className="py-6 leading-relaxed flex-1">
                <strong className="text-xl sm:text-2xl">{title}</strong>

                <p className="text-sm mt-2 text-gray-200">{subtitle}</p>
            </div>

            <div className="h-full p-3 sm:p-6 pl-0 flex items-center">
                <CaretRight size={24} />
            </div>
        </a>
    );
}
