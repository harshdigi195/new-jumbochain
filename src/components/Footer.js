import styles from '@/styles/footer.module.css';
import Image from 'next/image';
function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.row1}>
				<div className={styles.headline}>
					Fair, democratic reward distribution, preventing monopolies.
				</div>
				<div className={styles.socials}>
					<ul>
						<li>
							<Image
								src='/iconixto/solid/linkedin-sm.svg'
								width='28'
								height='28'
							/>
						</li>
						<li>
							<Image
								src='/iconixto/solid/twitter-sm.svg'
								width='28'
								height='28'
							/>
						</li>
						<li>
							<Image
								src='/iconixto/solid/instagram-sm.svg'
								width='28'
								height='28'
							/>
						</li>
						<li>
							<Image
								src='/iconixto/solid/facebook-sm.svg'
								width='28'
								height='28'
							/>
						</li>
						<li>
							<Image
								src='/iconixto/solid/telegram-sm.svg'
								width='28'
								height='28'
							/>
						</li>
						<li>
							<Image
								src='/iconixto/solid/discord-sm.svg'
								width='28'
								height='28'
							/>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.row2}>
				<div className={styles.coinsm}>
					<div className={styles.HeroImg}>
						<Image
							className={styles.HeroImgClass}
							src='/images/hero.png'
							width={100}
							height={100}
						/>
						<div className={styles.gradient1}></div>
						<Image
							className={styles.gradient2}
							src='/images/Vector10.png'
							width={139}
							height={34}
						/>
					</div>
				</div>
				<div className={styles.linksSection}>
					<div className={styles.linkStack}>
						<div className={styles.linkHeader}>Find us at</div>
						<ul className={styles.linkContent}>
							<li>Telegram</li>
							<li>LinkedIn</li>
							<li>Email Us</li>
						</ul>
					</div>
					<div className={styles.linkStack}>
						<div className={styles.linkHeader}>Find us at</div>
						<ul className={styles.linkContent}>
							<li>Telegram</li>
							<li>LinkedIn</li>
							<li>Email Us</li>
						</ul>
					</div>
					<div className={styles.linkStack}>
						<div className={styles.linkHeader}>Find us at</div>
						<ul className={styles.linkContent}>
							<li>Telegram</li>
							<li>LinkedIn</li>
							<li>Email Us</li>
						</ul>
					</div>
					<div className={styles.linkStack}>
						<div className={styles.linkHeader}>Find us at</div>
						<ul className={styles.linkContent}>
							<li>Telegram</li>
							<li>LinkedIn</li>
							<li>Email Us</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
