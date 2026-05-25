"use server";

import nodemailer from "nodemailer";

function getTransporter() {
	return nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_APP_PASSWORD,
		},
	});
}

export async function sendConfirmationEmail(email: string, name: string) {
	return getTransporter().sendMail({
		from: process.env.GMAIL_USER,
		to: email,
		subject: "Soumission du formulaire de contact de Romain Siré",
		text: `Bonjour ${name}, j'ai bien reçu votre message et je vous répondrai dès que possible.`,
	});
}

export async function sendContactMail(email: string, name: string, message: string) {
	return getTransporter().sendMail({
		from: process.env.GMAIL_USER,
		to: process.env.CONTACT_RECIPIENT,
		replyTo: email,
		subject: `Nouveau message de ${name} sur votre site !`,
		text: message,
	});
}
