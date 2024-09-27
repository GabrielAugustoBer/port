export function NavBar() {
  return (
    <>
      {/* Container do Navbar, fixo no topo da página */}
      <div className="bg-[#0F172A] fixed top-0 left-0 w-full z-50">
        <div className="flex justify-center scroll-smooth">
          {/* Lista de navegação */}
          <ul className="pt-[20px] pb-[20px] flex gap-[46px] text-white">
            {/* Item de navegação para About */}
            <li>
              <a href="#aboutMe">About</a>
            </li>
            {/* Item de navegação para Projects */}
            <li>
              <a href="#projects">Projects</a>
            </li>
            {/* Item de navegação para Contact */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
