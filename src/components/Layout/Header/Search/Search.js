//styles
import styles from "./Search.module.scss";

//import customers store
import { customers } from "stores";

//utils
import { set } from "immutable-modify";

const Search = () => {

    //update search value in store
    const updateSearch = (e) => {
        //update if search value is not empty and number of characters is greater than 2
        if (e.target.value !== "" && e.target.value.length > 3) {
            customers(set(customers(), "search", e.target.value));
        } else {
            customers(set(customers(), "search", null));
        }
    }

    return <div className={styles.search}>
        <input type="text" placeholder="Search..." onChange={updateSearch} />
    </div>;
}

export default Search;