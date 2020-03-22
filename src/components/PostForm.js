import React, { Component } from 'react';

class PostForm extends Component {
	state = {
		title: '',
		body: ''
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = e => {
		e.preventDefault();
		
		let post = {
			title: this.state.title,
			body: this.state.body
		}

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(post)
		})
		.then(res => res.json())
		.then(data => console.log(data))
	}

	render() {
		let { title, body } = this.state;

		return (
			<div>
				<h3>Add Post Form</h3>
				<form>
					<div className="form-group">
						<label>Title</label>
						<br />
						<input type="text" name="title" value={title} onChange={this.onChange} className="form-control" />
					</div>
					<div className="form-group">
						<label>Body</label>
						<br />
						<textarea className="form-control" name="body" value={body} onChange={this.onChange}></textarea>
					</div>
					<div>
						<button type="submit" className="btn btn-primary btn-block" onClick={this.onSubmit}>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default PostForm;