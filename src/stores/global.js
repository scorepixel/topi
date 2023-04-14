import { makeVar } from "@apollo/client";

const global = makeVar({
    pageTitle: "",
});

export default global;
