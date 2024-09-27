import copy from "@/assets/copyright.svg"

export function Footer() {
    return (
      <>
        <div className="bg-[#0F172A]">
          <div className="pt-[40px] pb-[40px] ml-[50px] flex">
            <div className="flex gap-[4px]">
              <img src={copy} alt="copyright" />
              <h2 className="text-white">
                2024 Gabriel Augusto all right reserved
              </h2>
            </div>
          </div>
        </div>
      </>
    )
}