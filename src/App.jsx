import './App.css';
import Day from "./components/Day";
import FormCalendar from './components/FormCalendar';
import { useState } from 'react';
import {DAY, MONTH, EVENT_LIST} from './assets/dataSet';

function App(){
	const DAY_LETTER=[];
	const ROW = [];
	const [selected, setSelected] = useState(null);
	const [eventList,setEventList] = useState(EVENT_LIST);

	DAY.map((element => {
		DAY_LETTER.push(element.charAt(0));
	}))

	for(let i=1;i<=31;i++){
		ROW.push(i)
	}

	function handleClick(index){
		setSelected(index);
	}

	async function handleSubmit(formData){
		const eventName= formData.get("eventName");
		const eventHour= formData.get("eventHour");
		const eventLocation= formData.get("eventLocation");

		console.log("Nom :",eventName);
		console.log("Heure :",eventHour);
		console.log("Lieu :",eventLocation);

		if(eventName =="" || eventHour =="" || eventLocation==""){
			alert("Write something in those input nub")
		}
		else if(selected==null){
			alert("Selectionne une date");
		}else{
		const NEW_EVENEMENT = {
			nom:eventName,
			heure:eventHour,
			lieu:eventLocation,
			index:selected,
			confirmed:true
		}
		console.log(NEW_EVENEMENT);
		
		}
	}
	return (
		<>
			<h1 onClick={handleClick}>Le calendrier de l'apres</h1>
			<article className="card">
				{/* Mois */}
				<Day jour={MONTH[9]} className="month"/>
				{/* Header */}
				<section className="grid-7">
					{DAY_LETTER.map((e, index)=>{
						return <Day key={index} jour={e} className='header'/>
					})}
				</section>
				{/* Jours */}
				<section className="grid-7 days">
					{ROW.map((e , index)=>{
						return(
							<Day 
								key={index}
								jour={e} 
								className={
									selected === index
									? 'day backgroundOrange selected'
									: 'day backgroundOrange'
								} 
								onClick={()=>handleClick(index)}
							/>
						)
					})}
				</section>
			</article>
			<FormCalendar onSubmit={handleSubmit}/>
		</>
	);

	

}



export default App
