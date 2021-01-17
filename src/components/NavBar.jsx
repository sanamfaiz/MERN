import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
<div className='top-bar'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='tb-contact'>
                    <p><i className='fas fa-user_name'></i>Employee</p>
                    <p><i className='fas fa-user_name'></i>Logged in</p>
                </div>
            </div>
            <div className='col-md-6'>
           
                <div className='tb-menu'>
                 
               <a href='/'>Logout</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div className='brand'>
    <div className='container'>
        <div className='row align-items-center'>
            <div className='col-lg-3 col-md-4'>
                <div className='b-logo'>
                    <a href='#'>
                        <img src='../img/logo.png' alt='Logo' />
                    </a>
                </div>
            </div>
            <div className='col-lg-6 col-md-4'>
                <div className='b-ads'>
                   
                </div>
            </div>
            <div className='col-lg-3 col-md-4'>
                <div className='b-search'>
                    <input type='text' placeholder='Search' />
                    <button><i className='fa fa-search'></i></button>
                </div>
            </div>
        </div>
    </div>
</div>


<div className='nav-bar'>
    <div className='container'>
        <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
            <a href='#' className='navbar-brand'>MENU</a>
            <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse justify-content-between' id='navbarCollapse'>
                <div className='navbar-nav mr-auto'>
                    <a href='#' className='nav-item nav-link active'>Home</a>
             
                   
                    <a href='#' className='nav-item nav-link '>Contact</a>
                </div>
                <div className='social ml-auto'>
                    <a href=''><i className='fab fa-twitter'></i></a>
                    <a href=''><i className='fab fa-facebook-f'></i></a>
                    <a href=''><i className='fab fa-linkedin-in'></i></a>
                    <a href=''><i className='fab fa-instagram'></i></a>
                    <a href=''><i className='fab fa-youtube'></i></a>
                </div>
            </div>
        </nav>
    </div>
</div>

<div className='breadcrumb-wrap'>
    <div className='container'>
        <ul className='breadcrumb'>
            <li className='breadcrumb-item'><a href='#'>Home</a></li>
            <li className='breadcrumb-item active'>Articles</li>
        </ul>
    </div>
</div>

</React.Fragment>
        )
    }
}

export default NavBar