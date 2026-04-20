import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ message: 'Täytä kaikki kentät.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Virheellinen sähköpostiosoite.' });
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `Uusi yhteydenotto sivuilta – ${name}`,
      replyTo: email,
      html: `
        <h2>Uusi yhteydenotto verkkosivuilta</h2>
        <p><strong>Nimi:</strong> ${name}</p>
        <p><strong>Puhelin:</strong> ${phone}</p>
        <p><strong>Sähköposti:</strong> ${email}</p>
        <p><strong>Viesti:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `
    });

    if (error) {
      return res.status(500).json({ message: 'Viestin lähetys epäonnistui.', error });
    }

    return res.status(200).json({ message: 'Viesti lähetetty onnistuneesti.' });
  } catch (error) {
    return res.status(500).json({ message: 'Palvelinvirhe.', error: error.message });
  }
}
