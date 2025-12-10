
class DiscordObservers {
    constructor() {
    

        this.webhookUrl = "https://discordapp.com/api/webhooks/1448324026802900993/oQVq5bGMGaZWlxzNj63Rsj21KOn0KuayXTqr_lUUDD5jiDryE5DXzlrF7md9rTZZP_B4"

        if (!this.webhookUrl) {
            console.error(" Aucun webhook Discord défini dans .env !");
        }
    }

    async update(event) {
        const discordMessage = {
            content: ` Alerte capteur déclenché : ${event.message}`
        };

        try {
            const response = await fetch(this.webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(discordMessage)
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            console.log(" Notification Discord envoyée.");
        } catch (error) {
            console.error(" Erreur lors de l'envoi Discord :", error);
        }
    }
}

export default DiscordObservers;
