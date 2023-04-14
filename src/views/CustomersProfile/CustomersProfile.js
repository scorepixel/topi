import { useEffect, useState } from "react";

//styles
import styles from "./CustomersProfile.module.scss";

//components
import Loading from "components/Loading/Loading";
import Card from "components/Customers/Card/Card";

//import store
import { global } from "stores";

//utils
import { Helmet } from "react-helmet";
import { useParams, Link } from 'react-router-dom';
import { set } from "immutable-modify";

const CustomerProfile = () => {

    let { id } = useParams();
    const [customer, setCustomer] = useState(null);
    const [notFound, setNotFound] = useState(false);


    //get customer from server
    useEffect(() => {
        fetch(`https://thawing-plains-90222.herokuapp.com/customers/${id}`)
            .then(response => {
                if (response.status !== 200) {
                    setNotFound(true);
                    return Promise.reject('error 404')
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                setCustomer(data);
            });
    }, []);


    //set page title
    useEffect(() => {
        global(set(global(), "pageTitle", "Customer Profile"));
    }, []);




    return <>

        <Helmet>
            <title>{`${customer && customer.name + '- '}Customer Profile - Topi`}</title>
        </Helmet>

        <div className={styles.customerProfile}>

            {notFound && <div className={styles.notFound}>
                <h2>Customer not found</h2>
                <div className={styles.backToCustomers}>
                    <Link to={`/customers/`}>Back to customers</Link>
                </div>
            </div>}

            {!notFound && !customer && <Loading />}

            {customer && <div className={styles.box}>
                <Card customer={customer} />
                <div className={styles.backToCustomers}>
                    <Link to={`/customers/`}>Back to customers</Link>
                </div>
            </div>}
        </div>

    </>;
}

export default CustomerProfile;