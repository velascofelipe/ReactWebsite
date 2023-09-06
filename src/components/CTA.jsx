import styles from "../style";
import Button from "./Button";
import ButtonForm from "./ButtonForm";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's get to know each other!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I invite you to initiate a conversation and discuss your requeriments or
        just questions! Feel free to do it :)
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ButtonForm />
    </div>
  </section>
);

export default CTA;
