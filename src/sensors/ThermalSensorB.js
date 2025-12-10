//thermalSensor de la camera B avec sa propre logique qu'on viendra integrer grâce au Adapter :) 
class ThermalSensorB {
    constructor(position){
        this.position = position;
    }
    scanSignatureThermalSpecific(){
        // ici ducoup on va retourner la donné en format json pour ne pas être comme avec la camera A
        const detectionType = "ThermalSensorB";
        const now = new Date().toISOString();

        return{
            sensor: this.name,
            detection: detectionType,
            date:now,
            position:this.position
        }
    }
}
export default  ThermalSensorB;