import { Separator } from "@/components/ui/separator"

export function AboutMe() {
    return (
      <>
        <div className="bg-[#1E293B]" id="aboutMe">
          <div className="ml-[100px]">
            <h1 className="pt-[96px] font-bold text-[35px] text-white">
              About-me
            </h1>
            <Separator className="w-[162px] h-[6px] bg-[#7477FF]" />
            <p className="pt-[49px] text-white w-[584px] text-[16px]">
              Tenho 19 anos, sou apaixonado por tecnologia e focado em
              desenvolvimento web. Concluí um curso técnico em Gestão
              Administrativa, que me deu uma base sólida em organização e gestão
              de projetos. Atualmente, estou dedicado a melhorar minhas
              habilidades como desenvolvedor web, buscando soluções inovadoras
              para desafios digitais. Estou sempre aprendendo e disposto a
              enfrentar novos desafios. Acredito que a tecnologia pode
              transformar o futuro e quero contribuir para isso. Estou à
              disposição para colaborar com empresas e profissionais que
              compartilham essa visão.
            </p>
            <h2 className="pt-[33px] font-bold text-white">
              Technologies I’ve worked with:
            </h2>
            <div className="pt-5 flex gap-4 pb-[130px]">
              <div className="text-[#fcba03] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
                <ion-icon name="logo-html5" size="large"></ion-icon>
              </div>
              <div className="text-[#4287f5] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
                <ion-icon name="logo-css3" size="large"></ion-icon>
              </div>
              <div className="text-[#F7E018] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
                <ion-icon name="logo-javascript" size="large"></ion-icon>
              </div>
              <div className="text-[#417E38] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
                <ion-icon name="logo-nodejs" size="large"></ion-icon>
              </div>
              <div className="text-[#61DBFB] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
                <ion-icon name="logo-react" size="large"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}