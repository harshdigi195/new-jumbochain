import styles from '@/styles/earth.module.css';
import Image from 'next/image';

function EarthSection() {
	return (
		<div className={styles.section}>
			<div className={styles.textArea}>
				<div className={styles.whyChoose}>Why Choose</div>
				<div
					style={{ color: '#A043FA' }}
					className={styles.jumbochain}
				>
					Jumbochain
				</div>
				<div
					style={{ color: '#fff' }}
					className={styles.ColorBtn1}
				>
					Explore
				</div>
			</div>
			<div className={styles.floatSection}>
				<div className={styles.earth}>
					<div className={styles.innerEarth}>
						<Image
							src='/images/map.png'
							width='1092'
							height='495'
							className={styles.earthMap}
							styles={{ opacity: '80%' }}
						/>
						<Image
							src='/images/map.png'
							width='1092'
							height='495'
							className={styles.earthMap}
							styles={{ opacity: '80%' }}
						/>
					</div>
				</div>
				<div className={`${styles.floatBox} ${styles.pos1}`}>
					<div className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/tree-2.svg'
							width='32'
							height='32'
							className={styles.floatIcon}
						/>
					</div>
					<p>Sustainable and low storage</p>
				</div>
				<div className={`${styles.floatBox} ${styles.pos2}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/branch.svg'
							width='32'
							height='32'
							className={styles.floatIcon}
						/>
					</span>
					<p>Dapps integration</p>
				</div>
				<div className={`${styles.floatBox} ${styles.pos3}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/nft.svg'
							width='32'
							height='32'
							className={styles.floatIcon}
						/>
					</span>
					<p>Support for NFT</p>
				</div>
				<div className={`${styles.floatBox} ${styles.pos4}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/folder-transfer.svg'
							width='32'
							height='32'
							className={styles.floatIcon}
						/>
					</span>
					<p>Easy adaptability</p>
				</div>
				<div className={`${styles.floatBox} ${styles.pos5}`}>
					<span className={styles.floatBoxIcon}>
						<Image
							src='/iconixto/solid/grid-2white.svg'
							width='28'
							height='28'
							className={styles.floatIcon}
						/>
					</span>
					<p>Plug & play multiple blockchains</p>
				</div>
				<div className={styles.patentCountOuter}>
					<div className={styles.patentCountInner}>
						<p>3 Patents</p>
						<p className={styles.smallFont}>&</p>
						<p className={styles.smallFont}>1 Applied</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EarthSection;
