import { Languages } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== Languages.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>

    </div>
  </div>
);

const Business = () =>  (
  <section id="Languages" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Hi 👋, <br className="sm:block hidden" /> I'm Aniruddha.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A novice programmer from India with a Undergraduate
         degree in Electronics Engineering from Taiwan.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {Languages.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;