class LogObserver{
    constructor(logService){
        this.logService = logService;
    }
    update(eventMessage){
        const logEntry = `Log Entry: ${new Date().toISOString()} - ${eventMessage}`;
        console.log(`Enregistrement du log: "${logEntry}"`);
       
    }
}
export default LogObserver;