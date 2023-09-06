import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Designs and logos <br className="sm:block hidden" /> for your personal
        projects
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whatever you want, Logo, personal design or just an emote! All of these
        made in Photoshop, Illustrator and animations in Affter Effects
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://www.instagram.com/smyx.cl/" target="_blank">
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
