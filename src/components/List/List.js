import React from 'react';
import './List.css'

const List = (props) => {

    const { bookList } = props.bookList
    return (
        <div>
            <h1> BookList:{bookList}</h1>

        </div>
    );
};

export default List;