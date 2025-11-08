import React from "react";
import { useProfileType } from "../hooks/useProfileType";
import styles from "./ProfileTypeSelector.module.css";

const ProfileTypeSelector: React.FC = () => {
  const { profileType, setProfileType } = useProfileType();

  return (
    <div className={styles.selector}>
      <button
        className={`${styles.option} ${profileType === "DJ" ? styles.active : ""}`}
        onClick={() => setProfileType("DJ")}
        type="button"
      >
        DJ
      </button>
      <button
        className={`${styles.option} ${profileType === "Fan" ? styles.active : ""}`}
        onClick={() => setProfileType("Fan")}
        type="button"
      >
        Fan
      </button>
    </div>
  );
};

export default ProfileTypeSelector;
