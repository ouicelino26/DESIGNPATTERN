//motion sensor de la caméra A
class MotionSensorA {
    constructor(location){ //toujours l'emplacement de la piece :) 
        this.location = location;
        this.type = "MotionSensorA";
        }

        detect(){
            const detected = this._simulateMotion();
            if(detected){
                const message = `Mouvement détecté par ${this.type} à ${this.location}`;
                console.log(message);
                return message;
            }else{
                const message = `Aucun mouvement détecté par ${this.type} à ${this.location}`;
                console.log(message);
                return message;
            }
        }
    _simulateMotion(){
        return Math.random() < 0.5; // on va simuler le mouvement 
    }
}
export default MotionSensorA;