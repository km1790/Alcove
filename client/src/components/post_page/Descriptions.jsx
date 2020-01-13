import React from "react";
import Form from "react-bootstrap/Form";

export default class Descriptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return(
            <Form.Row >
                <div className="custom-file col-4 mb-2">
                    <input type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">Upload Images</label>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea className="form-control" aria-label="With textarea"/>
                </div>
            </Form.Row>
        )
    }
}