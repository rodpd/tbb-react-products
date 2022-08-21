import logo from './logo.svg';
import './App.css';

function FilterableItemList(props) {

	return (
		<ItemsList data={props.data} />
	)
}

function Filter(props) {

}

function ItemsList(props) {

	const itemList = props.data.map((item) => 
	<Item name={item.name}
	category={item.category.name}
	imgSrc={item.images[0].asset.url} 
	imgAlt={item.images[0].alt}
	description={item.shortDescription} />
	);

	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
			{itemList}
		</div>
	)
}

function Item(props) {

	return (
		<div className="p-4 duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
			<img
			src={props.imgSrc}
			alt={props.imgAlt}
			className="h-[200px] mx-auto" />
			<p className='pt-1 text-sm text-slate-500'>{props.category}</p>
			<p className="pt-1 font-bold text-slate-800">{props.name}</p>
			<p className='pt-1 text-sm text-slate-800'>{props.description}</p>
		</div>
	);
}



function App() {

	const data = require('./data/productsCategory.json').data.nodes;

	return (
    <main className="mx-[10%] sm:mx-[15%] my-[5%]">
		<FilterableItemList data={data}/>
    </main>
  );
}

export default App;
