import createStore from 'unistore';
// import { string } from 'prop-types';
import axios from 'axios';

const initialState = {
    listProduct1:[],
    listProduct: [],
    product:[],
    cartdetail: '',
    cartProduct: [],
    cart:[],
    data_seller:[],
    userNameInput:"",
    userPasswordInput:"",
    UserFullName:"",
    userShop:"",
    userEmail:"",
    userAddress:"",
    userPhone:"",
    token:"",
    searchKeyword:"",
    isLoading:false,
    cekFotoStatus: false,
    linkAudio: "",
    fullName : "",
    is_login: false,
    //login
    usename : "",
    password: "",
    //profile
    image_user: "",
    name_user: "",
    rating_user:"",
    review_user:"",
    image_agent: "",
    name_agent: "",
    rating_agent:"",
    review_agent:"",
    role:"",
    transaksi:[],
    // Add Product
    nama_product:"",
    description:"",
    weight:"",
    price:"",
    reference:"",
    stock:"",
    halal:false,
    taste:"",
    image:"",
    //checkout
    checkout_Email:"",
    checkout_HP:"",
    checkout_Alamat:""
   
};
export const store = createStore(initialState)

export const actions = store => ({
    getSignIn : async (state) => {
        console.log("username",state.userNameInput)
        console.log("password",state.userPasswordInput)
        const username = state.userNameInput
        const password = state.userPasswordInput
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/login?username="+username+"&password="+password
          };
        //   const self = this
          await axios(req)
          .then(function(response){
                console.log("token === ", response.data.token)
                console.log("password === ", password)
                console.log("login = ", store.is_login)
                if (response.data.token !== null ){
                    localStorage.setItem("token", response.data.token);
                    store.setState({token : response.data.token, 
                                    is_login : true, 
                                    username : state.userNameInput,
                                    password : state.userPasswordInput})
                    // self.props.history.push("/")              
                }
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
            })
    },

    getProfileUser : async (state) => {
        // console.log("tes",localStorage.getItem('token'))
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/user",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
          };
          console.log()
        //   const self = this
          await axios(req)
          .then(function(response){
                console.log("id === ", response.data.id)
                if (response.data.id !== null ){
                    localStorage.setItem("role", response.data.role);
                    localStorage.setItem("username", response.data.username);
                    localStorage.setItem("fullname", response.data.fullname);
                    localStorage.setItem("phone_number", response.data.number_phone);
                    localStorage.setItem("address", response.data.address);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("city", response.data.city);
                    localStorage.setItem("image", response.data.image);
                    // self.props.history.push("/")               
                    alert("login success")
                }
            })
            .catch(function(error){
                // handle error
            })
    },

    getProfileAgent : async (state) => {
        // console.log("tes",localStorage.getItem('token'))
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/agent",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
          };
          console.log()
        //   const self = this
          await axios(req)
          .then(function(response){
                console.log("id === ", response.data.id)
                if (response.data.id !== null ){
                    localStorage.setItem("role", response.data.role);
                    localStorage.setItem("username", response.data.username);
                    localStorage.setItem("fullname", response.data.fullname);
                    localStorage.setItem("phone_number", response.data.number_phone);
                    localStorage.setItem("address", response.data.address);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("city", response.data.city);
                    localStorage.setItem("image", response.data.image);
                    // self.props.history.push("/")               
                    alert("login success")
                }
            })
            .catch(function(error){
                // handle error
            })
    },

    getProfileSeller : async (state) => {
        // console.log("tes",localStorage.getItem('token'))
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/seller",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
          };
          console.log()
        //   const self = this
          await axios(req)
          .then(function(response){
                console.log("id === ", response.data.id)
                if (response.data.id !== null ){
                    localStorage.setItem("role", response.data.role);
                    localStorage.setItem("username", response.data.username);
                    localStorage.setItem("shop_name", response.data.shop_name);
                    localStorage.setItem("fullname", response.data.fullname_owner);
                    localStorage.setItem("phone_number", response.data.number_phone);
                    localStorage.setItem("address", response.data.address);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("city", response.data.city);
                    localStorage.setItem("image", response.data.image);
                    // self.props.history.push("/")               
                    alert("login success")
                }
            })
            .catch(function(error){
                // handle error
            })
    },

    postSignUp1 : async (state) => {
        const username = state.userNameInput
        const password = state.userPasswordInput
        const fullname = state.UserFullName
        const address = state.userAddress
        const email = state.userEmail
        const phone = state.userPhone
        const mydata = {
            "username": username,
            "password": password,
            "fullname": fullname,
            "email": email,
            "address": address,
            "number_phone": phone
        };
  
        const req = {
          method: "post",
          url: "https://cari-nama-domain-anda.site/user/registration",
          headers: {
            "Content-Type": "application/json"
          },
          data: mydata
        };
  
        await axios(req)
            .then(response => {
                  store.setState({
                      "is_login": true
                  });
              //   return response
            })
            .catch(error => {
                console.log(mydata)
                console.log(error)
                return false
        })
    },
    postSignUp2 : async (state) => {
        console.warn("username",state.userNameInput)
        console.warn("password",state.userPasswordInput)
        console.warn("fullname",state.UserFullName)
        console.warn("address",state.userAddress)
        console.warn("email",state.userEmail)
        console.warn("phone",state.userPhone)
        const username = state.userNameInput
        const password = state.userPasswordInput
        const fullname = state.UserFullName
        const address = state.userAddress
        const email = state.userEmail
        const phone = state.userPhone
        const mydata = {
            "username": username,
            "password": password,
            "fullname": fullname,
            "email": email,
            "address": address,
            "number_phone": phone
        };
  
        const req = {
          method: "post",
          url: "https://cari-nama-domain-anda.site/agent/registration",
          headers: {
            "Content-Type": "application/json"
          },
          data: mydata
        };
        // const self = this
        await axios(req)
        .then(function(response){
            store.setState({token : response.data.token, is_login : true})
            // self.props.history.push("/")               
                alert("login success")
        })
        .catch(function(error){
            store.setState({isLoading: false})
            // handle error
        })
        
    },

    postSignUp3 : async (state) => {
        console.warn("username",state.userNameInput)
        console.warn("password",state.userPasswordInput)
        console.warn("toko",state.userShop)
        console.warn("fullname",state.UserFullName)
        console.warn("address",state.userAddress)
        console.warn("email",state.userEmail)
        console.warn("phone",state.userPhone)
        const username = state.userNameInput
        const password = state.userPasswordInput
        const shop = state.userShop
        const fullname = state.UserFullName
        const address = state.userAddress
        const email = state.userEmail
        const phone = state.userPhone
        const mydata = {
            "username": username,
            "password": password,
            "shop_name": shop,
            "fullname_owner": fullname,
            "email": email,
            "address": address,
            "number_phone": phone
        };
  
        const req = {
          method: "post",
          url: "https://cari-nama-domain-anda.site/seller/registration",
          headers: {
            "Content-Type": "application/json"
          },
          data: mydata
        };
        // const self = this
        await axios(req)
        .then(function(response){
            store.setState({token : response.data.token, is_login : true})
            // self.props.history.push("/")               
        })
        .catch(function(error){
            store.setState({isLoading: false})
            // handle error
            console.log(error)
        })
        
    },

    Review : async (state) => {
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/review"
          };
        //   const self = this
          await axios(req)
          .then(function(response){
                store.setState({
                    image_user : response.data.image_user, 
                    name_user: response.data.nama_user, 
                    rating_user: response.data.rating_user, 
                    review_user: response.data.review_user, 
                    image_agent : response.data.image_agent, 
                    name_agent: response.data.nama_agent, 
                    rating_agent: response.data.rating_agent, 
                    review_agent: response.data.review_agent,
                })                
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
    },

    RequestDataProduct : async (state) => {
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/public/product?p=1&rp=4"
          };
        //   const self = this
          await axios(req)
          .then(function(response){
              console.log("ini dataaaaanyaaaaa",response.data)
              store.setState({ listProduct: response.data, isLoading: false }); 
              console.log(store.listProduct)               
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
        },
    RequestDataAllProduct : async (state) => {
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/public/product"
            };
            // const self = this
            await axios(req)
            .then(function(response){
                console.log("ini dataaaaanyaaaaa",response.data)
                store.setState({ listProduct1: response.data, isLoading: false }); 
                console.log(store.listProduct1)               
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
        },
    GetCart : async (state) => {
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/cart",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
                }
            };
            // const self = this
            await axios(req)
            .then(function(response){
                console.log("ini data Cart",response.data)
                store.setState({ 
                    cart: response.data, 
                    isLoading: false 
                }); 
                console.log(store.cart)
                
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
        },
    GetCartDetail : async (state,id_cart) => {
        console.warn('get cart detail kepanggil', id_cart);
        
        const req = {
            method: "get",
            url: `https://cari-nama-domain-anda.site/cart/detail/${id_cart}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
                }
            };
            // const self = this
            await axios(req)
            .then(function(response){
                console.log("ini data Cartdetail",response.data)
                store.setState({ 
                    cartdetail: response.data,
                    isLoading: false 
                }); 
                console.log(store.cartdetail)               
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
        },
    clearCart : async (state) => {
        // console.log("tes",localStorage.getItem('token'))
        const req = {
            method: "PUT",
            url: "https://cari-nama-domain-anda.site/user/cart/checkout",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
                }
            };
            console.log()
            // const self = this
            await axios(req)
            .then(function(response){
                console.log("id === ", response.data.id)
            })
            .catch(function(error){
                // handle error
            })
    },
    AddTransaction : async (state,res) => {
        const mydata = {
            "payment": res
        };
    
        const req = {
            method: "post",
            url: "https://cari-nama-domain-anda.site/user/cart/transaction",
            headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: mydata
        };
        // const self = this
        await axios(req)
        .then(function(response){
            console.log("Add Transacsi sukses");
                            
        })
        .catch(function(error){
            store.setState({isLoading: false})
            // handle error
            console.log(error)
        })
        
    },
    ShowTransaction : async (state) => {
        const req = {
            method: "get",
            url: "https://cari-nama-domain-anda.site/user/transaction",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
                }
            };
            // const self = this
            await axios(req)
            .then(function(response){
                console.log("ini transaksinya",response.data)
                store.setState({ 
                    transaksi: response.data[0], 
                    isLoading: false 
                }); 
                console.log(store.transaksi)
                
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
        },
    AddProduct : async (state) => {
        const nama_product = state.nama_product
        const description = state.description
        const weight = state.weight
        const price = state.price
        const reference = state.reference
        const stock = state.stock
        const halal = state.halal
        const taste = state.taste
        const image = state.image
        const mydata = {
            "name_product": nama_product,
            "description": description,
            "weight": weight,
            "price": price,
            "reference": reference,
            "stock": stock,
            "halal" : halal,
            "taste" : taste,
            "image" : image
        };
    
        const req = {
            method: "post",
            url: "https://cari-nama-domain-anda.site/seller/product/create",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            data: mydata
        };
    
        await axios(req)
            .then(response => {
                console.log("berhasil post porduct");
                
                //   return response
            })
            .catch(error => {
                console.log(mydata)
                console.log(error)
                return false
        })
    },
    addToCart : async(state,res) =>{
        const mydata = {
            "id_product": res,
        };
  
        const req = {
          method: "post",
          url: "https://cari-nama-domain-anda.site/user/cart",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token")
          },
          data: mydata
        };
  
        await axios(req)
            .then(response => {
                  store.setState({
                      "is_login": true
                  });
              //   return response
            })
            .catch(error => {
                console.log(mydata)
                console.log(error)
                return false
        })
    },
    category : async (state) => {
        const req = {
            method: "get",
            url:`https://cari-nama-domain-anda.site/public/product?taste=${state.category_taste}&halal=${state.halalStatus}`
            };
            // const self = this
            await axios(req)
            .then(function(response){
                console.log("ini transaksinya",response.data)
                store.setState({ 
                    listProduct1: response.data, 
                    isLoading: false 
                }); 
                
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
        },
    FiturSearch : async (state) => {
        const req = {
            method: "get",
            url:`https://cari-nama-domain-anda.site/public/product/search?keyword=${state.search}`
            };
            // const self = this
            await axios(req)
            .then(function(response){
                console.log("ini transaksinya",response.data)
                store.setState({ 
                    listProduct1: response.data, 
                    isLoading: false 
                }); 
                
            })
            .catch(function(error){
                store.setState({isLoading: false})
                // handle error
                console.log(error)
            })
        }
})
