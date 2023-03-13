import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './allPages.css';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
// import { async } from 'q';

function AllPages() {

    const [allPage, setAllPages] = useState(null);
    const [idPage, setId] = useState(null);
    const [del, setdel] = useState('');
    const [load, setLoad] = useState(false);

    const { id } = useParams();
    const deletePage = async (deleteid) => {
        if (window.confirm("Are you sure you want to delete?")) {
            try {
                const response = await axios.delete(`http://localhost:8000/page/deletePage/${deleteid}`, { withCredentials: true })
                setdel(deleteid);
            }
            catch (err) {
                console.log(err);
            }
        }

    }

    

    useEffect(async () => {
        const getData = async () => {
            try {
                setLoad(true);
                const response = await axios.get(`http://localhost:8000/page/allPages/${id}`, { withCredentials: true })
                console.log(response)
                console.log(response.data[0]._id);
                setAllPages(response.data);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoad(false);
            }
        }
        getData();
    }, [])





    return (
        <>
            <Navbar />
            {load ?

                <div className="d-flex justify-content-center align-items-center spinner">
                    {/* <strong>Loading...</strong> */}
                    <div class="spinner-border" role="status" aria-hidden="true"></div>
                </div>
                :
                <>
            <div className="container">
                <div className='row first'>
                    <div className='titlePage'>
                        <h3>All Pages</h3>
                    </div>
                </div>
                <div className='d-flex justify-content-center searchDiv'>
                    <div className="input-group searchbarPage">
                        <input type="text" placeholder="Search" id="search" className="form-control" />
                        <button className='searchButton'>
                            <span classNae="input-group-text" id="basic-addon1">
                                <i className="bi bi-search"></i>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='headerPage'>
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

                {allPage && allPage.map((page) => {
                    console.log(page);
                    return (
                        <div className='shadow contentPage'>
                            <div className='row'>
                                <div className='col-md-2'>
                                    <h6>{page.name}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>{page.date.slice(0,10)}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Primary</h6>
                                </div>  
                                <div className="col-md-2">
                                    <Link to={`/edit/${page._id}`}><h6><i class="bi bi-pencil-square"></i></h6></Link>
                                </div>
                                <div className="col-md-2">
                                    <button className='deleteBut' onClick={() => { deletePage(page._id) }}>
                                        <i class="bi bi-trash-fill"></i>
                                    </button>

                                </div>
                                <div className="col-md-2">
                                    <Link to={`/edit/${page._id}`}><i class="bi bi-eye-fill"></i></Link>
                                </div>
                            </div>
                        </div>)
                })

                }
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
            }
        </>
    )
}

export default AllPages;