import { LogoFooter } from "../FooterLogo";

export function Footer() {
    return (
        <footer className="text-xs md:text-sm mx-8 py-6 border-t gap-3 md:gap-8 border-t-gray-500 flex flex-col md:flex-row justify-between items-center text-gray-300">
            <LogoFooter />
            <span className="flex-1">
                Rocketseat - Todos os direitos reservados.
            </span>
            <a href="/#">Políticas de privacidade</a>
        </footer>
    );
}
