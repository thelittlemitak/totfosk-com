import styles from "./app.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.mainText}>
        If you want to follow me without the need of social media, you can
        easily put your email and city, and you will be notified only if I play
        near your or release new music.
      </div>
      <form className={styles.form}>
        <label for="email">Email:</label>
        <input className={styles.ins} type="email" id="email" name="email" placeholder="email@mail.com" required />

        <label for="city">City:</label>
        <input className={styles.ins} type="text" id="city" name="city" placeholder="Menorca" required />

        <input type="submit" value="Submit" className={styles.submitBtn}/>
      </form>
      <div className={styles.secondaryText}>
        Also, if you subscribe, you will be getting my self-released music for
        free directly to your mailbox.
      </div>
    </>
  );
}

{/* <iframe
  width="100%"
  height="400px"
  scrolling="no"
  frameBorder="no"
  allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/totfosk&amp;show_artwork=false&show_playcount=false&color=02f707"
></iframe>; */}
