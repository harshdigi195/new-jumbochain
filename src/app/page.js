import Footer from "@/components/Footer";
import FrameComponent2 from "@/components/FrameComponent2";
import Announcement from "@/components/LandingPage/announcement";
import Community from "@/components/LandingPage/community";
import EarthSection from "@/components/LandingPage/earthSection";
import Partners from "@/components/LandingPage/partners";
import Timeline from "@/components/LandingPage/timeline";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const theme22 = "dark";
  return (
    <>
      <Navbar />
      <div className={styles.HeroContainer}>
        <div className={styles.HeroText}>
          <h1>
            Cutting-Edge, Fast, Expandable, Cost-Effective, Eco-Friendly
            <span style={{ color: "#A043FA" }}> Layer 1.</span>
          </h1>
          <p>Fair, democratic reward distribution, preventing monopolies.</p>
          <div className={styles.HeroBtnGroup}>
            <div className={styles.ColorBtn1}>Explore</div>
            <div className={styles.LightBtn1}>Documentation</div>
          </div>
        </div>
        <div className={styles.HeroImg}>
          <Image
            className={styles.HeroImgClass}
            src="/images/hero.png"
            width={500}
            height={500}
          />
          <div className={styles.gradient1}></div>
          <Image
            className={styles.gradient2}
            src="/images/Vector10.png"
            width={739}
            height={221}
          />
        </div>
      </div>
      <Announcement />
      <Partners />
      <EarthSection />
      <div className={styles.textAreaSection}>
        <div className={styles.textArea3}>
          Jumbochain is pioneering{" "}
          <span style={{ color: "#881FEF" }}>eco-friendly</span> blockchain
          technology, aligned with the UN's SDGs, by optimizing storage and
          computation to reduce environmental impact. Our unique approach,
          featuring a{" "}
          <span style={{ color: "#881FEF" }}>hybrid consensus mechanism</span>{" "}
          and <span style={{ color: "#881FEF" }}>Jumbo sharding protocol</span>,
          not only enhances scalability and lowers costs but also introduces
          NFTs for transactions and rewards, setting a new standard for
          sustainability in the blockchain space
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15rem 0rem",
        }}
      >
        <FrameComponent2 />
      </div>
      <Timeline />
      <div className={styles.centerContainer}>
        <div className={styles.visionContainer}>
          <div className={styles.visionHeadline}>Our Vision</div>
          <div className={styles.visionBody}>
            Jumbo Blockchain aims to redefine the future of blockchain
            technology by championing innovation, scalability, affordability,
            and unparalleled ease of use. Our vision is to establish a world
            where blockchain technology becomes an integral, accessible, and
            transformative tool for individuals and businesses alike, fostering
            a global ecosystem that promotes inclusivity, sustainability, and
            empowerment.
          </div>
        </div>
        <div className={styles.visionContainer}>
          <div className={styles.visionHeadline}>Our Mission</div>
          <div className={styles.visionBody}>
            Our mission at Jumbo Blockchain is to deliver cutting-edge,
            scalable, and cost-effective blockchain solutions that are easily
            accessible to a diverse range of users. By prioritizing innovation
            and user-centric design, we commit to expanding the reach and
            understanding of blockchain technology across the globe. Through
            strategic collaborations, educational initiatives, and community
            engagement, we aim to empower people with the tools and knowledge
            needed to leverage blockchain for personal growth and societal
            advancement.
          </div>
        </div>
        <div className={styles.ClientContainer}>
          <div style={{ color: "#000" }} className={styles.ClientHeadline}>
            Our Client
          </div>
          <div className={styles.ClientBody}>
            <div className={styles.ClientLogo}>
              <Image src="/images/renewLogo.png" width="210" height="67" />
            </div>
            <div style={{ color: "#666" }} className={styles.ClientContent}>
              A Jumbochain and IoT based solution to track the usage of high
              efficiency stove distributed by the company for sustainable energy
              usage. This would help ReNew power to collect accurate data and
              use for claim in carbon credits.
            </div>
          </div>
        </div>
        <Community />
        <Footer />
      </div>
    </>
  );
}
