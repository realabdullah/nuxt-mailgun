import formData from "form-data";
import Mailgun from "mailgun.js";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const mailgun = new Mailgun(formData);
        const mg = mailgun.client({
            username: "api",
            key: process.env.MAILGUN_API_KEY!,
        });

        const data = {
            from: "User <admin@test.test>",
            to: body.email,
            subject: "Welcome to test app!",
            text: `Hi ${body.name}! Welcome to our test app! We're glad to have you onBoard!.`,
        };

        await mg.messages.create(process.env.MAILGUN_DOMAIN!, data);
    } catch (error) {
        console.log("error send email", error);
    }
});
