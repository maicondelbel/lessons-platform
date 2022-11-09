/* eslint-disable react/jsx-props-no-spreading */
import { DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

import "@vime/core/themes/default.css";

import { DefaultUi, Player, Youtube } from "@vime/react";

import { useGetLessonBySlugQuery } from "../../graphql/generated";
import { BannerError } from "../BannerError/index";
import { Button } from "../Button";
import { CardRole } from "../CardRole";
import { CardWithIcon } from "../CardWithIcon";
import { Loader } from "../Loader";

interface IVideoProps {
    videoSlug: string | undefined;
}

export function ContentPage(props: IVideoProps) {
    const { videoSlug } = props;
    const { data, loading } = useGetLessonBySlugQuery({
        variables: { slug: videoSlug },
    });

    if (loading) {
        return <Loader />;
    }
    if (!data?.lesson) {
        return <BannerError />;
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 pb-16 md:pb-20 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-6 md:gap-16 flex-col md:flex-row justify-between">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data?.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>
                        {data.lesson.teacher && (
                            <CardRole
                                avatarURl={data.lesson.teacher.avatarURL}
                                name={data.lesson.teacher.name}
                                bio={data.lesson.teacher.bio}
                            />
                        )}
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col justify-evenly gap-4 w-full md:w-auto">
                        <Button
                            link="#"
                            solid
                            icon={<DiscordLogo size={24} />}
                            label="Comunidade do Discord"
                        />
                        {data.lesson.challenge && (
                            <Button
                                link={data.lesson.challenge.url}
                                solid={false}
                                icon={<Lightning size={24} />}
                                label="Acesse o desafio"
                            />
                        )}
                    </div>
                    <div />
                </div>
                <div className="gap-8 mt-10 md:mt-20 flex flex-wrap md:flex-nowrap">
                    <CardWithIcon
                        link="#"
                        icon={<FileArrowDown />}
                        title="Material Complementar"
                        subtitle="Acesse o material complementar para acelerar o
                        seu desenvolvimento"
                    />
                    <CardWithIcon
                        link="#"
                        icon={<Image />}
                        title="Wallpapers Exclusivos"
                        subtitle="Baixe wallpapers exclusivos do Ignite Lab e
                                personalize a sua máquina"
                    />
                </div>
                <div />
            </div>
        </div>
    );
}
