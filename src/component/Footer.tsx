import githubLogo from "../assets/githubLogo.svg";

const Footer = () => {
  return (
    <div className="mt-auto flex items-center justify-around bg-[white] border-t-2 py-4">
      <div className="text-[24px] tracking-wider">Online Invitation Card</div>
      <div className="text-[24px] tracking-wider flex items-center gap-4">
        BY
        <a
          href="https://github.com/Ohm0025"
          className="flex items-center gap-3">
          <img src={githubLogo} alt="github-logo" />
          Ohm0025
        </a>
      </div>
    </div>
  );
};

export default Footer;
