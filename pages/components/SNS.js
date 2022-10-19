import Image from "next/image";

import notion from "../../public/notion.svg";
import twitter from "../../public/twitter.svg";
import instagram from "../../public/instagram.svg";
import linkedIn from "../../public/linkedIn.svg";

import style from "../../styles/modules/Info.module.css";

const SNS = () => {
  const conferenceInfoUrl = {
    notion:
      "https://unnnyong.notion.site/AsyncSwift-9baba57eb8f8416d877bd5d2aba4a62d",
    instagram: "https://www.instagram.com/asyncswift/",
    twitter: "https://twitter.com/AsyncSwift",
    linkedIn: "https://www.linkedin.com/company/async-swift/",
  };

  return (
    <div className={style.getInfo}>
      {/* <h4>To get latest information</h4> */}
      <div className={style.SNSContainer}>
        <a target="_blank" href={conferenceInfoUrl.notion} rel="noreferrer">
          <Image alt="Notion logo" src={notion} width={24} height={24} />
        </a>
        <a target="_blank" href={conferenceInfoUrl.twitter} rel="noreferrer">
          <Image alt="Twitter logo" src={twitter} width={24} height={24} />
        </a>
        <a target="_blank" href={conferenceInfoUrl.instagram} rel="noreferrer">
          <Image alt="Instagram logo" src={instagram} width={24} height={24} />
        </a>
        <a target="_blank" href={conferenceInfoUrl.linkedIn} rel="noreferrer">
          <Image alt="LinkedIn logo" src={linkedIn} width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

export default SNS;
