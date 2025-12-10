class NotificationsCenter {
    constructor(){
        this.observers = [];
    }

    subscribe(observer){ //ajouter un observateur
        this.observers.push(observer);
    }
    unsubscribe(observer){ //
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyAll(message){ //notifier tous les observateurs
        this.observers.forEach(observer => observer.update(message));
    }
    notify(eventMessage){ //notifier un evenement specifique
        this.observers.forEach(o => {
            if (typeof o.notify === 'function') {
                o.notify(eventMessage);
            }
        })
}
}
export default  NotificationsCenter;