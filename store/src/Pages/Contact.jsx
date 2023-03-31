import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      <div>
        <form className={styles.formContainer}>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Subject</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Your message here</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button className={styles.contactButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}
