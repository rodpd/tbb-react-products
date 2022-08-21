import './App.css';
import { useState } from 'react'

function FilterableItemList(props) {

	const [category, setCategory] = useState('All');

	function filteredItems () {
		let items = props.data;
		if ( category != 'All' ) {
			items = items.filter((item) => item.category.name == category);
		}
		return items;
	}

	function handleCategoryChange(newCategory) {
		setCategory(newCategory);
	}

	return (
		<div>
			<Filter onCategoryChange={handleCategoryChange}/>
			<ItemsList data={filteredItems(category)} />
		</div>
	)
}

function Filter(props) {

	function handleChange(event) {
		props.onCategoryChange(event.target.value);
	}

	return (
	<select name="" id="" className="p-2 mb-4" onChange={handleChange}>
		<option value="All">All</option>
		<option value="Aerosol">Aerosol</option>
		<option value="Alcohol en Aerosol">Alcohol en Aerosol</option>
		<option value="Alcohol en Gel">Alcohol en Gel</option>
		<option value="Alcohol en Spray">Alcohol en Spray</option>
		<option value="Barra">Barra</option>
		<option value="Jabón Barra">Jabón Barra</option>
		<option value="Jabon Líquido">Jabon Líquido</option>
		<option value="Talco">Talco</option>
	</select>
	)
}

function ItemsList(props) {

	const itemList = props.data.map((item) => 
	<Item name={item.name}
	category={item.category.name}
	imgSrc={item.images[0].asset.url} 
	imgAlt={item.images[0].alt}
	description={item.shortDescription}
	key={item.id} />
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
