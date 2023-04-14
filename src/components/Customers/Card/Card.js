import { Link } from "react-router-dom";

//styles
import styles from "./Card.module.scss";

//utils
import { countries } from 'country-data';


const Card = ({ customer, list }) => {

    const { name, email, city, id, address } = customer;

    console.log(countries[customer.country_code]);

    const CardContent = () => {
        return <div className={styles.inside}>
            <h3>{name}</h3>
            {!list && <div className={styles.label}>Email</div>}
            {email && <div className={styles.field}>{email}</div>}
            {!list && <div className={styles.label}>City</div>}
            {city && <div className={styles.field}>{city}</div>}
            {!list && <div className={styles.label}>Address</div>}
            {address && <div className={styles.field}>{address}</div>}
            {!list && <div className={styles.label}>Country</div>}
            {customer.country_code && <div className={styles.field}>
                {countries[customer.country_code].emoji} {countries[customer.country_code].name}
            </div>}
        </div>
    }

    //Note: we can use classnames package to manage classes
    //https://www.npmjs.com/package/classnames

    return list ? <Link to={`/customers/${id}`} className={styles.card}>
        <CardContent />
    </Link> : <div className={`${styles.card} ${styles.noScale}`}><CardContent /></div>;
}

export default Card;