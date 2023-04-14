import { makeVar } from "@apollo/client";

const customers = makeVar({
    list: [],
    pagination: {
        page: 0,
        per_page: 0,
        total_pages: 0,
    },
    search: null,
});

export default customers;
