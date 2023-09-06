import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import ButtonMe from "./ButtonMe";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"></span> Glad to meet you, I'm{" "}
            <span className="text-white">Felipe Velasco Aguirre</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Making <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Solutions</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"></h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Graduate in Computer Engineering, focused on the development and
          management of computer projects, with a high capacity for learning and
          adapting to new technologies, self-taught, and skilled in teamwork.
          Passionate about new challenges that contribute to achieving goals and
          objectives, as well as to my personal and professional growth.
        </p>
        <br />
        <ButtonMe />
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
