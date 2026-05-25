import number4 from './assets/landing/number4.png'
import photo from './assets/landing/photo.png'
import escultures from './assets/landing/escultures.png'
import logo from './assets/landing/logo.svg'
import ellipse1 from './assets/landing/ellipse1.svg'
import ellipse2 from './assets/landing/ellipse2.svg'
import arrowDown from './assets/landing/arrow-down.svg'
import lineAccent from './assets/landing/line.svg'
import logoFooter from './assets/landing/logo-footer.svg'
import instagram from './assets/landing/instagram.svg'
import facebook from './assets/landing/facebook.svg'
import linkedin from './assets/landing/linkedin.svg'
import twitter from './assets/landing/twitter.svg'

function App() {
  return (
    <div className="relative flex w-full min-w-[1728px] flex-col items-stretch bg-[#f4effd]">
      <section
        aria-label="Hero"
        className="relative h-[1117px] w-full shrink-0 overflow-hidden border-b border-solid border-[#292929] bg-[#f4effd]"
      >
        <header className="absolute left-0 top-0 z-10 flex w-full items-center justify-between border-b border-solid border-[#784dc7] px-[100px] pb-[30px] pt-[50px]">
          <div className="flex h-[27px] w-[73px] shrink-0 items-center gap-[5px]">
            <div className="relative h-[26.666px] w-[26.624px] shrink-0">
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={logo}
              />
            </div>
            <span className="font-poppins shrink-0 text-[20px] font-bold leading-none text-[#292929]">
              tian
            </span>
          </div>
          <nav
            aria-label="Primary"
            className="flex shrink-0 items-center justify-center gap-[30px] font-gotham text-[20px] leading-none tracking-[-1px] text-[#292929]"
          >
            <a className="shrink-0" href="#">
              Home
            </a>
            <a className="shrink-0" href="#">
              About Me
            </a>
            <a className="shrink-0" href="#">
              Skills
            </a>
          </nav>
          <a
            className="flex shrink-0 items-center justify-center rounded-[4px] bg-[#e9dffc] px-[24px] py-[12px] font-gotham text-[16px] capitalize leading-none tracking-[-0.8px] text-[#784dc7]"
            href="#"
          >
            Contact Me
          </a>
        </header>

        <div className="absolute left-[513px] top-[559px] -translate-y-1/2 whitespace-nowrap font-anton text-[200px] leading-none text-[#925ff0] opacity-90">
          <p className="mb-0 whitespace-pre">{`PRODUCT `}</p>
          <p className="whitespace-pre">DESIGNER</p>
        </div>

        <div className="absolute left-[-388.05px] top-[258.72px] flex h-[995.374px] w-[705.998px] items-center justify-center">
          <div className="flex-none -rotate-[7.65deg]">
            <div className="relative h-[925.303px] w-[587.996px]">
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={ellipse1}
              />
            </div>
          </div>
        </div>

        <div className="absolute left-[1375px] top-[258.72px] flex h-[995.374px] w-[705.998px] items-center justify-center">
          <div className="flex-none -scale-y-100 -rotate-[172.35deg]">
            <div className="relative h-[925.303px] w-[587.996px]">
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={ellipse2}
              />
            </div>
          </div>
        </div>

        <div className="absolute left-[1248px] top-[220px] h-[945px] w-[867px]">
          <img
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
            src={number4}
          />
        </div>

        <div className="absolute left-[-381px] top-[220px] flex h-[945px] w-[867px] items-center justify-center">
          <div className="relative flex-none -scale-y-100 rotate-180">
            <div className="relative h-[945px] w-[867px]">
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                src={number4}
              />
            </div>
          </div>
        </div>

        <div className="absolute left-[785px] top-[929px] size-[158px]">
          <img
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            src={arrowDown}
          />
        </div>
      </section>

      <section
        aria-label="About Me"
        className="relative flex w-full shrink-0 items-center justify-between px-[100px] pb-[120px] pt-[60px]"
      >
        <div className="flex shrink-0 flex-col items-start gap-[40px]">
          <div className="flex shrink-0 flex-col items-start gap-[30px]">
            <h2 className="shrink-0 font-anton text-[64px] uppercase leading-none text-[#292929]">
              ANDREA MENDEZ
            </h2>
            <div className="relative h-0 w-[66px] shrink-0">
              <img
                alt=""
                className="absolute inset-[-21px_0_0_0] block size-full max-w-none"
                src={lineAccent}
              />
            </div>
          </div>
          <div className="flex h-[270px] w-[625px] shrink-0 flex-col justify-center font-gotham text-[16px] capitalize leading-none tracking-[-0.8px] text-[#292929]">
            <p className="mb-0 whitespace-pre-wrap">
              Lorem ipsum dolor sit amet consectetur. Viverra accumsan imperdiet
              tincidunt nibh aliquam ornare. Viverra justo condimentum interdum
              faucibus ac auctor tristique. Nulla integer mattis diam nunc sed
              scelerisque ut etiam. Habitant feugiat in tristique pellentesque
              urna. Enim imperdiet purus faucibus ullamcorper vel id at. At
              dictumst arcu mattis porttitor massa bibendum ac. Urna vel
              consequat nulla a tellus consequat. Neque natoque enim sed nulla et
              dignissim pulvinar. Dictum risus ut aliquam neque iaculis id sit
              gravida ultrices.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="whitespace-pre-wrap">
              Lorem ipsum dolor sit amet consectetur. Viverra accumsan imperdiet
              tincidunt nibh aliquam ornare. Viverra justo condimentum interdum
              faucibus ac auctor tristique. Nulla integer mattis diam nunc sed
              scelerisque ut etiam. Habitant feugiat in tristique pellentesque
              urna. Enim imperdiet purus faucibus ullamcorper vel id at. At
              dictumst arcu mattis porttitor massa bibendum ac. Urna vel
              consequat nulla a tellus consequat. Neque natoque enim sed nulla et
              dignissim pulvinar. Dictum risus ut aliquam neque iaculis id sit
              gravida ultrices.
            </p>
          </div>
        </div>

        <div className="relative h-[757.748px] w-[563px] shrink-0 rounded-tl-[309.827px] rounded-tr-[309.827px] border-[3.541px] border-solid border-[#292929]">
          <div className="absolute left-1/2 top-[calc(50%-0.89px)] h-[711.717px] w-[531.132px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-tl-[265.566px] rounded-tr-[265.566px]">
            <img
              alt="Andrea Mendez"
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-tl-[265.566px] rounded-tr-[265.566px] object-cover"
              src={photo}
            />
            <div className="absolute left-[-106.23px] top-[444.78px] h-[329.023px] w-[233.292px] overflow-hidden rounded-tl-[120.669px] rounded-tr-[120.669px] border-[3.556px] border-solid border-[#292929]">
              <div className="absolute left-[9.96px] top-[15.5px] h-[290.904px] w-[206.265px] overflow-hidden rounded-tl-[106.689px] rounded-tr-[106.689px]">
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                  src={escultures}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative h-[130px] w-full shrink-0 overflow-hidden bg-[#292929]">
        <div className="absolute left-[100px] top-[56.5px] flex h-[27px] w-[73px] items-center gap-[5px]">
          <div className="relative h-[26.666px] w-[26.624px] shrink-0">
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={logoFooter}
            />
          </div>
          <span className="shrink-0 font-poppins text-[20px] font-bold leading-none text-white">
            tian
          </span>
        </div>
        <nav aria-label="Social" className="absolute inset-0">
          <a
            className="absolute left-[1333px] top-[45px] size-[40px]"
            href="#"
            aria-label="Instagram"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={instagram}
            />
          </a>
          <a
            className="absolute left-[1418px] top-[45px] size-[40px]"
            href="#"
            aria-label="Facebook"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={facebook}
            />
          </a>
          <a
            className="absolute left-[1503px] top-[45px] size-[40px]"
            href="#"
            aria-label="LinkedIn"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={linkedin}
            />
          </a>
          <a
            className="absolute left-[1588px] top-[45px] size-[40px]"
            href="#"
            aria-label="Twitter"
          >
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={twitter}
            />
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default App
