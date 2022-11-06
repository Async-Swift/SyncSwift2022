import Image from "next/image";

import styles from "../../../styles/modules/Organizer.module.css";
import OrganizerProfile from "./OrganizerProfile";

const OrganizerGrid = ({ sessionTitle, organizers }) => {
  return (
    <div className={styles.organizerInfoContainer}>
      <h3>{sessionTitle}</h3>
      <div className={styles.organizerGrid}>
        {organizers &&
          organizers.map((organizer, index) => {
            const organizerImageUrl = `/organizer/${organizer.organizerName}.png`;
            return (
              <div key={index} className={styles.organizerProfileContainer}>
                <div className={styles.organizerProfileImageBox}>
                  <Image src={organizerImageUrl} alt="AsyncSwift Community Logo" layout="fill" priority />
                </div>
                <OrganizerProfile
                  key={index}
                  name={organizer.organizerName}
                  description={organizer.organizerDescription}
                ></OrganizerProfile>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrganizerGrid;
