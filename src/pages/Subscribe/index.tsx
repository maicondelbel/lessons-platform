/* eslint-disable no-alert */
/* eslint-disable no-console */
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import {
    useCreateSubscriberMutation,
    useGetFirstLessonQuery,
} from "../../graphql/generated";

export function Subscribe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();
    const { data } = useGetFirstLessonQuery();

    useEffect(() => {
        const checkSubscription = localStorage.getItem("_subscribed");
        if (checkSubscription === "yes") {
            navigate(`${import.meta.env.VITE_BASE_URL}/lesson/`);
        }
    }, []);

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        try {
            await createSubscriber({
                variables: {
                    name,
                    email,
                },
            });
            localStorage.setItem("_subscribed", "yes");
            navigate(
                `${import.meta.env.VITE_BASE_URL}/lesson/${
                    data?.lessons[0].slug
                }`
            );
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao realizar sua inscrição!");
        }
    }

    return (
        <>
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <div className="w-full max-w-[1100px] bg-react_logo bg-no-repeat bg-top">
                    <div className="px-5 flex flex-col md:flex-row items-center justify-between gap-5 mt-20 mx-auto">
                        <div className="max-w-[625px]">
                            <Logo />
                            <h1 className="mt-8 text-[2.5rem] leading-tight">
                                Construa uma
                                <strong className="text-blue-500">
                                    {` `}
                                    aplicação completa,
                                    {` `}
                                </strong>
                                do zero, com
                                <strong className="text-blue-500">
                                    {" "}
                                    React
                                </strong>
                            </h1>
                            <p className="mt-6 mb-8 text-gray-200 leading-relaxed">
                                Em apenas uma semana você vai dominar na prática
                                uma das tecnologias mais utilizadas e com alta
                                demanda para acessar as melhores oportunidades
                                do mercado.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-700 border border-gray-500 rounded md:max-w-[390px] w-full">
                            <strong className="text-2xl mb-6 block">
                                Inscreva-se gratuitamente
                            </strong>
                            <form
                                onSubmit={handleSubscribe}
                                className="flex flex-col gap-2 w-full"
                            >
                                <input
                                    className="bg-gray-900 rounded px-5 h-14"
                                    type="text"
                                    placeholder="Seu nome completo"
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                />
                                <input
                                    className="bg-gray-900 rounded px-5 h-14"
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                <button
                                    disabled={!(name && email) || loading}
                                    type="submit"
                                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                                >
                                    Garantir minha vaga
                                </button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/assets/images/code-mockup.png"
                            className="mt-10"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
