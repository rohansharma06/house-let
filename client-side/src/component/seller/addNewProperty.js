import React, { Component } from 'react';

class addNewProperty extends Component {
    render() {
        return (
            <div style={{marginTop:"15px"}}>
                <div className="add-property">
                    <button type="button" className="btn btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Add Property</button>
                </div>

                {/* -- Modal */}
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default addNewProperty;