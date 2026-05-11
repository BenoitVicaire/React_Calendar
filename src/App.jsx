import './App.css';
import Day from "./components/Day";

const MONTH = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
const DAY = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedie','Dimanche'];

function App(){

	
	const DAY_LETTER=[];
	DAY.map((element => {
		DAY_LETTER.push(element.charAt(0));
	}))

	const ROW = [];
	for(let i=1;i<=31;i++){
		ROW.push(i)
	}

	function handleClick(event){
		document.querySelectorAll(".selected").forEach(e=>{
			e.classList.remove("selected");
		});
		
		event.currentTarget.classList.add("selected");

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
				<section className="grid-7-days">
					{ROW.map((e , index)=>{
						return(
							<Day 
								key={index}
								jour={e} 
								className='day backgroundOrange' 
								onClick={handleClick}
							/>
						)
					})}
				</section>
			</article>
		</>
	);

	

}



export default App
