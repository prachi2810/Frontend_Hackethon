import React from 'react';

import './addPage.css';

function Addpage() {
    return (
        <>
            <div className="container">
                <div className='row first'>
                    <div className='col-md-6'>
                        <div className='title1'>
                            <h3>All Pages</h3>
                        </div>

                    </div>
                    <div className="col-md-6">

                        {/* <button className="buttonVal" type="button"><i class="bi bi-plus"></i>Add New Page</button> */}
                        <button type="button" class="buttonVal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="bi bi-plus"></i>Add New Page</button>
                    </div>
                </div>
                {/* <form className='row'> */}

                    {/* <div className="col-md-1 p-0">
                        <div className='name'>
                            <h6 className='mt-1'>Show </h6>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <input type="number" className="form-control" min="1" max="200" defaultValue={10} />
                    </div>
                    <div className="col-md-1 p-0">
                        <div className='name1'>
                            <h6 className='mt-1'>Entries</h6>
                        </div> */}
                    {/* </div> */}
                    <div className='d-flex justify-content-center searchDiv'>
                        <div className="input-group searchbar">
                            <input type="text" placeholder="Search" id="search" className="form-control" />
                            <button className='searchButton'>
                                <span classNae="input-group-text" id="basic-addon1">
                                    <i className="bi bi-search"></i>
                                </span>
                            </button>
                            {/* <button type="button" className="btn btn-primary">
                                <i className="bi bi-search"></i>
                            </button> */}
                        </div>
                    </div>
                {/* </form> */}
                <div className='header'>
                    <div className='row'>

                        <div className='col-md-2'>
                            <h6>Title</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Date</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Domain</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Edit</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Delete</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>View</h6>
                        </div>

                    </div>
                </div>


                <div className='shadow content'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <h6>Home Page</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>17 Feb</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Primary</h6>
                        </div>
                        <div className="col-md-2">
                            <h6><i class="bi bi-pencil-square"></i></h6>
                        </div>
                        <div className="col-md-2">
                            <i class="bi bi-trash-fill"></i>
                        </div>
                        <div className="col-md-2">
                            <i class="bi bi-eye-fill"></i>
                        </div>
                    </div>
                </div>
            </div >
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Page</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Title:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                    <label for="recipient-name" class="col-form-label">Domain:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addpage;