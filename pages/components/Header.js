import Image from "next/image";
import logoFile from "../../public/asyncLogo.svg";

import style from "../../styles/modules/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <a href="/">
      <Image
        src={logoFile}
        alt="AsyncSwift Community Logo"
        width={62}
        height={60}
      />
      </a>
    </header>
  );
};

export default Header;
