import axios from "axios";
import baseUrl from './Url';

const Header = {
    "Content-Type": "application/json",
};

// POST
export const INSERT_USER = async (data) => {
    const url = baseUrl + '/create';
    const res = await axios.post(url, data, Header);
    return res.data;
}

// GET
export const GET_USERS = async () => {
    const url = baseUrl + '/';
    const res = await axios.get(url);
    return res.data;
}

// DELETE
export const DELETE_USER = async (_id) => {
    const url = baseUrl + `/delete/${_id}`;
    const res = await axios.delete(url);
    return res.data;
}

// PUT
export const EDIT_USER = async (data) => {
    const url = baseUrl + `/update/${data._id}`;
    const res = await axios.put(url, data, Header);
    return res.data;
}
