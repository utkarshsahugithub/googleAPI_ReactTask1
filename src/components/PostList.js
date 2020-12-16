import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: ""
        }
    }

    componentDidMount() {
        // axios.get("https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt")
        // .then(response => {
        //     console.log(response);
        //     // this.setState({posts: response.data})
        // })
        // .catch(error => {
        //     console.log(error);
        //     this.setState({ errorMsg: 'Error retreiving data' })
        // })
        const proxyUrl='https://cors-anywhere.herokuapp.com/';

        fetch( proxyUrl + 'https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt' )
        .then(e=>e.text())
        .then(response => {
            console.log(response);
        })
    }
    
    render() {
        // const { posts, errorMsg } = this.state
        return (
            <div>
                List of Post Components
                {/* {
                    posts.length ? posts.map(post => <div  key={post.id}>{post.title}</div>) : null
                }
                { errorMsg ? <div>{ errorMsg }</div> : null } */}
            </div>
        )
    }
}

export default PostList
