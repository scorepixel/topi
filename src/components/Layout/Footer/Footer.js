import { useParams } from 'react-router-dom';

//styles
import styles from "./Footer.module.scss";

//components
import Pagination from "./Pagination/Pagination";

const Footer = () => {

    let { id } = useParams();

    return <div className={styles.footer}>
        <div className={styles.copy}>
            <p>© {new Date().getFullYear()} Topi. All rights reserved.</p>
        </div>
        {!id &&
            <div className={styles.pagination}>
                <Pagination />
            </div>
        }
    </div>;
}

export default Footer;