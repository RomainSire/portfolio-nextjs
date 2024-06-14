"use server";

import FormData from "form-data";
import Mailgun from "mailgun.js";
import { type IMailgunClient } from "mailgun.js/Interfaces";

/**
 * Get the mailgun client
 */
function getMailgunClient(): IMailgunClient {
	const mailgun = new Mailgun(FormData);
	return mailgun.client({
		username: "api",
		key: process.env.MAILGUN_API_KEY!,
		url: process.env.MAILGUN_URL!,
	});
}

/**
 * Send a confirmation email to the user
 */
export async function sendConfirmationEmail(email: string, name: string) {
	return getMailgunClient().messages.create(process.env.MAILGUN_SENDER_DOMAIN!, {
		from: process.env.MAILGUN_SENDER_ADDRESS!,
		to: email,
		subject: "Contact form submission from Romain Siré",
		text: `Hello ${name}, we have received your message and will get back to you as soon as possible.`,
	});
}

/**
 * Send a contact email to the website owner
 */
export async function sendContactMail(email: string, name: string, message: string) {
	return getMailgunClient().messages.create(process.env.MAILGUN_SENDER_DOMAIN!, {
		from: process.env.MAILGUN_SENDER_ADDRESS!,
		to: [process.env.MAILGUN_SENDER_ADDRESS!],
		"h:Reply-To": email,
		subject: `New message from ${name} on your website!`,
		text: message,
	});
}
