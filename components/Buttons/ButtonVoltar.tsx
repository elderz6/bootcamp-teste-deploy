import {AiOutlineArrowLeft} from "react-icons/ai"

export default function ButtonVoltar() {
    return(
        <button className="bg-white-100 text-gray-950 rounded-full border-2 border-gray-700 p-3 flex flex-wrap items-center justify-between">
            <span><AiOutlineArrowLeft/></span>
            <span>Voltar</span>
        </button>
    )
}
  