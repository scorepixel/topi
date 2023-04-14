import { useParams } from 'react-router-dom';

//styles
import styles from "./Header.module.scss";
import Logo from "assets/media/logo.svg";

//components
import Search from "./Search/Search";
import ExportButton from "./ExportButton/ExportButton";


//import useReactiveVar
import { useReactiveVar } from "@apollo/client";

//import store
import { global } from "stores";

const Header = () => {

    const { pageTitle } = useReactiveVar(global);
    let { id } = useParams();

    return <div className={styles.header}>

        <div className={styles.left}>
            <img src={Logo} alt="Topi" />
            <h3>{pageTitle}</h3>
        </div>

        {!id &&
            <div className={styles.right}>
                <ExportButton />
                <Search />
            </div>
        }

    </div>;
}

export default Header;