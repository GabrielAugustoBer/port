import { Separator } from "@/components/ui/separator"

export function ContactMe() {
    return (
      <>
        <div className="pt-[85px] bg-[#1E293B] grid justify-center pb-[135px]">
          <h1 className="font-bold text-[35px] text-white text-center">
            Contact Me
          </h1>
          <div className="flex justify-center">
            <Separator className="w-[198px] h-[6px] bg-[#7477FF]" />
          </div>
          <p className="w-[568px] pt-[24px] text-center text-white">
            Obrigado por visitar meu portfólio! Se você tem perguntas,
            sugestões, ou gostaria de discutir um projeto, sinta-se à vontade
            para entrar em contato. Abaixo, você encontrará meus contatos. Será
            um prazer trocar ideias com você!
          </p>
          <div className="flex justify-center">
            <h2 className="pt-[40px] text-white">
              <span className="font-bold pr-[22px]">Email:</span>
              gabriel.linobernardes@gmail.com
            </h2>
          </div>
          <p className="w-[568px] pt-[24px] text-center text-gray-300 italic">
            “A perfeição não é alcançada quando já não há mais nada para
            adicionar, mas quando já não há mais nada que se retirar.” <br />
            <span className="font-bold not-italic text-white">
              Antoine de Saint-Exupéry.
            </span>
          </p>
        </div>
      </>
    )
}