'use client';
import '@/styles/navbar.module.css';
import styles from '@/styles/navbar.module.css';
import { ArrowDown2 } from 'iconsax-react';
import Image from 'next/image';
import { useState } from 'react';

function Navbar() {
	const defaultState = {
		Network: {
			protojumbo: true,
			mainnet: false,
		},
		Developers: {
			developer_tools: true,
		},
		Ecosystem: {
			link1: true,
			link2: false,
			link3: false,
			link4: false,
		},
		Community: {
			validator: true,
			advocate: false,
		},
	};
	const [NavBar, setNavBar] = useState(defaultState);
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<div className={styles.logo}>
					<Image
						src='/images/logo.svg'
						width='50'
						height='50'
					/>
				</div>
				<div className={styles.logoTextContainer}>
					<div className={styles.logoMain}>Jumbochain</div>
					<div className={styles.logoSub}>Powered by Digi195</div>
				</div>
			</div>

			<div className={styles.MenuContainer}>
				<ul className={styles.MainList}>
					<li>
						<span className={styles.link1}>
							<p>Network</p>
							<ArrowDown2
								className={styles.arrowDown}
								size='16'
								color='#000'
							/>
						</span>
						<div className={`${styles.dropdown} ${styles.rightDrop}`}>
							<div className={styles.dropdownContainer}>
								<div className={styles.dropdownRight}>
									<div
										onClick={() =>
											setNavBar({
												...NavBar,
												Network: {
													protojumbo: true,
													mainnet: false,
												},
											})
										}
										className={`${
											NavBar.Network.protojumbo
												? styles.dropdownHeadingActive
												: ''
										} ${styles.dropdownHeading} ${styles.BadgeNew}`}
									>
										<Image
											src={`/iconixto/solid/dashboard${
												NavBar.Network.protojumbo ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										{/* <DashboardIcon /> */}
										ProtoJumbo
										<Image
											src={`/iconixto/solid/arrow-right${
												NavBar.Network.protojumbo ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
									<div
										onClick={() =>
											setNavBar({
												...NavBar,
												Network: {
													protojumbo: false,
													mainnet: true,
												},
											})
										}
										className={`${
											NavBar.Network.mainnet ? styles.dropdownHeadingActive : ''
										} ${styles.dropdownHeading} ${styles.dropdownHeading}`}
									>
										<Image
											src={`/iconixto/solid/rows${
												NavBar.Network.mainnet ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										Mainnet
										<Image
											src={`/iconixto/solid/arrow-right${
												NavBar.Network.mainnet ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
								</div>
								<div className={styles.dropdownLeft}>
									<div
										style={{ fontSize: '14px', color: '#999' }}
										classNames={styles.LeftSuperText}
									>
										Browse By Use
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '1rem',
										}}
										classNames={'leftList'}
									>
										<div
											style={{
												textDecoration: 'none',
											}}
											className={styles.LeftSubListItem}
										>
											<Image
												src='/iconixto/solid/grid-2.svg'
												width='24'
												height='24'
												style={{ fill: '#AD79FF' }}
											/>
											<div className={styles.LeftSubListText}>
												<div className={styles.LeftSubListItemHeading}>
													Explorer
												</div>
												<div className={styles.LeftSubListItemSub}>
													View transactions
												</div>
											</div>
										</div>
										<div className={styles.LeftSubListItem}>
											<Image
												src='/iconixto/solid/browser.svg'
												width='24'
												height='24'
												style={{ fill: '#AD79FF' }}
											/>
											<div className={styles.LeftSubListText}>
												<div className={styles.LeftSubListItemHeading}>
													Faucet
												</div>
												<div className={styles.LeftSubListItemSub}>
													Fast and reliable
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<span className={styles.link1}>
							<p>Developers</p>{' '}
							<ArrowDown2
								className={styles.arrowDown}
								size='16'
								color='#000'
							/>
						</span>
						<div className={`${styles.dropdown} ${styles.Drop1}`}>
							<div className={styles.dropdownContainer}>
								<div className={styles.dropdownRight}>
									<div
										className={`${styles.dropdownHeadingActive} ${styles.dropdownHeading}`}
									>
										<Image
											src={`/iconixto/solid/code-pc-active.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										{/* <DashboardIcon /> */}
										Developer Tools
										<Image
											src={`/iconixto/solid/arrow-right-active.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
									<div
										className={`${styles.dropdownHeading} ${styles.underlineOnHover}`}
									>
										<Image
											src={`/iconixto/solid/document-code.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										Lite Paper
									</div>
									<div
										className={`${styles.dropdownHeading} ${styles.underlineOnHover}`}
									>
										<Image
											src={`/iconixto/solid/document-chart.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										White Paper
									</div>
									<div
										className={`${styles.dropdownHeading} ${styles.underlineOnHover} ${styles.BadgeNew}`}
									>
										<Image
											src={`/iconixto/solid/document-chart.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										Developer Whitelist
									</div>
								</div>
								<div className={styles.dropdownLeft}>
									<div
										style={{ fontSize: '14px', color: '#999' }}
										classNames={styles.LeftSuperText}
									>
										Browse By Feature
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '1rem',
										}}
										classNames={'leftList'}
									>
										<div
											style={{
												textDecoration: 'none',
											}}
											className={styles.LeftSubListItem}
										>
											<Image
												src='/iconixto/solid/document.svg'
												width='24'
												height='24'
												style={{ fill: '#AD79FF' }}
											/>
											<div className={styles.LeftSubListText}>
												<div className={styles.LeftSubListItemHeading}>
													Documentation
												</div>
												<div className={styles.LeftSubListItemSub}>
													Learn More
												</div>
											</div>
										</div>
										<div className={styles.LeftSubListItem}>
											<Image
												src='/iconixto/solid/bug.svg'
												width='24'
												height='24'
												style={{ fill: '#AD79FF' }}
											/>
											<div className={styles.LeftSubListText}>
												<div className={styles.LeftSubListItemHeading}>
													Report a bug
												</div>
												<div className={styles.LeftSubListItemSub}>
													Help Us Improve
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<span className={styles.link1}>
							<p>Ecosystem</p>{' '}
							<ArrowDown2
								className={styles.arrowDown}
								size='16'
								color='#000'
							/>
						</span>
						<div className={`${styles.dropdown} ${styles.Drop2}`}>
							<div className={styles.dropdownContainer}>
								<div className={styles.dropdownRight}>
									<div
										onClick={() =>
											setNavBar({
												...NavBar,
												Ecosystem: {
													link1: true,
													link2: false,
													link3: false,
													link4: false,
												},
											})
										}
										className={`${
											NavBar.Ecosystem.link1 ? styles.dropdownHeadingActive : ''
										} ${styles.dropdownHeading}`}
									>
										<Image
											src={`/iconixto/solid/database${
												NavBar.Ecosystem.link1 ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										{/* <DashboardIcon /> */}
										Counterfeit Management
										<Image
											src={`/iconixto/solid/arrow-right${
												NavBar.Ecosystem.link1 ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
									<div
										onClick={() =>
											setNavBar({
												...NavBar,
												Ecosystem: {
													link1: false,
													link2: true,
													link3: false,
													link4: false,
												},
											})
										}
										className={`${
											NavBar.Ecosystem.link2 ? styles.dropdownHeadingActive : ''
										} ${styles.dropdownHeading} ${styles.dropdownHeading}`}
									>
										<Image
											src={`/iconixto/solid/database${
												NavBar.Ecosystem.link2 ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										Unified lending platform
										<Image
											src={`/iconixto/solid/arrow-right${
												NavBar.Network.link2 ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
									<div
										onClick={() =>
											setNavBar({
												...NavBar,
												Ecosystem: {
													link1: false,
													link2: false,
													link3: true,
													link4: false,
												},
											})
										}
										className={`${
											NavBar.Ecosystem.link3 ? styles.dropdownHeadingActive : ''
										} ${styles.dropdownHeading} ${styles.dropdownHeading}`}
									>
										<Image
											src={`/iconixto/solid/database${
												NavBar.Ecosystem.link3 ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										NFT
										<Image
											src={`/iconixto/solid/arrow-right${
												NavBar.Ecosystem.link3 ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
									<div
										onClick={() =>
											setNavBar({
												...NavBar,
												Ecosystem: {
													link1: false,
													link2: false,
													link3: false,
													link4: true,
												},
											})
										}
										className={`${
											NavBar.Ecosystem.link4 ? styles.dropdownHeadingActive : ''
										} ${styles.dropdownHeading} ${styles.dropdownHeading}`}
									>
										<Image
											src={`/iconixto/solid/database${
												NavBar.Ecosystem.link4 ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										Validator
										<Image
											src={`/iconixto/solid/arrow-right${
												NavBar.Ecosystem.link4 ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
								</div>
								<div className={styles.dropdownLeft}>
									{/* <div
										style={{ fontSize: '14px', color: '#999' }}
										classNames={styles.LeftSuperText}
									>
										Browse By Use
									</div> */}
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '1rem',
										}}
										classNames={'leftList'}
									>
										{!NavBar.Ecosystem.link4 ? (
											<div
												style={{
													textDecoration: 'none',
												}}
												className={styles.LeftSubListItem}
											>
												{/* <Image
												src='/iconixto/solid/grid-2.svg'
												width='24'
												height='24'
												style={{ fill: '#AD79FF' }}
											/> */}
												<div className={styles.LeftSubListText}>
													<div
														style={{
															display: 'flex',
															flexDirection: 'row',
															alignItems: 'center',
															justifyContent: 'space-between',
															width: '100%',
														}}
														className={styles.LeftSubListItemHeading}
													>
														<span>Explore</span>{' '}
														<Image
															src={`/iconixto/solid/arrow-right.svg`}
															width='20'
															height='20'
															style={{
																transform: 'rotate(-45deg)',
																marginLeft: '1rem',
															}}
														/>
													</div>
													<div className={styles.LeftSubListItemSub}>
														{NavBar.Ecosystem.link1
															? 'Our blockchain solution combats counterfeiting with secure, transparent product authentication across industries'
															: NavBar.Ecosystem.link2
															? 'A blockchain-driven lending platform designed to provide users with a consolidated view of loan options'
															: NavBar.Ecosystem.link3
															? 'Jumbo Blockchain introduces an innovative approach by utilizing non-fungible tokens (NFTs) as native tokens, transforming our patents into real-world assets represented as NFTs'
															: ''}
													</div>
												</div>
											</div>
										) : (
											<div
												style={{
													textDecoration: 'none',
												}}
												className={styles.LeftSubListItem}
											>
												<Image
													src='/iconixto/solid/rockect-alt.svg'
													width='24'
													height='24'
													style={{ fill: '#AD79FF' }}
												/>
												<div className={styles.LeftSubListText}>
													<div className={styles.LeftSubListItemHeading}>
														Coming Soon
													</div>
													<div className={styles.LeftSubListItemSub}>{` `}</div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<span className={styles.link1}>
							<p>Community</p>{' '}
							<ArrowDown2
								className={styles.arrowDown}
								size='16'
								color='#000'
							/>
						</span>
						<div className={`${styles.dropdown} ${styles.Drop3}`}>
							<div className={styles.dropdownContainer}>
								<div className={styles.dropdownRight}>
									<div
										onClick={() =>
											setNavBar({
												...NavBar,
												Community: {
													validator: true,
													advocate: false,
												},
											})
										}
										className={`${
											NavBar.Community.validator
												? styles.dropdownHeadingActive
												: ''
										} ${styles.dropdownHeading} ${styles.BadgeNew}`}
									>
										<Image
											src={`/iconixto/solid/like${
												NavBar.Community.validator ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										{/* <DashboardIcon /> */}
										Become a Validator
										<Image
											src={`/iconixto/solid/arrow-right${
												NavBar.Community.validator ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
									<div
										onClick={() =>
											setNavBar({
												...NavBar,
												Community: {
													validator: false,
													advocate: true,
												},
											})
										}
										className={`${
											NavBar.Community.advocate
												? styles.dropdownHeadingActive
												: ''
										} ${styles.dropdownHeading} ${styles.dropdownHeading}`}
									>
										<Image
											src={`/iconixto/solid/verified${
												NavBar.Community.advocate ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ color: '#AD79FF' }}
										/>
										Developer Advocate
										<Image
											src={`/iconixto/solid/arrow-right${
												NavBar.Community.advocate ? '-active' : ''
											}.svg`}
											width='20'
											height='20'
											style={{ fill: '#AD79FF' }}
										/>
									</div>
								</div>
								<div className={styles.dropdownLeft}>
									<div
										style={{ fontSize: '14px', color: '#999' }}
										classNames={styles.LeftSuperText}
									>
										Browse By Feature
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '1rem',
										}}
										classNames={'leftList'}
									>
										<div
											style={{
												textDecoration: 'none',
											}}
											className={styles.LeftSubListItem}
										>
											<Image
												src='/iconixto/solid/rockect-alt.svg'
												width='24'
												height='24'
												style={{ fill: '#AD79FF' }}
											/>
											<div className={styles.LeftSubListText}>
												<div className={styles.LeftSubListItemHeading}>
													{NavBar.Community.validator
														? 'Join Our Validator Pool'
														: 'Become our Developer Advocate'}
												</div>
												{/* <div className={styles.LeftSubListItemSub}>
													View transactions
												</div> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<span className={styles.link}>Team</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
