
// import axios from 'axios'


// const  PRODUCT_API = 'http://localhost:3000/products/all'
// const  ORDER_API = 'http://localhost:3000/orders/all'
// const  USER_API = 'http://localhost:3000/users/all'



// const getProducts = () => axios.get(PRODUCT_API)
// const getOrders = () => axios.get(ORDER_API)
// const getUsers = () => axios.get(USER_API)


// export { getProducts ,getOrders, getUsers}
import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getProducts = () => axios.get(`${API}/products/all`)




// OrderEndPonts
const getOrders = () => axios.get(`${API}/orders/all`)


//UserEndPoints
const getUsers = () => axios.get(`${API}/users/all`)

//AuthEndponts
const Login = (data) => axios.post(`${API}/auth/login`, data)

export { getProducts, getOrders, getUsers, Login }