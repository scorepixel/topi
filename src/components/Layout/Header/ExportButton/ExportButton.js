//styles
import styles from "./ExportButton.module.scss";
import DownloadIcon from "assets/media/download.svg";

//import customers store
import { customers } from "stores";

//import useReactiveVar
import { useReactiveVar } from "@apollo/client";

//utils
import csvDownload from 'json-to-csv-export'

const ExportButton = () => {

    //get customer list from store
    const { list } = useReactiveVar(customers);

    //prepare data to export
    const dataToConvert = {
        data: list,
        filename: 'customers_export',
        delimiter: ',',
        headers: ['ID', "Name", "Email", "City", "Country"]
    }

    return <div className={styles.exportButton} onClick={() => csvDownload(dataToConvert)}>
        <img src={DownloadIcon} /> Export Customers
    </div>;
}

export default ExportButton;