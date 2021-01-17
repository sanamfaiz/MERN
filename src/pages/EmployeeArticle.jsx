import React, { Component } from 'react'
import ReactTable from 'react-table-6';  
import 'react-table-6/react-table.css' 
import api from '../api'
import { NavBar,Footer} from '../components'
import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Button = styled.button.attrs({
    className: ``,
})`
   
`


const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

class UpdateArticle extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/article/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class EmployeeArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            article: [],
            article5: [],
            articleComments: [],
            columns: [],
            isLoading: false,user_name : '',comments1:'',id:'',
        }
    }
    handleClick = async (event) => {
        const {id} = event.target;
        
        const payload = {id }


        await api.updateArticleLikeById(id, payload).then(res => {           
            this.state = {       
                id: event.target.id,
            }
        })
        await api.getTopbyID(id).then(article => {
            this.setState({
                article: article.data.data,
                isLoading: false,               
            })
            
        })
        const comments = await api.getArticleCommentsById('id')

        this.setState({
            articleComments: comments.data.data,
           
        })
        
    
    }

    handleCategory = async (event) => {
        const {id} = event.target;
        
        const payload = {id }

          await api.getTopbyID(id).then(article => {
            this.setState({
                article: article.data.data,
                isLoading: false,               
            })
            
        })

        const comments = await api.getArticleCommentsById(id)

        this.setState({
            articleComments: comments.data.data,
           
        })
        
    
    }


        handleChangeComments = async event => {
            const comments = event.target.value
            const user_name='Employee'
            this.setState({ comments,user_name })
        }
        handleUpdateArticleComments = async (event) => {           
            const {id} = event.target;
          let article_ID=event.target.id;
           const { user_name,comments } = this.state         
           const payload = { article_ID,user_name,comments}  
    
            await api.insertArticleComments(payload).then(res => {
               
                this.state = {           
                comments: ''
                }
               
            })
            await api.getTopbyID(id).then(article => {
            this.setState({
                article: article.data.data,
                isLoading: false,               
            })
            
        })

        const commentstest = await api.getArticleCommentsById(id)

        this.setState({
            articleComments: commentstest.data.data,
           
        })
        

            
        }
    
     componentDidMount = async () => {         
        this.setState({ isLoading: true })     
       
        const check= await api.getTop()

         await api.getTopbyID(check.data.data._id).then(article => {
            this.setState({
                article: article.data.data,
                isLoading: false,               
            })
            
        })
        await api.getTop5().then(article5 => {
            this.setState({
                article5: article5.data.data,
                isLoading: false,
              
            })
        })

  const comments = await api.getArticleCommentsById(check.data.data._id)

  this.setState({
      articleComments: comments.data.data,
     
  })
    }
    
    render() {
        
        const { article,article5, isLoading,user_name,comments1,comments,articleComments} = this.state
        let showTable = true
      

        return (
            <Wrapper>
                <NavBar/>
                {showTable && (

                    <React.Fragment>


<div className='single-news'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='sn-container'>
                            <div className='sn-img'>
                                <img src='../img/news-825x525.jpg' />
                            </div>

                            {article.map((ar, index) => (
             
             <div className='sn-content'>
             <h1 className='sn-title'>{ar.article_type}</h1>
             {ar.article_abstract}
             <div className='row'>
             <div className='container'>
<div className='d-flex justify-content-center row'>
<div className='col-md-12'>
<div className='d-flex flex-column comment-section'>
<div className='bg-white'>
 <div className='d-flex flex-row fs-12'>
     <div className='like p-2 cursor'><i className='fa fa-thumbs-o-up'></i>
     <span className='ml-1'> {ar.rating} 
       
     <div onClick={this.handleClick}  id={ar._id} key={ar._id}>Like</div>
     </span></div>
     <div className='like p-2 cursor'><i className='fa fa-commenting-o'></i><span className='ml-1'>Comment</span></div>
   </div>
</div>

{articleComments.map((co, index) => (
<div className='bg-white p-2'>
 <div className='d-flex flex-row user-info'><img className='rounded-circle' src='https://i.imgur.com/RpzrMR2.jpg' width='40' />
     <div className='d-flex flex-column justify-content-start ml-2'>
         <span className='d-block font-weight-bold name'>{co.user_name}</span><span className='date text-black-50'>Shared publicly - Jan 2020</span></div>
</div>
 <div className='mt-2'>
     
    
     <p className='comment-text'> {co.comments}
        </p>
 
 </div>
</div>))}

<div className='bg-light p-2'>
 <div className='d-flex flex-row align-items-start'>
     <img className='rounded-circle' src='https://i.imgur.com/RpzrMR2.jpg' width='40' />
  


 <textarea className='form-control ml-1 shadow-none textarea' ref="myInput" value={comments}
                    onChange={this.handleChangeComments}></textarea>
     </div>

 <div className='mt-2 text-right'>
     <button className='btn btn-primary btn-sm shadow-none' type='button' id={ar._id} onClick={this.handleUpdateArticleComments}>Post comment</button><button className='btn btn-outline-primary btn-sm ml-1 shadow-none' type='button'>Cancel</button></div>
</div>
</div>
</div>
</div>
</div>
</div>                    </div>
     
            ))}
</div>
                        
                    </div>

                    <div className='col-lg-4'>
                        <div className='sidebar'>
                            <div className='sidebar-widget'>
                                <h2 className='sw-title'>In This Category</h2>
                                <div className='news-list'>
                                   
                                {article5.map((ar, index) => (
                                    <div className='nl-item'>
                                        <div className='nl-img'>
                                            <img src='../img/news-350x223-5.jpg' />
                                        </div>
                                        <div className='nl-title'>
                                            <div id={ar._id} onClick={this.handleCategory} >{ar.article_type}</div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                            
                       
                         

                            <div className='sidebar-widget'>
                                <h2 className='sw-title'>Most popular article</h2>
                                <div className='category'>
                                    <ul>
                                    {article.map((ar, index) => (
                                        <li><a href=''>{ar.article_type}</a><span>({ar.rating})</span></li>
                                    ))}
                                    </ul>
                                </div>
                            </div>

                            
                            <div className='sidebar-widget'>
                                <h2 className='sw-title'>Tags Cloud</h2>
                                <div className='tags'>
                                    <a href=''>National</a>
                                    <a href=''>International</a>
                                    <a href=''>Economics</a>
                                    <a href=''>Politics</a>
                                    <a href=''>Lifestyle</a>
                                    <a href=''>Technology</a>
                                    <a href=''>Trades</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <Footer/>
                    </React.Fragment>
                )}
            </Wrapper>
        )
    }
}

export default EmployeeArticle