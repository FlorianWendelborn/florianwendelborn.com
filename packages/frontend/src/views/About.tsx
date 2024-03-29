import axios from 'axios'
import React from 'react'

import { Hero } from '../components/Hero'
import { ISkill, skills } from '../data'

interface IAboutState {
	followers: null | number
	following: null | number
	publicRepos: null | number
}

/* eslint-disable jsx-a11y/alt-text */
const Skill = (props: ISkill) => (
	<article className="media" data-tip={props.description}>
		<figure className="media-left">
			<p className="image is-24x24">
				<img src={props.image} />
			</p>
		</figure>
		<div className="media-content">
			<div className="content">
				<p>{props.name}</p>
			</div>
		</div>
	</article>
)
/* eslint-enable jsx-a11y/alt-text */

export class AboutView extends React.Component {
	public state: IAboutState = {
		followers: null,
		following: null,
		publicRepos: null,
	}

	public async componentDidMount() {
		const response = await axios.get(
			`https://api.github.com/users/FlorianWendelborn`,
		)

		this.setState({
			followers: response.data.followers,
			following: response.data.following,
			publicRepos: response.data.public_repos,
		})
	}

	public render() {
		return (
			<>
				<Hero title="About Me" description="Hobbies, Skills, and Résumé" />
				{this.renderTiles()}
			</>
		)
	}

	private renderBasics() {
		return (
			<div>
				I’ve been a full-stack web developer since 2005. I currently live in{' '}
				<strong>Berlin, Germany</strong>.
			</div>
		)
	}

	private renderGitHub() {
		return (
			<nav className="level is-mobile">
				<div className="level-item has-text-centered">
					<a
						href="https://github.com/FlorianWendelborn?tab=repositories"
						rel="noopener noreferrer"
						target="_blank"
					>
						<p className="heading">Repositories</p>
						<p className="title">{this.state.publicRepos}</p>
					</a>
				</div>
				<div className="level-item has-text-centered">
					<a
						href="https://github.com/FlorianWendelborn?tab=followers"
						rel="noopener noreferrer"
						target="_blank"
					>
						<p className="heading">Followers</p>
						<p className="title">{this.state.followers}</p>
					</a>
				</div>
				<div className="level-item has-text-centered">
					<a
						href="https://github.com/FlorianWendelborn?tab=following"
						rel="noopener noreferrer"
						target="_blank"
					>
						<p className="heading">Following</p>
						<p className="title">{this.state.following}</p>
					</a>
				</div>
			</nav>
		)
	}

	private renderTiles() {
		return (
			<section className="section">
				<div className="container">
					<div className="tile is-ancestor">
						<div className="tile is-vertical is-8">
							<div className="tile">
								<div className="tile is-parent is-vertical">
									<article className="tile is-child box">
										<h2 className="title">Basics</h2>
										{this.renderBasics()}
									</article>
									<article className="tile is-child box">
										<h2 className="title">Opensource Contributor</h2>

										<p>
											I have a lot of small side-projects. Most of them are
											open-sourced.
										</p>
										<br />
										{this.renderGitHub()}
									</article>
								</div>
								<div className="tile is-parent">
									<article className="tile is-child box">
										<h2 className="title">Hobbies</h2>
										TBA
									</article>
								</div>
							</div>
							<div className="tile is-parent">
								<article className="tile is-child box">
									<h2 className="title">Achievements</h2>
									<p>2006 New York Times’ Person of the Year</p>
									<p><a href="https://archiveprogram.github.com">Something I made is stored in an arctic vault for at least 1000 years</a></p>
								</article>
							</div>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child box">
								<h2 className="title">Technologies</h2>
								{skills.map((skill, index) => (
									<Skill {...skill} key={index} />
								))}
							</article>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
