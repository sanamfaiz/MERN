import React, { Component } from 'react'


import styled from 'styled-components'


import { NavBarLogin,Footer } from '../components'
const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`



const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class Login extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        
        return (
            
            <Wrapper>
                 <NavBarLogin />
               
                <React.Fragment>

                <div class="contact">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="contact-form">
                            <form>
                                
                                   
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Your Email" />
                                    </div>
                               
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Password" />
                                </div>
                        
                                <div>
                                    
                                    
                                    <CancelButton className='btn' href={'/article/EmployeeArticle'}>Employee</CancelButton>
                <CancelButton className='btn' href={'/article/list'}>Publisher</CancelButton>
                                    </div>
                            </form>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
            </Wrapper>
        )
    }
}

export default Login