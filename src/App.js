import logo from './logo.svg';
import './App.css';

function FilterableItemList() {
	
	return (
		<ItemsList />
	)
}

function Filter() {

}

function ItemsList() {

	return (
		<div className='grid grid-cols-4'>
			<Item />
		</div>
	)
}

function Item() {

	return (
		<div className="p-4 duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
			<img
			src="https://cdn.sanity.io/images/27438tds/rexona-staging-ar/c70768fb7259661875914a289ea8791b3809db4c-5000x5000.png"
			alt="Envase de Antitranspirante en Aerosol Rexona Clinical hombre Sport Strengh 110ml"
			className="h-[200px] mx-auto" />
			<p className='pt-1 text-sm text-slate-500'>Aerosol</p>
			<p className="pt-1 font-bold text-slate-800">Rexona Clinical Men Antitranspirante Aerosol Sport Strengh 110ml</p>
			<p className='pt-1 text-sm text-slate-800'>3 veces más protección que un antitranspirante común con el desodorante Rexona Clinical</p>
		</div>
	);
}



function App() {

  return (
    <main className="mx-[15%] my-[5%]">
		<FilterableItemList />
    </main>
  );
}

export default App;
