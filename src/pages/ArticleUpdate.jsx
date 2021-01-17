import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import { NavBarPublisher} from '../components'
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

class ArticleUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleUpdateArticle = async () => {
        const {id, article_type,article_abstract,author, rating, published_time } = this.state
       
        const payload = {id, article_type,article_abstract,author, rating, published_time: published_time }

        await api.updateArticleById(id, payload).then(res => {
            window.alert(`Article updated successfully`)
            this.state = {           
                article_type: '',
                article_abstract: '',
                author: '',
                rating: '',
                published_time: '',
            }
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const article = await api.getArticleById(id)

        this.setState({
            article_type: article.data.data.article_type,
            article_abstract: article.data.data.article_abstract,
            author: article.data.data.author,
            rating: article.data.data.rating,
            published_time: article.data.data.published_time,
        })
    }

    render() {
        const { article_type,article_abstract,author, rating, published_time } = this.state
        return (
            <Wrapper>
                <NavBarPublisher/>
                <Title>Update Article</Title>

                <Label>Type: </Label>
                <InputText
                    type="text"
                    value={article_type}
                    onChange={this.handleChangeInputArticle_type}
                />
                <Label>Abstract: </Label>
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

                <Button onClick={this.handleUpdateArticle}>Update Article</Button>
                <CancelButton href={'/article/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ArticleUpdate