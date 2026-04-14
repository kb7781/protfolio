import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'kunalbothra.work@gmail.com',
            subject: `New Portfolio Message from ${name}`,
            text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email. Ensure your EMAIL_USER and EMAIL_PASS are configured.' }), { status: 500 });
    }
}
