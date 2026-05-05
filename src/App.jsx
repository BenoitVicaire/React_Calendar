import './App.css';
import Day from "./components/Day";

const MONTH = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
const DAY = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedie','Dimanche'];

function App(){

	
	const DAY_LETTER=[];
	DAY.map((element => {
		DAY_LETTER.push(element.charAt(0));
	}))
	console.log(DAY_LETTER);

	const ROW = [];
	for(let i=1;i<=31;i++){
		ROW.push(
			<Day jour={i} className="backgroundOrange"/>
		)
	}
	
	return (
		<>
			<h1>Le calendrier de l'apres</h1>
			<article className="card">
				<Day jour={MONTH[9]} className="month"/>
				<section className="grid-7">
					{DAY_LETTER.map((e, index)=>{
						return <Day key={index} jour={e} className='header'/>
					})}
				</section>
				<section className="grid-7-days">
					{ROW.map((e , index)=>{
						return <Day key={index} jour={e} className='day' />
					})}
				</section>
			</article>
		</>
	);

	

}



export default App
