/*
|-----------------------------------------------------------------
|	Email
|-----------------------------------------------------------------
|
|	Email
|
*/
let config = require('../../../config.json')
let nodemailer = require('nodemailer')

class Email {
	constructor() {

	}

	send(packet) {
		return new Promise((resolve,reject) => {
			let transporter = nodemailer.createTransport({
				service: 'Gmail',
			    auth: {
			        user: process.env.NOTIFICATION_EMAIL,
			        pass: process.env.NOTIFICATION_EMAIL_PW
			    }
			})

			if (!packet.to) return reject('To required to send an email.')

			let mailOptions = {
				from:packet.from || '"FusionAdmin" <accounts@fusionware.com>',
				to:packet.to,
				subject:packet.subject || "Fusionware Message",
				text:packet.text || "",
				html:packet.html || ""
			}

			transporter.sendMail(mailOptions,(error,info) => {
				if (err) return reject(err)
				return resolve(info)
			})
		})
	}
}

module.exports = new Email()