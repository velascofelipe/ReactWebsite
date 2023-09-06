import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Some few words <br className="sm:block hidden" /> to describe me!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        "I'm Felipe Velasco, 25 years old, living in Chile, precisely in
        Santiago. Every day, I strive to do my best, learn from mistakes, and
        push myself harder each time. I'm a self-taught individual who enjoys
        learning new technologies. I have hobbies such as playing video games
        and spending time with loved ones. It's beneficial to be a professional,
        but it's even more crucial to be a kind-hearted person."
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
