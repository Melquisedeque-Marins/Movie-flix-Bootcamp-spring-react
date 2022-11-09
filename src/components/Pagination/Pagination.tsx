import  ArrowIcon from '../../assets/img/arrow.svg';
import ReactPaginate from 'react-paginate';
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';

import './Pagination.css';

type Props = {
    forcePage?: number;
    pageCount: number;
    range: number;
    onChange?: (pageNumber: number) => void;
}

const Pagination = ( { forcePage, pageCount, range, onChange } : Props) => {

    return (
            <ReactPaginate
                forcePage={forcePage}
                pageCount={pageCount}
                pageRangeDisplayed={range}
                marginPagesDisplayed={1}
                containerClassName='pagination-container'
                pageLinkClassName='pagination-item'
                breakClassName='pagination-item'
                previousClassName='arrow-previous'
                nextClassName='arrow-next'
                activeLinkClassName='pagination-link-active'
                disabledClassName='arrow-inactive'
                previousLabel={ <div className="pagination-arrow-container"><Arrow/></div>}
                nextLabel={ <div className="pagination-arrow-container"><Arrow/></div>}
                onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}
                />
    
    );

}

export default Pagination;