import React, { Component} from 'react';

class Posts extends Component {
	state = {
		posts: []
	}

	render() {
		const { posts } = this.state;

		const postItems = posts.map(post => (
			<li key={post.id}>
				<h4>{post.title}</h4>
				<p className="text-muted">{post.body}</p>
			</li>));


		return(
			<div className="mt-1">
				<h3 className="">Posts List</h3>
				<ul>{postItems}</ul>
			</div>
		)
	}
}

export default Posts;