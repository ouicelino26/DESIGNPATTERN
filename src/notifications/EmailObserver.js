class EmailObserver {
    constructor(emailService) {
        this.emailService = emailService;
    }
    update(eventMessage) {
        const subject = "Notification de Sécurité";
        const body = `Alerte: ${eventMessage}`;
        console.log(`Envoi d'un email avec le sujet: "${subject}" et le corps: "${body}"`);
        //this.emailService.sendEmail(subject, body);
    }
}
export default EmailObserver;