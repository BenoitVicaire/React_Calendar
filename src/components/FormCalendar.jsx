
function FormCalendar({onSubmit}){

    return(
        <form 
            action={onSubmit}
        >
            <h2>Créer un evenement</h2>
            <input 
                type="text" 
                name="eventName" 
                id="eventName" 
                placeholder="Nom de l'event" 
            />
            <input 
                type="datetime" 
                name="eventHour" 
                id="eventHour" 
                placeholder="Heure de l'event"
            />
            <input 
                type="text" 
                name="eventLocation" 
                id="eventLocation" 
                placeholder="Lieu"
            />
            <input type="submit" value="Créer" />
        </form>
    )
};

export default FormCalendar