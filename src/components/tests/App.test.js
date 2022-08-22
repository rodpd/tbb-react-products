import getData from '../../App'


test('Data loaded', () => {
	expect(getData()).toBeDefined();
});