import { Separator } from "@/components/ui/separator"

export function Projects() {
  return (
    <>
      <div className="bg-[#0F172A]" id="projects">
        <div className="ml-[100px]">
          <h1 className="pt-[96px] font-bold text-[35px] text-white">
            Projects
          </h1>
          <Separator className="w-[162px] h-[6px] bg-[#7477FF]" />
          <p className="pt-[49px] text-white w-[584px] text-[16px] pb-[217px]">
            Here you’ll find a selection of projects I’ve developed, reflecting
            my passion for innovative solutions in web design and technology.
            Each one represents an opportunity for learning and creativity.
          </p>
        </div>
      </div>
    </>
  )
}
