export default function ButtonConfirmar(props:ButtonProps) {
    {/*Definir como passar as funções de navegação, etc para o botão*/}
    return(
        <button className="bg-indigo-300 text-gray-950 rounded-md border-2 border-gray-700 p-2">
            {props.text}
        </button>
    )
}