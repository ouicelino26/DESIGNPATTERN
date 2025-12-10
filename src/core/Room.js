import NotificationsCenter from "../notifications/NotificationsCenter.js";
import SensorController from "./SensorController.js";
// on va faire une classe Room qui va représenter une piece avec ses capteurs et son système de notification (un multiton :))
class Room {   

    static instances = {};  //static propriété pour stocker les instances de Room

    static getInstance(roomName) { 
        if(!Room.instances[roomName]) {
            Room.instances[roomName] = new Room(roomName);
        }
        return Room.instances[roomName];
    }

    constructor(roomName) {
        this.roomName = roomName;
        this.sensors = []; //tableau qui va stocker les camera de chacune des pièces ;) 
        this.notificationCenter = new NotificationsCenter(); // chaque piece a son propre centre de notification donc c'est propre observer
    }
    addNotificationObserver(observer) { // methode pour ajouter un observer au centre de notification de la piece
        this.notificationCenter.subscribe(observer);
    }

    addSensor(sensor) { // methode pour ajouter un capteur a la piece        
        const controller = new SensorController(
            sensor,
            this.notificationCenter,
            this.roomName
        );
        this.sensors.push({ sensor, controller });
    }
    triggerAllSensors() { // methode pour declencher tous les capteurs d'une piece 
        console.log ("Déclenchement de tous les capteurs dans la pièce : " + this.roomName);
        this.sensors.forEach(({controller}) => {
            controller.triggerSensor();
        })
    }
    triggerSensorByIndex(index) { // methode pour declencher un capteur specifique d'une piece
        const item = this.sensors[index];
        if(item) {
            item.controller.triggerSensor();
        } else {
            console.log(`Aucun capteur trouvé à l'index ${index} dans la pièce ${this.roomName}`);
        }
    }

}
export default Room; 