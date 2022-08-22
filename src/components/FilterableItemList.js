import { useState } from 'react'

import { ItemsList } from './ItemsList'


function FilterableItemList(props) {

	const [category, setCategory] = useState('All');

	function filteredItems () {
		let items = props.data;
		if ( category !== 'All' ) {
			items = items.filter((item) => item.category.name === category);
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
	<div className="flex justify-end mb-4">
		<select name="" id="" 
		className="p-2 mb-4 rounded-lg shadow-lg outline-none text-slate-800" 
		onChange={handleChange}>
			<option value="All">All</option>
			<option value="Aerosol">Aerosol</option>
			<option value="Alcohol en Aerosol">Alcohol en Aerosol</option>
			<option value="Alcohol en Gel">Alcohol en Gel</option>
			<option value="Alcohol en Spray">Alcohol en Spray</option>
			<option value="Barra">Barra</option>
			<option value="Jabón Barra">Jabón Barra</option>
			<option value="Jabón Líquido">Jabón Líquido</option>
			<option value="Talco">Talco</option>
		</select>
	</div>
	)
}

export { FilterableItemList }