import * as React from 'react'
import { Hero } from 'src/components/Hero'

const ContactForm = () => (
	<section className="section">
		<div className="container">
			<div className="field">
				<label className="label">Name</label>
				<div className="control">
					<input className="input" type="text" placeholder="Elon Musk" />
				</div>
			</div>
			<div className="field">
				<label className="label">Subject</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="Let’s fly to Mars together!"
					/>
				</div>
			</div>
			<div className="field">
				<label className="label">Email</label>
				<div className="control has-icons-left has-icons-right">
					<input
						className="input is-danger"
						type="email"
						placeholder="elon.musk@spacex.com"
					/>
					<span className="icon is-small is-left">
						<i className="fas fa-envelope" />
					</span>
					<span className="icon is-small is-right">
						<i className="fas fa-exclamation-triangle" />
					</span>
				</div>
				<p className="help is-danger">This email is invalid</p>
			</div>
			<div className="field">
				<label className="label">Subject</label>
				<div className="control">
					<div className="select">
						<select>
							<option>Select dropdown</option>
							<option>With options</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export class ContactView extends React.Component {
	public render() {
		return (
			<>
				<Hero
					title="Contact Me"
					description="Feel free to get in touch. Doesn’t matter what it’s about."
				/>
				<ContactForm />
			</>
		)
	}
}
