import { useEffect } from "react";

//styles
import styles from "./CustomersList.module.scss";

//components
import Card from "components/Customers/Card/Card";
import Loading from "components/Loading/Loading";

//import useReactiveVar
import { useReactiveVar } from "@apollo/client";

//import store
import { customers, global } from "stores";

//utils
import { set } from "immutable-modify";
import { Helmet } from "react-helmet";


const CustomerList = () => {

    //get stores
    const { list, pagination, search } = useReactiveVar(customers);



    //fetch data from server
    useEffect(() => {

        let url;
        if (pagination.page === 0) {
            url = "https://thawing-plains-90222.herokuapp.com/customers";
        } else {
            url = `https://thawing-plains-90222.herokuapp.com/customers?page=${pagination.page}`;
        }

        //if search is not empty, fetch customers from server
        if (search && search !== "") {
            url = `https://thawing-plains-90222.herokuapp.com/customers/search?query=${search}`;
        }


        fetch(url)
            .then(response => {

                //when searching, if we get 404, it means there are no results (?)
                if (response.status !== 200) {
                    customers(set(customers(), "list", []));

                    customers(set(customers(), "pagination", {
                        page: 0,
                        per_page: 0,
                        total_pages: 0,
                    }));

                    return Promise.reject('error 404')
                }

                return response;

            })
            .then(response => response.json())
            .then(data => {

                customers(set(customers(), "list", data.customers));

                customers(set(customers(), "pagination", {
                    page: data.pagination.page,
                    per_page: data.pagination.per_page,
                    total_pages: data.pagination.total_pages,
                }));

            })
            .catch(error => console.log(error));


    }, [search, pagination.page]);


    //set page title
    useEffect(() => {
        global(set(global(), "pageTitle", "Customers"));
    }, []);

    return <>

        <Helmet>
            <title>Customers - Topi</title>
        </Helmet>

        <div className={styles.customerList}>
            <div className={styles.inside}>

                {list && list.length === 0 && !search && <Loading />}

                {list && list.length === 0 && search && <div className={styles.noResults}>
                    No results found...
                </div>}

                {list && list.length > 0 &&
                    <div className={styles.list} style={{ justifyContent: list.length < 4 ? 'center' : 'space-between' }}>
                        {list.map((customer, index) => {
                            return <Card key={index} customer={customer} list />
                        })}
                    </div>
                }

            </div>
        </div>
    </>;
}

export default CustomerList;