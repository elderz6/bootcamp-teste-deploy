import ButtonConfirmar from "../Buttons/ButtonConfirmar";
import { Logo } from "../svgs";

export default function Footer() {

    return(
        <footer className="bg-main fixed bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-100 sm:text-center">
            <Logo width="150px" height="50px" />
        </span>
        <div className="text-gray-100 flex flex-col">
            <span>
                Quero Ajudar uma ONG
            </span>
            <ButtonConfirmar text="Ajude!" />
        </div>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 sm:mt-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Sobre</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contato</a>
            </li>
        </ul>
    </footer>
    )
}