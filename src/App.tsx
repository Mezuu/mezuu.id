import { Header } from "./layouts/Header";
import { SiC, SiMui, SiNestjs } from "react-icons/si";
import { RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReact } from "react-icons/tb";
import { FaGithub, FaLink } from "react-icons/fa";

export function App() {
  return (
    <>
      <div className="flex justify-center bg-slate-300">
        <Header />
      </div>

      <div className="text-slate-600 bg-slate-300 flex justify-center">
        <div className="md:w-4/5 lg:w-3/5 w-11/12">
          <div className="flex justify-center items-center gap-8 flex-col md:flex-row">
            <div className="flex flex-col items-center">
              <p className="drop-shadow-lg text-4xl basis-1/3 text-center font-bold text-zinc-700">
                A Fullstack Web Developer 👨‍💻 that also happens to be an Artist
                🎨
              </p>
              <br />
              <span className="text-xl basis-1/3 text-slate-600">
                — Creating things nobody asked for 🤷
              </span>
              <span className="text-xl basis-1/3 text-slate-600">
                — Love coffee so much ☕️
              </span>
            </div>
            <img src="5png.png" alt="" className="w-1/2 md:w-1/3" />
          </div>

          <div className="rounded-t-3xl bg-slate-50 p-8 shadow-xl drop-shadow-2xl pb-16">
            <h2 className="text-2xl font-bold text-zinc-700 mb-2">
              About Me 👋
            </h2>
            <p className="mb-8">
              You may call me Mezuu, but don&apos;t be confused with the furry
              you see above, He&apos;s one of my OC, Archy. I&apos;m currently
              working full-time for the government. I do silly things in my
              spare time such as playing Valorant, Honkai: Star Rail, Minecraft,
              scrolling social media, etc. Oh and I do arts too, I want to
              become a game developer someday, however my journey is still far
              ahead.
            </p>

            <h2 className="text-2xl font-bold text-zinc-700">Tools I Use 🛠️</h2>
            <div className="text-lg md:pl-8 mt-2 md:columns-2 break-before-avoid-page">
              <div className="break-inside-avoid-column pt-4">
                <h4>Illustration</h4>
                <div className="flex gap-2 mt-2">
                  <Icon label="Clip Studio Paint">
                    <img src="csp.png" alt="Clip Studio Paint" />
                  </Icon>
                </div>

                <br />
                <h4>Programming Languages</h4>
                <div className="flex gap-2 mt-2">
                  <Icon label="Python">
                    <img src="python.svg" alt="Python" />
                  </Icon>
                  <Icon label="JavaScript">
                    <img src="javascript.svg" alt="JavaScript" />
                  </Icon>
                  <Icon label="TypeScript">
                    <img src="typescript.svg" alt="TypeScript" />
                  </Icon>
                </div>
              </div>

              <div className="break-inside-avoid-column pt-4">
                <h4>Frontend</h4>
                <div className="flex gap-2 mt-2">
                  <Icon label="React">
                    <img src="react.svg" alt="React" />
                  </Icon>
                  <Icon label="Tailwind">
                    <img src="tailwind.svg" alt="Tailwind" />
                  </Icon>
                  <Icon label="Vite">
                    <img src="vite.svg" alt="Vite" />
                  </Icon>
                </div>

                <br />
                <h4>Backend</h4>
                <div className="flex gap-2 mt-2">
                  <Icon label="NestJS">
                    <img src="nest.svg" alt="NestJS" />
                  </Icon>
                  <Icon label="NodeJS">
                    <img src="node.svg" alt="NodeJS" />
                  </Icon>
                </div>

                <br />
                <h4>DevOps</h4>
                <div className="flex gap-2 mt-2">
                  <Icon label="Docker">
                    <img src="docker.svg" alt="Docker" />
                  </Icon>
                  <Icon label="Git">
                    <img src="git.svg" alt="Git" />
                  </Icon>
                  <Icon label="Gitlab">
                    <img src="gitlab.svg" alt="Gitlab" />
                  </Icon>
                </div>
              </div>
            </div>

            <br />
            <h2 className="text-2xl font-bold text-zinc-700 mt-8">
              Silly Things I Created 🧩
            </h2>
            <br />
            <div className="md:columns-2 flex-col gap-4">
              <Project>
                <img
                  src="digisign.png"
                  alt="DigiSign"
                  className="border rounded-md"
                />
                <h3 className="text-xl font-bold text-zinc-700 mt-4">
                  DigiSign
                </h3>
                <p className=" mt-2">
                  Generates certificate for your event without hassle. Just
                  upload the data and it will spits out PDFs. Currently closed
                  source.
                </p>
                <br />
                <div className="flex gap-2 text-2xl">
                  <TbBrandReact />
                  <RiTailwindCssFill />
                  <SiNestjs />
                  <RiNodejsLine />
                </div>
              </Project>

              <Project>
                <img
                  src="commission.png"
                  alt="Mezuu's Commission Page"
                  className="border rounded-md"
                />
                <h3 className="text-xl font-bold text-zinc-700 mt-4">
                  Mezuu&apos;s Commission Page
                </h3>
                <p className=" mt-2">
                  A web dedicated to display my art portfolios for commission
                  purposes
                </p>
                <br />
                <div className="flex gap-2 justify-between items-center">
                  <div className="flex gap-2 text-2xl">
                    <TbBrandReact />
                    <SiMui />
                  </div>
                  <a href="https://commission.mezuu.id" target="_blank">
                    <div className="border p-2 rounded-md flex gap-2 text-sm items-center hover:bg-slate-200 transition-all ease-in-out">
                      <FaLink />
                      Web Link
                    </div>
                  </a>
                </div>
              </Project>

              <Project>
                <img
                  src="https://camo.githubusercontent.com/55b05e90942fcb51e1d1148fabd8c038c3bcee66b91d10dd56d58e4b32494cbc/68747470733a2f2f692e6962622e636f2f6e4c67477a46672f696d6167652d323032322d30372d30322d3230353634363931382e706e67"
                  alt="collocation-approximation"
                  className="border rounded-md"
                />
                <h3 className="text-xl font-bold text-zinc-700 mt-4">
                  collocation-approximation
                </h3>
                <p className="mt-2">
                  A console application that approximates a mathematic function,
                  derivative, and integral based on given sets of 2-dimensional
                  point. Written in C.
                </p>
                <br />
                <div className="flex justify-between gap-2 text-2xl items-center">
                  <SiC />
                  <a
                    href="https://github.com/Mezuu/collocation-approximation"
                    target="_blank"
                  >
                    <div className="border p-2 rounded-md flex gap-2 text-sm items-center hover:bg-slate-200 transition-all ease-in-out">
                      <FaGithub />
                      Project Repo
                    </div>
                  </a>
                </div>
              </Project>
              <Project>
                <div className="flex justify-center items-center h-full">
                  <i>More coming soon ...</i>
                </div>
              </Project>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 w-full bg-slate-600 flex justify-center text-slate-50">
        2024 &copy; Mezuu
      </div>
    </>
  );

  function Icon({
    children,
    label,
  }: {
    children: React.ReactNode;
    label?: string;
  }) {
    return (
      <div
        className="w-16 p-2 shadow-md border rounded-md flex items-center relative whitespace-nowrap text-sm"
        onMouseOver={(e) => {
          e.currentTarget.firstElementChild?.classList.remove("opacity-0");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.firstElementChild?.classList.add("opacity-0");
        }}
      >
        <div className="transition-all ease-in-out absolute -top-10 bg-slate-600 text-slate-100 p-2 rounded-lg left-0 opacity-0 break-inside-avoid-column">
          {label}
        </div>
        {children}
      </div>
    );
  }

  function Project({ children }: { children: React.ReactNode }) {
    return (
      <div className="p-4 mb-4 rounded-md border shadow-md break-inside-avoid-column hover:bg-slate-100 ease-in-out transition-all">
        {children}
      </div>
    );
  }
}
