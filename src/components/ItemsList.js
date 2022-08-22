import { Item } from './Item'

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
		<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{itemList}
		</div>
	)
}

export { ItemsList }