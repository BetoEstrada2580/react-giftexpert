import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Test de <GifItem/>', () => {

    const title = "Berserk";
    const url = "https://i.blogs.es/755972/berserk-manga-2/1366_2000.jpeg";

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(
            <GifItem
                title={title}
                url={url}
            />);
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toEqual(url);
        expect(alt).toEqual(title);
    })

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })

});