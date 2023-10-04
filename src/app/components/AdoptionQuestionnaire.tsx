import React from "react";

import Question from "./Question";

const AdoptionQuestionnaire = () => {
    return (
        <div className="bg-white">
            <Question
                text="1. Mora em casa ou apartamento?"
                name="moradia"
                options={[
                    { id: "casa", value: "casa", text: "Casa" },
                    { id: "apartamento", value: "apartamento", text: "Apartamento" }
                ]}
            />
            <Question
                text="2. Onde o animal ficará?"
                name="espaco"
                options={[
                    { id: "areaInterna", value: "areaInterna", text: "Área interna" },
                    { id: "areaExternaComCobertura", value: "areaExternaComCobertura", text: "Área externa com cobertura" },
                    { id: "areaExternaSemCobertura", value: "areaExternaSemCobertura", text: "Área externa sem cobertura" }
                ]}
            />
            <Question
                text="3. Há proteções suficientes nas janelas e muros para garantir a integridade do animal?"
                name="protecao"
                options={[
                    { id: "simP3", value: "simP3", text: "Sim" },
                    { id: "naoP3", value: "naoP3", text: "Não" },
                    { id: "adequandoEspaco", value: "adequandoEspaco", text: "Estou adequando o espaço" }
                ]}
            />
            <Question
                text="4. Há outros animais na casa? Se sim, são vacinados?"
                name="vacinacao"
                options={[
                    { id: "simVacinados", value: "simVacinados", text: "Sim, e são todos vacinados" },
                    { id: "simParcial", value: "simParcial", text: "Sim, mas ainda não estão todos vacinados" },
                    { id: "naoP4", value: "naoP4", text: "Não" }
                ]}
            />
            <Question
                text="5. Como é o comportamento do(s) animal(is) atual(is) diante de outros?"
                name="comportamento"
                options={[
                    { id: "calmo", value: "calmo", text: "Calmo" },
                    { id: "agressivo", value: "agressivo", text: "Agressivo" },
                    { id: "acanhado", value: "acanhado", text: "Acanhado" }
                ]}
            />
            <Question
                text="6. Quanto tempo o animal ficaria sozinho em sua casa?"
                name="companhia"
                options={[
                    { id: "acompanhado", value: "acompanhado", text: "Há sempre alguém em casa, logo ele nunca ficaria sozinho" },
                    { id: "menosDeSeisHoras", value: "menosDeSeisHoras", text: "De 6 horas ou menos" },
                    { id: "maisDeSeisHoras", value: "maisDeSeisHoras", text: "De 6 horas ou mais" }
                ]}
            />
            <Question
                text="7. Sua renda lhe permite manter um animal com a alimentação e cuidados adequados?"
                name="cuidados"
                options={[
                    { id: "simP7", value: "simP7", text: "Sim" },
                    { id: "naoP7", value: "naoP7", text: "Não" },
                    { id: "naoCalculado", value: "naoCalculado", text: "Não calculei ainda os gastos possíveis" }
                ]}
            />
        </div>
    );
}

export default AdoptionQuestionnaire