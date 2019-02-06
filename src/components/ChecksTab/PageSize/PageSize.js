import React from 'react';
import PropTypes from "prop-types";

const PageSize = (props) => {
    PageSize.propTypes = {
        changePageSize: PropTypes.func.isRequired,
        pageSize: PropTypes.number
    };
    const sizes = [10, 20, 50, 100];
    return (
        <div>
            <pagination-pagesize>
                <p>Показывать</p>
                <pagination-pagesize-buttons>
                    {sizes.map(size => (
                        <button
                            key={size}
                            onClick={() => props.changePageSize(size)}
                            className={props.pageSize === size ? 'active' : ''} >{size}</button>
                    ))}
                </pagination-pagesize-buttons>
                <p>позиций</p>
            </pagination-pagesize>
        </div>
    );
};

export default PageSize;