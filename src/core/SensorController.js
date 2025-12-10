class SensorController {
    constructor(sensor,notificationCenter,roomName){ //logique pour controler les capteurs dans differentes pieces
        this.sensor = sensor;
        this.notificationCenter = notificationCenter;
        this.roomName = roomName;
    }

    triggerSensor(){
        const alertMessage = this.sensor.detect(); //on utilise notre methode detect pour chacun des capteur et recupere le message,
                                                // la piece et le type de capteur
        const event = {
            message : alertMessage,
            room: this.roomName,
            sensorType: this.sensor.type || this.sensor.constructor.name,
            timestamp: new Date().toISOString()
        };

        console.log(`Event généré dans la pièce ${this.roomName} par le capteur ${event.sensorType} : ${event.message}`);
        this.notificationCenter.notify(event);
        return event; 
    }
        }

export default  SensorController;