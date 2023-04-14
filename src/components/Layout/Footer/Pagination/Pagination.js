//styles
import styles from "./Pagination.module.scss";

//import useReactiveVar
import { useReactiveVar } from "@apollo/client";

//import customers store
import { customers } from "stores";

//utils
import { set } from "immutable-modify";
import ReactPaginate from "react-paginate";



const Pagination = () => {

    //get pagination from store
    const { pagination } = useReactiveVar(customers);


    const handlePageChange = ({ selected }) => {
        customers(set(customers(), "pagination.page", selected + 1));
    };


    return pagination.total_pages > 0 && <div className={styles.pagination}>
        <ReactPaginate
            pageCount={pagination.total_pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName={'container'}
            previousLinkClassName={'page'}
            breakClassName={'page'}
            nextLinkClassName={'page'}
            pageClassName={'page'}
            disabledClassName={styles.disabled}
            activeClassName={styles.active}
            nextLabel="→"
            previousLabel="←"
            nextClassName={styles.next}
            previousClassName={styles.previous}
        />
    </div >;
}

export default Pagination;