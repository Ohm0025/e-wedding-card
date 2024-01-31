import githubLogo from "../assets/githubLogo.svg";

const Footer = () => {
  return (
    <div className="mt-auto flex items-center justify-between bg-secondary border-t-2 p-4 w-full">
      <div className="text-[12px] sm:text-[16px] tracking-wider">
        Online Invitation Card
      </div>
      <div className="text-[14px] sm:text-[24px] tracking-wider flex items-center gap-4">
        BY
        <a
          href="https://github.com/Ohm0025"
          className="flex items-center gap-3">
          <img src={githubLogo} alt="github-logo" />
          <span className="text-[12px] sm:text-[16px]">Ohm0025</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
