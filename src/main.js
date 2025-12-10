import CameraA from "./sensors/CameraA.js";
import TemperatureSensorA from "./sensors/TemperatureSensorA.js";
import MotionSensorA from "./sensors/MotionSensorA.js";    
import ThermalSensorBAdapter from "./sensors/ThermalSensorBAdapter.js";
import Room from "./core/Room.js";
import EmailObserver from "./notifications/EmailObserver.js";
import DiscordObservers from "./notifications/DiscordObservers.js";
import LogObserver from "./notifications/LogObserver.js";
import dotenv from "dotenv";
dotenv.config();

// on va commencer par créer nos pièce du coup 
const salon = Room.getInstance("Salon");
const cuisine = Room.getInstance("Cuisine");
const chambre = Room.getInstance("Chambre");
const salleDeBain = Room.getInstance("Salle de Bain");
const garage = Room.getInstance("Garage");
const veranda = Room.getInstance("Véranda");


// maintenant on va ajouter des observateurs de notification a chaque piece
const discordObservers = new DiscordObservers();
veranda.addNotificationObserver(discordObservers);
const emailObserver = new EmailObserver();
const logObserver = new LogObserver();
// j'ajoute mes piece a chaque notification observer que j'ai crée 
//--[discord]
salon.addNotificationObserver(discordObservers);
cuisine.addNotificationObserver(discordObservers);
chambre.addNotificationObserver(discordObservers);
salleDeBain.addNotificationObserver(discordObservers);
garage.addNotificationObserver(discordObservers);
veranda.addNotificationObserver(discordObservers);
 
//--[email]
salon.addNotificationObserver(emailObserver);
cuisine.addNotificationObserver(emailObserver);
chambre.addNotificationObserver(emailObserver);
salleDeBain.addNotificationObserver(emailObserver);
garage.addNotificationObserver(emailObserver);
veranda.addNotificationObserver(emailObserver);

//--[log]
salon.addNotificationObserver(logObserver);
cuisine.addNotificationObserver(logObserver);
chambre.addNotificationObserver(logObserver);
salleDeBain.addNotificationObserver(logObserver);
garage.addNotificationObserver(logObserver);
veranda.addNotificationObserver(logObserver);

// Passons au capteur pour cahque piece : 
//--[Salon]
const cameraASalon = new CameraA("Salon");
const tempSensorASalon = new ThermalSensorBAdapter({room : "Salon",x : 10, y: 20}); //on va tester ici l'adaptateur du capteur B
const motionSensorASalon = new MotionSensorA("Salon");

salon.addSensor(cameraASalon);
salon.addSensor(tempSensorASalon);
salon.addSensor(motionSensorASalon);
//--[Cuisine]
const cameraACuisine = new CameraA("Cuisine");
const tempSensorACuisine = new TemperatureSensorA("Cuisine",30); 
const motionSensorACuisine = new MotionSensorA("Cuisine");

cuisine.addSensor(cameraACuisine); 
cuisine.addSensor(tempSensorACuisine);
cuisine.addSensor(motionSensorACuisine);
//--[Chambre]
const cameraAChambre = new CameraA("Chambre");
const tempSensorAChambre = new TemperatureSensorA("Chambre",28); 
const motionSensorAChambre = new MotionSensorA("Chambre");
chambre.addSensor(cameraAChambre);
chambre.addSensor(tempSensorAChambre);
chambre.addSensor(motionSensorAChambre);
//--[Salle de Bain]
const cameraASalleDeBain = new CameraA("Salle de Bain");
const tempSensorASalleDeBain =  new ThermalSensorBAdapter({room : "Salle de Bain",x : 15, y: 5});
const motionSensorASalleDeBain = new MotionSensorA("Salle de Bain");
salleDeBain.addSensor(cameraASalleDeBain);
salleDeBain.addSensor(tempSensorASalleDeBain);
salleDeBain.addSensor(motionSensorASalleDeBain);
//--[Garage]
const cameraAGarage = new CameraA("Garage");
const tempSensorAGarage = new TemperatureSensorA("Garage",25); 
const motionSensorAGarage = new MotionSensorA("Garage");
garage.addSensor(cameraAGarage);
garage.addSensor(tempSensorAGarage);
garage.addSensor(motionSensorAGarage);
//--[Véranda]
const cameraAVeranda = new CameraA("Véranda");
const tempSensorAVeranda = new ThermalSensorBAdapter({room : "Véranda",x : 4, y: 1});
const motionSensorAVeranda = new MotionSensorA("Véranda");
veranda.addSensor(cameraAVeranda);
veranda.addSensor(tempSensorAVeranda);
veranda.addSensor(motionSensorAVeranda);

// on simule le déclenchement des capteurs dans chaque pieèce
salon.triggerAllSensors();
cuisine.triggerAllSensors();
chambre.triggerAllSensors();
salleDeBain.triggerAllSensors();
garage.triggerAllSensors();
veranda.triggerAllSensors();

//on peut aussi tester le déclenchement d'un capteur spécifique avec la methode triggerSensorByIndex
salon.triggerSensorByIndex(0); // déclenche le premier capteur du salon
cuisine.triggerSensorByIndex(1);


