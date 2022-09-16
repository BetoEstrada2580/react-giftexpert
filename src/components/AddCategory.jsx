import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        // setcategories(categories => [inputValue, ...categories]);
        onNewCategory(newInputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(e) => onInputChange(e)}
            />
        </form>
    )
}