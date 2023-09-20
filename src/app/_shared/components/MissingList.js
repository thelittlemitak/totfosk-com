import styles from "../_shared.module.css";

const MissingList = function (props) {
  const length = props.list.length;
  const liElements = props.list.map((item, index) => (
    <li key={item.key} type="circle">
      {item.title}
    </li>
  ));

  return (
    <>
      <ol className={styles.bottomUl}>{liElements}</ol>
      <p className={styles.almostAlert}>almost made it...</p>
    </>
  );
};

export default MissingList;
