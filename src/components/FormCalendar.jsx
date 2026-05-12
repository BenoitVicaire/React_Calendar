
function FormCalendar({onSubmit}){

    return(
        <form 
            onSubmit={onSubmit}
        >
            <h2>Title</h2>
            <input 
                type="text" 
                name="eventName" 
                id="eventName" 
                placeholder="Nom de l'event" 
            />
            <input 
                type="datetime" 
                name="eventDate" 
                id="eventDate" 
                placeholder="Date de l'event"
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