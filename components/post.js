import { Component } from "react";
import Head from "next/head";
// import ProgressButton from "components/ProgressButton";

// import { Form, Input } from "components/forms/index";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      submitted: false,
      title: "",
      description: "",
    };
  }
  submitPost(data) {
    fetch("/api/post", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : "";
    });
  }
  handleTitleFormChange(e) {
    let sub = e.target.value;
    this.setState({ title: sub });
  }
  handleDescriptionFormChange(e) {
    let sub = e.target.value;
    this.setState({ description: sub });
  }
  submit(e) {
    e.preventDefault();
    console.log(this.state.title, this.state.description);
  }
  render() {
    const title = "Post";
    return (
      <>
        <h2> Add Post </h2>
        <div>
          <form>
            <div>
              <label>
                Title:
                <input
                  type="text"
                  name="Title"
                  value={this.state.title}
                  onChange={(e) => this.handleTitleFormChange(e)}
                  required
                />
              </label>
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                name="Description"
                value={this.state.description}
                onChange={(e) => this.handleDescriptionFormChange(e)}
                required
              />
            </div>
            <button onClick={(e) => this.submit(e)}> Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default Post;
