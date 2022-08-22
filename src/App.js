import { FilterableItemList } from './components/FilterableItemList'


function getData() {
	return require('./data/productsCategory.json').data.nodes;
}

function App() {

	const data = getData();

	return (
    <main className="mx-[10%] my-[5%]">
		<FilterableItemList data={data}/>
    </main>
  );
}

export default App;
