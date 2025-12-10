import ThermalSensorB  from "./ThermalSensorB.js";
class ThermalSensorBAdapter{
    constructor(position){
// ici on va encapsuler le capteur ThermalSensorB pour ensuite l'adapter au format des autres capteurs
        this.sensorB = new ThermalSensorB(position);
        this.type = "ThermalSensorBAdapter";
}   ;
detect(){
    //ici on reprends les valeurs de la camera b et affiche le message au même format que pour la caméra A
    const date = this.sensorB.scanSignatureThermalSpecific();
    return `Détection thermique par ${this.type} à la position ${date.position} le ${date.date}`;
}
}
export default ThermalSensorBAdapter;