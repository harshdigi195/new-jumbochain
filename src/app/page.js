import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<Navbar />
			<div className={styles.HeroContainer}>
				<div className={styles.HeroText}>
					<h1>
						The first Blockchain to focus on{' '}
						<span style={{ color: '#A043FA' }}>Planet, People </span>and
						<span style={{ color: '#A043FA' }}> Profit.</span>
					</h1>
					<p>
						Jumbochain rewards its validators and customers for taking
						sustainable action.
					</p>
					<div className={styles.HeroBtnGroup}>
						<div className={styles.ColorBtn1}>Explore</div>
						<div className={styles.LightBtn1}>Documentation</div>
					</div>
				</div>
				<div className={styles.HeroImg}>
					<Image
						className={styles.HeroImgClass}
						src='/images/hero.png'
						width={500}
						height={500}
					/>
					<div className={styles.gradient1}></div>
					<Image
						className={styles.gradient2}
						src='/images/Vector10.png'
						width={739}
						height={221}
					/>
				</div>
			</div>
		</>
	);
}
