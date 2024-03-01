import styles from "@/styles/timeline.module.css";
import Image from "next/image";

function Timeline() {
  return (
    <div className={styles.section}>
      <img src={"/images/timeline.svg"} className={styles.time} />
      {/* <div className={styles.title}>Our Timeline</div>
			<div className={styles.timelineContainer}>
				<div className={styles.dot1}>
					<span>
						<div></div>
					</span>
				</div>
				<div className={`${styles.box} ${styles.box1}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/wallet.svg'
							width='28'
							height='28'
						/>
					</span>
					<p>Jumbochain Blockchain build complete</p>
				</div>
				<div className={styles.dot2}>
					<span>
						<div></div>
					</span>
				</div>
				<div className={`${styles.box} ${styles.box2}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/wallet.svg'
							width='28'
							height='28'
						/>
					</span>
					<p>Testnet Launch</p>
				</div>
				<div className={styles.dot3}>
					<span>
						<div>
							<span></span>
						</div>
					</span>
				</div>
				<div className={`${styles.box} ${styles.box3}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/wallet.svg'
							width='28'
							height='28'
						/>
					</span>
					<p>Mainnet Launch</p>
				</div>
				<div className={styles.dot4}>
					<span>
						<div></div>
					</span>
				</div>
				<div className={`${styles.box} ${styles.box4}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/wallet.svg'
							width='28'
							height='28'
						/>
					</span>
					<p>Smart Contract Based Hybrid Launch</p>
				</div>
				<div className={styles.dot5}>
					<span>
						<div></div>
					</span>
				</div>
				<div className={`${styles.box} ${styles.box5}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/wallet.svg'
							width='28'
							height='28'
						/>
					</span>
					<p>Interoperability</p>
				</div>
				<div className={styles.dot6}>
					<span>
						<div></div>
					</span>
				</div>
				<div className={`${styles.box} ${styles.box6}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/wallet.svg'
							width='28'
							height='28'
						/>
					</span>
					<p>CBDC Integration</p>
				</div>
			</div> */}
      <div className={styles.bg}>
        <Image
          src="/images/Looper-BG.png"
          width="2260"
          height="1396"
          // className={styles.bg}
        />
      </div>
    </div>
  );
}

export default Timeline;
