import styles from '@/styles/announcements.module.css';
import Image from 'next/image';

function Announcement() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.textArea}>
					<div
						style={{ color: '#fff' }}
						className={styles.colorCapsule}
					>
						Announcement
					</div>
					<div className={styles.Announcement}>
						<div className={styles.Headline}>
							<span>Jumbo Blockchain Mainnet Launch</span>
							<span>19 March 2024</span>
						</div>
						<div className={styles.Content}>
							Pioneering the Evolution of Blockchain Technology.
						</div>
					</div>
					<div className={styles.LightBtn2}>Learn More</div>
				</div>
				<div className={styles.imageArea}>
					<Image
						className={styles.announcementImg}
						src='/images/announcement.png'
						width='546'
						height='303'
					/>
				</div>
			</div>
		</div>
	);
}

export default Announcement;
