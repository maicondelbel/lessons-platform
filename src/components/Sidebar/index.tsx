/* eslint-disable react/jsx-props-no-spreading */
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";

import { useGetLessonsQuery } from "../../graphql/generated";
import { Lessons } from "../Lessons";

export function Sidebar() {
    const { data } = useGetLessonsQuery();

    const sidebarCollapsed = localStorage.getItem("_sidebar-collapsed");

    const [isExpanded, setIsExpanded] = useState(!sidebarCollapsed);

    const handleToggler = () => {
        if (isExpanded) {
            setIsExpanded(false);
            localStorage.setItem("_sidebar-collapsed", "true");
            return;
        }
        setIsExpanded(true);
        localStorage.removeItem("_sidebar-collapsed");
    };

    return (
        <aside
            className={`${
                isExpanded ? "sidebar" : "sidebar !translate-x-full"
            } sm:w-[348px] bg-gray-700 px-4 py-6 border-l border-gray-600 fixed xl:!translate-x-0`}
        >
            <div
                className="text-green-500 cursor-pointer w-[50px] h-[50px] flex items-center justify-center top-[0] left-[-50px] bg-gray-700 absolute border-b border-f border-gray-600 xl:hidden"
                onClick={handleToggler}
                aria-hidden="true"
            >
                {isExpanded ? (
                    <CaretRight size={30} />
                ) : (
                    <CaretLeft size={30} />
                )}
            </div>
            <header>
                <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block text-center">
                    Cronograma de Aulas
                </span>
            </header>
            <div className="flex flex-col gap-8 lessons last:pb-8">
                {data?.lessons.map((lesson) => {
                    return (
                        <Lessons
                            onClickLesson={setIsExpanded}
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    );
                })}
            </div>
        </aside>
    );
}
