import styles from './DiscordIcon.module.css';
import JumbochainBuildFrame from './JumbochainBuildFrame';
import OurVisionFrame from './OurVisionFrame';

const DiscordIcon = () => {
	return (
		<div className={styles.discordIcon}>
			<div className={styles.twitterIcon}>
				<div className={styles.slackIcon}>
					<img
						className={styles.looperBgIcon}
						alt=''
						src='/images/looper-BG.png'
					/>
					<div className={styles.facebookIcon} />
					<div className={styles.facebookIcon1} />
					<h1 className={styles.ourTimeline}>Our Timeline</h1>
					<div className={styles.frameParent}>
						<div className={styles.linkedInFollowersWrapper}>
							<div className={styles.linkedInFollowers}>
								<img
									className={styles.linkedInFollowersChild}
									loading='lazy'
									alt=''
									src='/images/Group1529.png'
								/>
								<div className={styles.facebookFollowers}>
									<div className={styles.jumboBlockchainVisionFrame}>
										<button className={styles.ourVisionFrame}>
											<div className={styles.ourMissionFrame}>
												<div className={styles.testnetLaunch}>
													Testnet Launch
												</div>
												<div className={styles.blogsFrame}>
													<div className={styles.blogsFrameChild} />
													<img
														className={styles.solarwalletOutlineIcon}
														alt=''
														src='/iconixto/solid/wallet.svg'
													/>
												</div>
											</div>
										</button>
										<OurVisionFrame
											smartContractBasedHybridL='Smart Contract Based Hybrid Launch'
											solarwalletOutline='/iconixto/solid/wallet.svg'
										/>
										<OurVisionFrame
											smartContractBasedHybridL='CBDC Integration'
											solarwalletOutline='/iconixto/solid/wallet.svg'
											propHeight='unset'
											propTextAlign='left'
										/>
									</div>
									<div className={styles.facebookFollowersInner}>
										<div className={styles.frameGroup}>
											<img
												className={styles.frameChild}
												loading='lazy'
												alt=''
												src='/images/Group1530.png'
											/>
											<img
												className={styles.frameItem}
												loading='lazy'
												alt=''
												src='/images/Group1531.png'
											/>
											<img
												className={styles.frameInner}
												loading='lazy'
												alt=''
												src='/images/Group1526.png'
											/>
											<img
												className={styles.groupIcon}
												loading='lazy'
												alt=''
												src='/images/Group1527.png'
											/>
											<img
												className={styles.frameChild1}
												loading='lazy'
												alt=''
												src='/images/Group1528.png'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.jumbochainBuildFrameParent}>
							<div className={styles.jumbochainBuildFrame}>
								<div className={styles.frameContainer}>
									<div className={styles.ellipseNodeParent}>
										<div className={styles.ellipseNode} />
										<img
											className={styles.solarwalletOutlineIcon1}
											alt=''
											src='/iconixto/solid/wallet.svg'
										/>
									</div>
									<div className={styles.jumbochainBlockchainBuild}>
										Jumbochain Blockchain build complete
									</div>
								</div>
							</div>
							<JumbochainBuildFrame
								solarwalletOutline='/iconixto/solid/wallet.svg'
								mainnetLaunch='Mainnet Launch'
							/>
							<JumbochainBuildFrame
								solarwalletOutline='/iconixto/solid/wallet.svg'
								mainnetLaunch='Interoperability'
								propWidth='unset'
								propFlex='1'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.ourClientsTextNodeParent}>
				<div className={styles.ourClientsTextNode}>
					<div className={styles.rectangleNode}>
						<h1 className={styles.ourVision}>Our Vision</h1>
						<div className={styles.jumboblockchainAimsTo}>
							JumboBlockchain aims to redefine the future of blockchain
							technology by championing innovation, scalability, affordability,
							and unparalleled ease of use. Our vision is to establish a world
							where blockchain technology becomes an integral, accessible, and
							transformative tool for individuals and businesses alike,
							fostering a global ecosystem that promotes inclusivity,
							sustainability, and empowerment.
						</div>
					</div>
				</div>
				<div className={styles.clientFrame}>
					<div className={styles.ourMissionParent}>
						<h1 className={styles.ourMission}>Our Mission</h1>
						<div className={styles.ourMissionAt}>
							Our mission at JumboBlockchain is to deliver cutting-edge,
							scalable, and cost-effective blockchain solutions that are easily
							accessible to a diverse range of users. By prioritizing innovation
							and user-centric design, we commit to expanding the reach and
							understanding of blockchain technology across the globe. Through
							strategic collaborations, educational initiatives, and community
							engagement, we aim to empower people with the tools and knowledge
							needed to leverage blockchain for personal growth and societal
							advancement
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiscordIcon;
