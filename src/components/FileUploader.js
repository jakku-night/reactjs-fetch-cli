import React from 'react';

export default class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.uploadHandle = this.uploadHandle.bind(this);
  }

  uploadHandle = async (event) => {
    event.preventDefault();
    let form = new FormData(event.currentTarget);
    form.append('user_id', '1');
    try {
      const res = await fetch(event.target.action, {
        method: event.target.method,
        body: form
      });
      if ((await res.json()).status == 'OK') {
        alert('OK');
      } else {
        alert('ERROR');
      }
    } catch (error) {
      console.log(error);
      alert('ERROR');
    }
  };

  render = () => (
    <div>
      <h1 className="display-1">Upload Document</h1>
      <form id="form" method="post" encType="multipart/form-data" action="http://localhost:3000/api/uploads/" onSubmit={this.uploadHandle} >
        <div className="form-group">
          <label htmlFor="title">Document Title:</label>
          <input type="text" className="form-control" name="title" id="title" aria-describedby="helpId" placeholder="Document Title" autoFocus />
        </div>
        <div className="form-group">
          <label htmlFor="description">Document Description:</label>
          <textarea className="form-control" name="description" id="description" rows="3" placeholder="Document Description"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="details">Document Details:</label>
          <textarea className="form-control" name="details" id="details" rows="3" placeholder="Document Details"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file">Document File:</label>
          <input type="file" className="form-control-file" name="file" id="file" placeholder="Document File" aria-describedby="fileHelpId" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};
