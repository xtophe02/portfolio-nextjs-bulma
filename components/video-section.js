import SocialMedia from "./social-media";
// import styles from "../styles/Home.module.css";
import { useLottie } from "lottie-react";
import lottieAnimation from "../public/lottie.json";

export default function VideoSection() {
  const options = {
    animationData: lottieAnimation,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);

  return (
    <section className="section hero">
      {/* <video
        playsInline
        autoPlay
        muted
        loop
        // poster="polygon.svg"
        className={styles.video}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="hero-body">
        <div className="columns is-vcentered">
          <div className="column">
            <p className="title has-text-primary">I&apos;m Christophe</p>
            <p className="subtitle has-text-primary">FullStack Web Developer</p>
            <SocialMedia />
          </div>
          <div className="column">{View}</div>
        </div>
      </div>
    </section>
  );
}
