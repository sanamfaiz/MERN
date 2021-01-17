import React, { Component } from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import api from '../api'
import { NavBarPublisher} from '../components'
import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
const Title = styled.h1.attrs({
    className: 'h1',
})``
class UpdateArticle extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/article/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteArticle extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the article ${this.props.id} permanently?`,
            )
        ) {
            api.deleteArticleById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}
class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllArticles().then(article => {
            this.setState({
                article: article.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { article, isLoading } = this.state
        console.log('TCL: ArticleList -> render -> article', article)

        const columns = [
            
            {
                Header: 'Title',

                accessor: 'article_type',
                filterable: true,
            },
           
            {
                Header: 'Body',

                accessor: 'article_abstract',
                filterable: true,
            },
            {
                Header: 'Author',

                accessor: 'author',
                filterable: true,
            },

            {
                Header: 'Likes',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'published_time',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteArticle id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateArticle id={props.original._id} />
                            
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!article.length) {
            showTable = false
        }


        return (
            <Wrapper>
                <NavBarPublisher/>
                <Title> Article List</Title>
                {showTable && (
                    <ReactTable
                        data={article}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ArticleList