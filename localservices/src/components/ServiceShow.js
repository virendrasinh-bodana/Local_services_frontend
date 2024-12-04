import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


const ServiceShow = () => {

    var style1 = {
        borderRadius : "23px"
    }

    const [isServiceProvider,setisServiceProvider] = useState(false)
    const [service,setService] = useState()

 const getservice = () => {
    const sid = localStorage.getItem('sid')

    axios.get("http://localhost:4000/service/getservice" + sid).then((res) => {
        console.log(res.data)
        setService(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
 }

  const getrole = () => {
    const id = localStorage.getItem('_id')
   

    axios.get("http://localhost:4000/user/getuser/"+ id).then((res) => {
      // console.log(res.data.data)
  
       
      console.log(res.data.data.role)
      if(res.data.data.role == 'serviceProvider'){
        // isServiceProvider = true;
        setisServiceProvider(true)
      }
      // console.log(isServiceProvider)

      }).catch((err) => {
      console.log(err)
})


  }

  useEffect(()=> {
    
    getrole()
    getservice()
   
  },[])
  return (
    <div>
      <div>
        <Helmet>
        <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

    <title>profile</title>

    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>


    <link rel="stylesheet" href="assets/css/fontawesome.css"/>
    <link rel="stylesheet" href="assets/css/templatemo-cyborg-gaming.css"/>
    <link rel="stylesheet" href="assets/css/owl.css"/>
    <link rel="stylesheet" href="assets/css/animate.css"/>
    <link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
        </Helmet>
      <body>

{/* <div id="js-preloader" class="js-preloader">
  <div class="preloader-inner">
    <span class="dot"></span>
    <div class="dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</div> */}

<header class="header-area header-sticky">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <nav class="main-nav">
              <a href="index.html" class="logo">
                      <img src="assets/images/logo4.png" alt=""/>
                  </a>
                  {/* <div class="search-input">
                    <form id="search" action="#">
                      <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                      <i class="fa fa-search"></i>
                    </form>
                  </div> */}
               
                  <ul class="nav">
                      <li><Link to="/">Home</Link></li>
                      {isServiceProvider ? (
        <li><Link to="/service" >updata or add service</Link></li>
      ) : (
        <li><a href="browse.html">user</a></li>
      )}
                      {/* <li><a href="browse.html">Browse</a></li> */}
                      <li>
                         <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Sign up</Link>
                      </li>
                      <li><Link to="/profile" class="active">Profile <img src="assets/images/profile-header.jpg" alt=""/></Link></li>
                  </ul>   
                  <a class='menu-trigger'>
                      <span>Menu</span>
                  </a>
              </nav>
          </div>
      </div>
  </div>
</header>

<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="page-content">

        <div class="row">
          <div class="col-lg-12">
            <div class="main-profile ">
              <div class="row">
                <div class="col-lg-4">
                  <img src="assets/images/profile.jpg" alt="" style={style1} />
                </div>
                
                <div class="col-lg-4 align-self-center">
                  {/* <div class="main-info header-text">
                    <span>Offline</span>
                    
                    <h3> Name : {user.name}</h3>

                    <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                    <div class="main-border-button">
                      <a href="#">Start Live Stream</a>
                    </div>
                  </div> */}
                </div>
                <div class="col-lg-4 align-self-center">
                  <ul>
                    <li>Name<br/> <span>{service.name}</span></li>
                    <li>E-mail <br/><span>{service.description}</span></li>
                    {/* <li>Phone <br/> <span>{user.phone}</span></li>
                    <li>Role <br/><span>{user.role}</span></li>
                    <button onClick={logout} className='btn btn-danger'>Log out</button>
                    <br/><br/>
                    <button onClick={signout} className='btn btn-danger'> delete account</button> */}
                  </ul>
                </div>
              </div>
             </div>
            </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  </body>
 </div>
           
</div>
  )
}

export default ServiceShow
