import { Separator } from "@/components/ui/separator"

export function App() {
  return (
    <>
      <div className="bg-[#0F172A]">
        <ul className="flex gap-[46px] ">
          <a href="#">
            <h1 className="text-[#7477FF] font-bold text-[20px] pt-[35px] ml-[115px] text-inter">
              gabriel
            </h1>
          </a>
          <a href="">
            <h1>About</h1>
          </a>
          <a href="">
            <h1>Projects</h1>
          </a>
          <a href="">
            <h1>Contact</h1>
          </a>
        </ul>
      </div>
      <div className="bg-[#0F172A] pb-[130px] pt-[100px]">
        <div className="ml-[100px]">
          <div className="text-[75px] leading-[100px]">
            <h1 className="text-white font-pacifico tracking-wide">
              Hi,
              <br />I am <span className="text-[#7477FF]">G</span>abriel,
              <br />
              Web developer
            </h1>
          </div>
          <h2 className="text-[16px] pt-[40px] text-[#CCCCCC] pb-[20px]">
            Frontend Developer, Profficienct in React & Node
          </h2>
          <button
            type="button"
            className="font-poppins bg-[#7477FF] w-[210px] h-[60px] rounded-[5px] text-center text-white"
          >
            See projects
          </button>
        </div>
      </div>
      <div className="bg-[#1E293B]">
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
            enfrentar novos desafios. Acredito que a tecnologia pode transformar
            o futuro e quero contribuir para isso. Estou à disposição para
            colaborar com empresas e profissionais que compartilham essa visão.
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
      <div className="bg-[#0F172A]">
        <div className="ml-[100px]">
          <h1 className="pt-[96px] font-bold text-[35px] text-white">
            Projects
          </h1>
          <Separator className="w-[162px] h-[6px] bg-[#7477FF]" />
          <p className="pt-[49px] text-white w-[584px] text-[16px]">
            Here you’ll find a selection of projects I’ve developed, reflecting
            my passion for innovative solutions in web design and technology.
            Each one represents an opportunity for learning and creativity.
          </p>
        </div>
      </div>
    </>
  )
}
