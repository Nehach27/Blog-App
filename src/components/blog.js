import React, { Component } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';

class Blog extends Component {
  state = {
    blogs: [],
    newBlogData: {
      title: '',
      content: ''
    },
    editBlogData: {
      id: '',
      title: '',
      content: ''
    },
    newBlogModal: false,
    editBlogModal: false
  }
  componentWillMount() {
    this._refreshBlogs();
  }
  toggleNewBlogModal() {
    this.setState({
      newBlogModal: ! this.state.newBlogModal
    });
  }
  toggleEditBlogModal() {
    this.setState({
      editBlogModal: ! this.state.editBlogModal
    });
  }
  addBlog() {
    axios.post('http://localhost:3000/blogs', this.state.newBlogData).then((response) => {
      let { blogs } = this.state;

      blogs.push(response.data);

      this.setState({ blogs, newBlogModal: false, newBlogData: {
        title: '',
        content: ''
      }});
    });
  }
  updateBlog() {
    let { title, content } = this.state.editBlogData;

    axios.put('http://localhost:3000/blogs/' + this.state.editBlogData.id, {
      title, content
    }).then((response) => {
      this._refreshBlogs();

      this.setState({
        editBlogModal: false, editBlogData: { id: '', title: '', content: '' }
      })
    });
  }
  editBlog(id, title, content) {
    this.setState({
      editBlogData: { id, title, content }, editBlogModal: ! this.state.editBlogModal
    });
  }
  deleteBlog(id) {
    axios.delete('http://localhost:3000/blogs/' + id).then((response) => {
      this._refreshBlogs();
    });
  }
  _refreshBlogs() {
    axios.get('http://localhost:3000/blogs').then((response) => {
      this.setState({
        blogs: response.data
      })
    });
  }
  render() {
    let blogs = this.state.blogs.map((blog) => {
      return (
        <tr key={blog.id}>
          <td>{blog.id}</td>
          <td>{blog.title}</td>
          <td>{blog.content}</td>
          <td>
            <Button color="success" size="sm" className="mr-3" onClick={this.editBlog.bind(this, blog.id, blog.title, blog.content)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.deleteBlog.bind(this, blog.id)}>Delete</Button>
          </td>
        </tr>
      )
    });
    return (
      <div className="App container">

      <h1>Blogs Page</h1>

      <Button className="my-1" color="primary" onClick={this.toggleNewBlogModal.bind(this)}>Add Blog</Button>

      <Modal isOpen={this.state.newBlogModal} toggle={this.toggleNewBlogModal.bind(this)}>
        <ModalHeader toggle={this.toggleNewBlogModal.bind(this)}>Add a new blog</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={this.state.newBlogData.title} onChange={(e) => {
              let { newBlogData } = this.state;

              newBlogData.title = e.target.value;

              this.setState({ newBlogData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input id="content" type="textarea" value={this.state.newBlogData.content} onChange={(e) => {
              let { newBlogData } = this.state;

              newBlogData.content = e.target.value;

              this.setState({ newBlogData });
            }}/>
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addBlog.bind(this)}>Add Blog</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewBlogModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.editBlogModal} toggle={this.toggleEditBlogModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditBlogModal.bind(this)}>Edit a new blog</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={this.state.editBlogData.title} onChange={(e) => {
              let { editBlogData } = this.state;

              editBlogData.title = e.target.value;

              this.setState({ editBlogData });
            }} required/>
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input id="content" value={this.state.editBlogData.content} onChange={(e) => {
              let { editBlogData } = this.state;

              editBlogData.content = e.target.value;

              this.setState({ editBlogData });
            }} required/>
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateBlog.bind(this)}>Update Blog</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditBlogModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Blog;
