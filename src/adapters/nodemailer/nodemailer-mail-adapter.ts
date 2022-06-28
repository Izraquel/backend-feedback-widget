import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fb40aceea33ae5",
    pass: "9884cb60dace7f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Raquel Izidorio <raquell-izidorio_29@hotmail.com>',
      subject,
      html: body
    })
  }
}