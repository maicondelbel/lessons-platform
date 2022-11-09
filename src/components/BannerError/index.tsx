import { Warning } from "phosphor-react";

export function BannerError() {
    return (
        <div className="flex-1 flex items-center justify-center mx-2">
            <div className="rounded flex items-stretch bg-gray-700 hover:bg-gray-600 transition-colors overflow-hidden">
                <div className="bg-red-700 p-4 sm:p-6 text-4xl flex items-center">
                    <Warning size={48} />
                </div>
                <div className="p-4 sm:p-6 leading-relaxed flex flex-col justify-center">
                    <strong className="text-lg sm:text-2xl">
                        Aula não encontrada!
                    </strong>
                    <p className="text-sm sm:text-lg text-gray-200">
                        Por gentileza, escolha uma outra aula na lista.
                    </p>
                </div>
            </div>
        </div>
    );
}
