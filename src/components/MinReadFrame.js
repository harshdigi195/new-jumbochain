import styles from './MinReadFrame.module.css';

const MinReadFrame = ({ iconixtosolidfolderTransf, easyAdaptability }) => {
	return (
		<button className={styles.minReadFrame}>
			<div className={styles.navigatingTheFutureFrame}>
				<div className={styles.protoJumboBetaVersionRed} />
				<img
					className={styles.iconixtosolidfolderTransfer}
					alt=''
					src={iconixtosolidfolderTransf}
				/>
			</div>
			<div className={styles.easyAdaptability}>{easyAdaptability}</div>
		</button>
	);
};

export default MinReadFrame;
