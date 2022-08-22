function Item(props) {

	return (
		<div className="p-4 duration-300 ease-in-out bg-white rounded-lg shadow-lg cursor-default hover:scale-105 group">
			<img
			src={props.imgSrc}
			alt={props.imgAlt}
			className="h-[200px] mx-auto" />
			<p className='pt-1 text-sm text-slate-500'>{props.category}</p>
			<p className="pt-1 font-bold text-slate-800 group-hover:text-blue-700">{props.name}</p>
			<p className='pt-1 text-sm text-slate-800'>{props.description}</p>
		</div>
	);
}

export { Item }