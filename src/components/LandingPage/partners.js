import styles from '@/styles/partners.module.css';
import Image from 'next/image';

function Partners() {
	return (
		<div className={styles.section}>
			<h2>Our Partners</h2>
			<div
				className={styles.scroller}
				data-speed='fast'
			>
				<ul className={`${styles.scroller__inner} ${styles.tagList}`}>
					<li>
						<Image
							src='/images/image 53.png'
							height='57'
							width='152'
						/>
					</li>
					<li>
						<Image
							src='/images/image 54.png'
							height='57'
							width='152'
						/>
					</li>
					<li>
						<Image
							src='/images/image 55.png'
							height='64'
							width='158'
						/>
					</li>
					<li>
						<Image
							src='/images/image 58.png'
							height='76'
							width='184'
						/>
					</li>
					<li>
						<Image
							src='/images/image 59.png'
							height='76'
							width='184'
						/>
					</li>
					<li>
						<Image
							src='/images/image 57.png'
							height='60'
							width='170'
						/>
					</li>
					<li>
						<Image
							src='/images/image 56.png'
							height='65'
							width='164'
						/>
					</li>
					<li>
						<Image
							src='/images/image 60.png'
							height='76'
							width='184'
						/>
					</li>
					<li>
						<Image
							src='/images/image 53.png'
							height='57'
							width='152'
						/>
					</li>
					<li>
						<Image
							src='/images/image 54.png'
							height='57'
							width='152'
						/>
					</li>
					<li>
						<Image
							src='/images/image 55.png'
							height='64'
							width='158'
						/>
					</li>
					<li>
						<Image
							src='/images/image 58.png'
							height='76'
							width='184'
						/>
					</li>
					<li>
						<Image
							src='/images/image 59.png'
							height='76'
							width='184'
						/>
					</li>
					<li>
						<Image
							src='/images/image 57.png'
							height='60'
							width='170'
						/>
					</li>
					<li>
						<Image
							src='/images/image 56.png'
							height='65'
							width='164'
						/>
					</li>
					<li>
						<Image
							src='/images/image 60.png'
							height='76'
							width='184'
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Partners;
