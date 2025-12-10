//capteur de temperature de la caméra A
class TemperatureSensorA {
    constructor(location,threshold){ //location ici est encore l'emplacement de la piece 
                              //threshold est la temperature a laquel le capteur va se déclencher
        this.location = location;
        this.threshold = threshold;
        this.type = "TemperatureSensorA";
      }

    
    detect() {
      
        const currentTemp = this._simulateTemperature();

        if (currentTemp >= this.threshold) {
            return `[ALERTE] Température élevée (${currentTemp}°C) dans ${this.location} (seuil : ${this.threshold}°C)`;
        } else {
            return `[INFO] Température normale (${currentTemp}°C) dans ${this.location}`;
        }
    }
    _simulateTemperature(){
        return Math.floor(Math.random() * 50); //température aléatoire entre 0 et 50 C°
    }
}
export default TemperatureSensorA;