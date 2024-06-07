import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Header() {
  return (
    <header className="text-slate-600 py-8 w-11/12 md:w-4/5 lg:w-3/5 flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 className="font-bold text-2xl">
        <SocialMenu href="/">Mezuu<span className="font-normal">:5173</span></SocialMenu>
      </h1>
      <div className="text-2xl flex gap-4">
        <SocialMenu href="https://facebook.com/mezuu918">
          <FaFacebook />
        </SocialMenu>
        <SocialMenu href="https://twitter.com/rjezz918">
          <FaXTwitter />
        </SocialMenu>
        <SocialMenu href="https://github.com/Mezuu">
          <FaGithub />
        </SocialMenu>
      </div>
    </header>
  );

  function SocialMenu({
    children,
    href,
  }: {
    children: React.ReactNode;
    href?: string;
  }) {
    return (
      <a href={href}>
        <div className="hover:text-slate-800 transition-all ease-in-out">
          {children}
        </div>
      </a>
    );
  }
}
