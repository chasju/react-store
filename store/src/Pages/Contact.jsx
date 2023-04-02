import styles from "../styles/Contact.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    fullName: yup.string().min(3, "Your name must be 3 characters or longer.").required("Please enter a name"),
    subject: yup.string().min(3, "Subject must be 3 characters or longer.").required("Please enter a subject"),
    message: yup.string().min(3, "Message must be at least 1 characters").required("Message must be at least 1 characters"),
  })
  .shape({
    email: yup.string().email("Not a proper email").required("Please enter a valid email"),
  });

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isVisible, setIsVisible] = useState(false);

  function onSubmit(data) {
    console.log(data);
    setIsVisible(true);
  }

  return (
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      <div className={isVisible ? styles.messageSent : ""}>
        <p>{isVisible ? "Your message was sent" : ""}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
          <div>
            <label htmlFor="">Name</label>
            <input {...register("fullName")} type="text" />
            <p className={styles.errorMessage}>{errors.fullName?.message}</p>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input {...register("email")} type="email" />
            <p className={styles.errorMessage}>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="">Subject</label>
            <input {...register("subject")} type="text" />
            <p className={styles.errorMessage}>{errors.subject?.message}</p>
          </div>
          <div>
            <label htmlFor="">Your message here</label>
            <p className={styles.errorMessage}>{errors.message?.message}</p>
            <textarea {...register("message")} name="message" cols="30" rows="10"></textarea>
          </div>
          <button type="submit" className={styles.contactButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
