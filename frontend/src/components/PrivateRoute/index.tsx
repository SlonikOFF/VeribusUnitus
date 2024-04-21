// // This is used to determine if a user is authenticated and
// // if they are allowed to visit the page they navigated to.

// // If they are: they proceed to the page
// // If not: they are redirected to the login page.

// // import AuthService from './Services/AuthService'
// import { Component } from 'react'
// import { RootState } from '../../store/redusers/dataSlice'
// import { useSelector } from 'react-redux'
// import { Route, useNavigate } from 'react-router-dom'

// interface PrivateRouteProps {
//   children: Route | 
// }
// const Private = ({ children }: PrivateRouteProps) => {

//   // Add your own authentication on the below line.
//   // const isLoggedIn = AuthService.isLoggedIn()
//   const {token} = useSelector((store:RootState) => store.settings)
//   const navigate = useNavigate();

//   if(!token){
//     navigate("/auth");
//   }

//   return (
//     children
//   )
// }

// export default Private