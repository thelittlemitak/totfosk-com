import styles from "./teaching.module.css";

const Teaching = function () {
  return (
    <>
      <div className={styles.mainText}>
        I would gladly help you in your journey! This are the topics I am
        currently available for teaching:
      </div>
      <div className={styles.instrumentsWrapper}>
        <div className={styles.instrumentCard}>
          <div>Drums</div>
          <div>All levels</div>
          <div>All styles</div>
        </div>
        <div className={styles.instrumentCard}>
          <div>Piano</div>
          <div>Basic level</div>
          <div>Classical</div>
        </div>
        <div className={styles.instrumentCard}>
          <div>Ableton/Logic</div>
          <div>All levels</div>
          <div>All styles</div>
        </div>
      </div>
      <form className={styles.form}>
        <label for="email">Email:</label>
        <input
          className={styles.ins}
          type="email"
          id="email"
          name="email"
          placeholder="email@mail.com"
          required
        />

        <label for="city">City:</label>
        <input
          className={styles.ins}
          type="text"
          id="city"
          name="city"
          placeholder="Menorca"
          required
        />

        <input type="submit" value="Submit" className={styles.submitBtn} />
      </form>
      <div className={styles.secondaryText}>
        Also, if you subscribe, you will be getting my self-released music for
        free directly to your mailbox.
      </div>
    </>
  );
};

export default Teaching;
