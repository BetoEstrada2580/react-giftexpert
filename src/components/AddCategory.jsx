import { useState } from "react"
import { PropTypes } from "prop-types"


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
        <form onSubmit={(e) => onSubmit(e)} aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(e) => onInputChange(e)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}