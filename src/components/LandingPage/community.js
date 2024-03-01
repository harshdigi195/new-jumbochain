import styles from '@/styles/community.module.css';
import Image from 'next/image';

function Bento({ channel, followers, icon, link }) {
	return (
		<div className={styles.bento}>
			<div className={styles.header}>
				<div className={styles.bentoIcon}>
					<Image
						src={icon}
						height='41'
						width='41'
					/>
				</div>
				<Image
					src='/iconixto/solid/arrow-right.svg'
					height='41'
					width='41'
					style={{ opacity: '0.5', transform: 'rotate(-45deg)' }}
				/>
			</div>
			<div className={styles.bottom}>
				<span className={styles.channel}>{channel}</span>
				<span className={styles.followers}>{followers}</span>
			</div>
		</div>
	);
}

function Community() {
	return (
		<div className={styles.section}>
			<div className={styles.headline}>Join the Jumbochain Community</div>
			<div className={styles.subtext}>
				Whether you are an investor, a validator, a developer, or just a curious
				spectator, we are here to welcome you to Jumbochain community.
			</div>
			<div className={styles.gridContainer}>
				<div className={styles.gridRow}>
					<Bento
						channel='LinkedIn'
						followers={'2000+ Folllowers'}
						icon='/iconixto/solid/linkedin.svg'
						link='#'
					/>
					<Bento
						channel='Facebook'
						followers={'5200+ Followers'}
						icon='/iconixto/solid/facebook.svg'
						link='#'
					/>
					<Bento
						channel='Discord'
						followers={'2000 Members'}
						icon='/iconixto/solid/discord.svg'
						link='#'
					/>
				</div>
				<div className={styles.gridRow}>
					<Bento
						channel='Twitter'
						followers={'2400+ Followers'}
						icon='/iconixto/solid/twitter.svg'
						link='#'
					/>
					<Bento
						channel='Instagram'
						followers={'1600+ Followers'}
						icon='/iconixto/solid/instagram.svg'
						link='#'
					/>
					<Bento
						channel='Telegram'
						followers={'2000 Members'}
						icon='/iconixto/solid/discord.svg'
						link='#'
					/>
				</div>
			</div>
		</div>
	);
}

export default Community;
