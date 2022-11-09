import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ContentPage } from "../../components/ContentPage";
import { Footer } from "../../components/Footer/index";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function Platform() {
    const { slug } = useParams<{ slug: string }>();

    const navigate = useNavigate();

    useEffect(() => {
        const checkSubscription = localStorage.getItem("_subscribed");
        if (checkSubscription !== "yes") {
            navigate(`/`);
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 mt-[75px] mr-0 xl:platform-xl">
                {slug ? (
                    <ContentPage videoSlug={slug} />
                ) : (
                    <ContentPage videoSlug="undefined" />
                )}
                <Sidebar />
            </main>
            <Footer />
        </div>
    );
}
