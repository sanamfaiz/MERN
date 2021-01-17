import React, { Component } from 'react'
import api from '../api'
import { NavBarPublisher} from '../components'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ArticleInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {           
            article_type: '',
            article_abstract: '',
            author: '',
            rating: '',
            published_time: '',
        }
    }

   
    handleChangeInputArticle_type = async event => {
        const article_type = event.target.value
        this.setState({ article_type })
    }
    handleChangeInputArticle_abstrct = async event => {
        const article_abstract = event.target.value
        this.setState({ article_abstract })
    }
    handleChangeInputArticle_author = async event => {
        const author= event.target.value
        this.setState({ author })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const published_time = event.target.value
        this.setState({ published_time })
    }

    handleIncludeArticle = async () => {

        
        const { article_type,article_abstract,author, rating, published_time } = this.state
       
        if(article_type=='')
        {

            window.alert(`Article title is blank`)
        }
        if(article_abstract=='')
        {

            window.alert(`Article body is blank`)
        }
        if(author=='')
        {

            window.alert(`Article author is blank`)
        }
        if(published_time=='')
        {

            window.alert(`Publish time is blank`)
        }

        const payload = { article_type,article_abstract,author, rating, published_time: published_time }

        await api.insertArticle(payload).then(res => {
            window.alert(`Article inserted successfully`)
            this.setState({
               
                article_type: '',
                article_abstract: '',
                author: '',
                rating: '',
                published_time: '',
            })
        })
    }

    render() {
        const { article_type,article_abstract,author, rating, published_time } = this.state
        return (
            <Wrapper>
                <NavBarPublisher/>
                <Title>Create Article</Title>

               
                 <Label>Title: </Label>
                <InputText
                    type="text"
                    value={article_type}
                    onChange={this.handleChangeInputArticle_type}
                />
                <Label>Body: </Label>
                <InputText
                    type="text"
                    value={article_abstract}
                    onChange={this.handleChangeInputArticle_abstrct}
                />
                <Label>author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeInputArticle_author}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={published_time}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleIncludeArticle}>Add Article</Button>
                <CancelButton href={'/article/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ArticleInsert