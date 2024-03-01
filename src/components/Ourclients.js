import styles from './Ourclients.module.css';

const Ourclients = () => {
	return (
		<header className={styles.ourclients}>
			<div className={styles.header}>
				<div className={styles.navbar}>
					<img
						className={styles.image18Icon}
						loading='lazy'
						alt=''
						src='/image-18@2x.png'
					/>
					<div className={styles.logo}>
						<h3 className={styles.jumbochain}>Jumbochain</h3>
						<b className={styles.poweredByDigi195}>Powered by Digi195</b>
					</div>
				</div>
				<div className={styles.blogs}>
					<div className={styles.minread}>
						<b className={styles.network}>Network</b>
						<img
							className={styles.iconamoonarrowDown2}
							alt=''
							src='/iconamoonarrowdown2.svg'
						/>
					</div>
					<div className={styles.minread1}>
						<b className={styles.developers}>Developers</b>
						<img
							className={styles.iconamoonarrowDown21}
							alt=''
							src='/iconamoonarrowdown2-1.svg'
						/>
					</div>
					<div className={styles.minread2}>
						<b className={styles.ecosystem}>Ecosystem</b>
						<img
							className={styles.iconamoonarrowDown22}
							alt=''
							src='/iconamoonarrowdown2-2.svg'
						/>
					</div>
					<div className={styles.minread3}>
						<b className={styles.community}>Community</b>
						<img
							className={styles.iconamoonarrowDown23}
							alt=''
							src='/iconamoonarrowdown2-3.svg'
						/>
					</div>
					<b className={styles.about}>About</b>
				</div>
			</div>
		</header>
	);
};

export default Ourclients;
