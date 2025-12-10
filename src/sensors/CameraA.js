//classe du capteur A
class CameraA {
    constructor(location) { //location ici est son emplacement dan une piece
        this.location = location;
        this.type = "CameraA";
      }

      detect(){
        const message = `Mouvement détécté par ${this.type} à ${this.location}`;
        console.log(message);
        return message;
      }
}
export default CameraA;