import classNames from "classnames";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR/index";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

import "./styles.css";

interface ILessonsProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: "live" | "class";
    onClickLesson: (state: boolean) => void;
}

export function Lessons(props: ILessonsProps) {
    const { title, slug, availableAt, type, onClickLesson } = props;

    const params = useParams<{ slug: string }>();

    const isActiveLesson = params.slug === slug;

    const isLessonAvailable = isPast(availableAt);

    const availableAtFormatted = format(
        availableAt,
        "EEEE' • 'd' de 'MMMM' • 'HH'h'mm",
        { locale: ptBR }
    );

    return (
        <Link
            onClick={() => onClickLesson(false)}
            to={`${import.meta.env.VITE_BASE_URL}/lesson/${slug}`}
            className={classNames("card-lesson", {
                active: isActiveLesson,
            })}
        >
            <span className="available-at">{availableAtFormatted}</span>
            <div>
                <header>
                    {isLessonAvailable ? (
                        <span className="available">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="soon">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )}
                    <span className="lesson-type">
                        {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>
                <strong className="lesson-title">{title}</strong>
            </div>
        </Link>
    );
}
