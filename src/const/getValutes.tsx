import { initValue } from './constRUS';

const getApiData = async () => {
    try {
        let data = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        return (data = await data.json());
    } catch (err) {
        return null;
    }
};

export const valutes = { ...initValue.Valute, ...(await getApiData()).Valute };
