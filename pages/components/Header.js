import Image from "next/image";
import Link from "next/link";
import SNS from "./SNS";
import Ticket from "./Ticket";

import LogoFile from "../../public/logo-horizental.svg";

import style from "../../styles/modules/Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <Link href="/">
          <a>
            <Image
              src={LogoFile}
              alt="AsyncSwift Community Logo"
              width={183}
              height={40}
            />
          </a>
        </Link>
        <SNS></SNS>
      </div>
      {/* <Ticket></Ticket> */}
    </header>
  );
};

export default Header;
