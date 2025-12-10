import fetch from "node-fetch";

class DiscordObservers {
    constructor() {
        this.webhookUrl = process.env.DISCORD_WEBHOOK_URL;

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
