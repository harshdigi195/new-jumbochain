import styles from './Facebook.module.css';

const Facebook = () => {
	return (
		<section className={styles.facebook}>
			<div className={styles.instagram}>
				<h1 className={styles.cuttingEdgeFastExpandableContainer}>
					<span>{`Cutting-Edge, Fast, Expandable, Cost-Effective, Eco-Friendly `}</span>
					<span className={styles.layer1}>Layer 1</span>
				</h1>
				<div className={styles.fairDemocraticReward}>
					Fair, democratic reward distribution, preventing monopolies.
				</div>
				<div className={styles.slack}>
					<button className={styles.arrow}>
						<div className={styles.explore}>Explore</div>
					</button>
					<button className={styles.arrow1}>
						<div className={styles.documentation}>Documentation</div>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Facebook;
