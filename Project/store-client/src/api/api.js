
import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)
//OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)
const addOrder = (product) => axios.post(`${API}/orders/add`, product)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)

//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)
const addUser = (product) => axios.post(`${API}/users/add`, product)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)


//AuthEndponts
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

export { getProducts, getOrders, getUsers, Login, Register, addProduct, deleteProduct, addOrder, deleteOrder, addUser, deleteUser}