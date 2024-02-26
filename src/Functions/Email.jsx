import emailjs from "@emailjs/browser"

const sendCustomEmail = (details) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID); //initializing User ID
    emailjs
        .send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            //begin variables defined in template
            {
                subject: details.subject,
                message: details.message,
                reply_to: details.reply_to,
                first_name: details.first_name,
                last_name: details.last_name
            }
            //end template variables
        )
        .then((response) => {
            console.log(response + details.first_name)
        })
        .catch((error) => {
            console.log(error)
        });
};

export { sendCustomEmail }