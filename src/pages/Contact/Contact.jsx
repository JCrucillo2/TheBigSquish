import "./Contact.scss";
import ItemsImage from "@/assets/items-preview.webp";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_USER_ID).then(
			(result) => {
				console.log(result.text);
				e.target.reset();
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="contact-wrapper">
			<h2 className="contact-title">Contact</h2>
			{/* <img src={ItemsImage} alt="" /> */}

			<div className="form-wrapper">
				<form ref={form} onSubmit={sendEmail} className="contact-form">
					<div>
						<label htmlFor="user_name">Name:</label>
						<input type="text" name="user_name" required />
					</div>

					<div>
						<label htmlFor="user_email">Email:</label>
						<input type="email" name="user_email" required />
					</div>

					<div>
						<label htmlFor="user_phone">Phone Number:</label>
						<input type="tel" name="user_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
					</div>

					<div>
						<label htmlFor="message">Message:</label>
						<textarea name="message" />
					</div>
					<input className="btn btn-bright" type="submit" value="Send" />
				</form>
			</div>
		</div>
	);
};
export default Contact;
