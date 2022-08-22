import { render, screen } from '@testing-library/react';
import { Item } from '../Item';

describe('Item Component', () => {
	render(<Item 
		name="Rexona Clinical Men Antitranspirante Aerosol Sport Strengh 110ml"
		category="Aerosol"
		imgSrc="https://cdn.sanity.io/images/27438tds/rexona-staging-ar/c70768fb7259661875914a289ea8791b3809db4c-5000x5000.png"
		imgAlt="Envase de Antitranspirante en Aerosol Rexona Clinical hombre Sport Strengh 110ml"
		description={"3 veces más protección que un antitranspirante común con el desodorante Rexona Clinical"}
		key="-e1a21962-4363-57d5-9d75-09c5dc7ea624" 
	/>)

	const item = screen.getByText("Aerosol").parentElement;
	const img = screen.getByRole("img");

	test("Item Rendering", () => {
		expect(item).toBeInTheDocument();
	})

	test("Item name", () => {
		expect(item).toHaveTextContent("Rexona Clinical Men Antitranspirante Aerosol Sport Strengh 110ml");
	})

	test("Item category", () => {
		expect(item).toHaveTextContent("Aerosol");
	})

	test("Item description", () => {
		expect(item).toHaveTextContent("3 veces más protección que un antitranspirante común con el desodorante Rexona Clinical");
	})

	test("Item image", () => {
		expect(img).toHaveAttribute("src", "https://cdn.sanity.io/images/27438tds/rexona-staging-ar/c70768fb7259661875914a289ea8791b3809db4c-5000x5000.png");
	})

	test("Item image alt", () => {
		expect(img).toHaveAttribute("alt", "Envase de Antitranspirante en Aerosol Rexona Clinical hombre Sport Strengh 110ml");
	})

});