import { electronicMusic } from "../../data/electronic";
import ElectronicWrapper from "./ElectronicWrapper";
import styles from "./electronic.module.css";
import Image from "next/image";

const Electronic = function () {
  const infoImport = electronicMusic;

  const mapper = function () {
    return infoImport.map((x) => (
      <ElectronicWrapper key={x.key} fullObj={x}></ElectronicWrapper>
    ));
  };
  return (
    <>
      <div className={styles.mainGrid}>{mapper()}</div>;
    </>
  );
};

export default Electronic;
