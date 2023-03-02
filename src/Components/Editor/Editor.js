import React, { useEffect, useState } from 'react';
import './Editor.css';
import 'grapesjs/dist/css/grapes.min.css';
import axios from 'axios';
import grapesjs from 'grapesjs';
import presetWebpage from 'grapesjs-preset-webpage';
import blocksBasic from 'grapesjs-blocks-basic';
import { useNavigate } from "react-router-dom";
import save from '../../Images/saveicon.png';
import { useParams,Link } from 'react-router-dom';
function Editor() {
    const nav = useNavigate()
    const [userId, setUserId] = useState(null);
    const [editor, setEditor] = useState(null);
    const [name, setName]=useState('');
    const [domain, setDomain]=useState('');
    const {id}=useParams();
    const savePage = async () => {
        const newHtml = editor.getHtml();
        const newStyle = editor.getStyle();
        const assets = editor.AssetManager.getAll().map(asset => asset.get('src'));
        const info = {
            html: newHtml,
            css: newStyle,
            assets: assets,
            userId: userId,
            name,
            domain
        }
        let newWebsite = await axios.post('http://localhost:8000/page/savePage', info)
        console.log(newWebsite)
    }

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const result = await axios.get('http://localhost:8000/user/isLoggedIn', { withCredentials: true })
                setUserId(result.data.userId)
                const grapes = await grapesjs.init({
                    container: '#editor',
                    fromElement: true,
                    width: 'auto',
                    // Disable the storage manager for the moment
                    storageManager: false,
                    // Avoid any default panel
                    plugins: [blocksBasic, presetWebpage],
                    pluginsOpts: {
                        [blocksBasic]: {
                            blocksBasicOpts: {
                                blocks: [
                                    "link-block",
                                    "quote",
                                    "text-basic",
                                    "column1",
                                    "column2",
                                    "column3",
                                    "column3-7",
                                    "text",
                                    "link",
                                    "image",
                                    "video",
                                    "map",
                                ],
                                flexGrid: 1
                            },
                        }
                    },
                    styleManager: {
                        appendTo: '#styles-container',
                        sectors: [
                            {
                                name: 'Dimension',
                                open: false,
                                buildProps: ['width', 'min-height', 'padding'],
                                properties: [
                                    {
                                        type: 'integer',
                                        name: 'The width',
                                        property: 'width',
                                        units: ['px', '%'],
                                        defaults: 'auto',
                                        min: 0,
                                    },
                                    {
                                        type: 'composite',
                                        property: 'margin',
                                        label: 'margin',
                                        // Additional props
                                        properties: [
                                            { type: 'number', units: ['px'], default: '0', property: 'margin-top' },
                                            { type: 'number', units: ['px'], default: '0', property: 'margin-right' },
                                            { type: 'number', units: ['px'], default: '0', property: 'margin-bottom' },
                                            { type: 'number', units: ['px'], default: '0', property: 'margin-left' },
                                        ]
                                    },
                                ],
                            },
                            {
                                name: 'Typography',
                                open: false,
                                properties: [
                                    {
                                        type: 'select',
                                        label: 'Font size',
                                        property: 'font-size',
                                        default: '1rem',
                                        options: [
                                            { id: '0.7rem', label: 'small' },
                                            { id: '1rem', label: 'medium' },
                                            { id: '1.2rem', label: 'large' },
                                        ]
                                    },
                                    {
                                        type: 'number',
                                        label: 'letter spacing',
                                        property: 'letter-spacing',
                                        fixedSize: ["normal", "initial", "inherit"],
                                        units: ['px', '%', 'em', 'rem', 'vh', 'vw'],
                                        min: 0,
                                    },
                                    {
                                        type: 'number',
                                        label: 'letter height',
                                        property: 'letter-height',
                                        fixedSize: ["normal", "initial", "inherit"],
                                        units: ['px', '%', 'em', 'rem', 'vh', 'vw'],
                                        min: 0,
                                    },
                                    {
                                        type: 'number',
                                        label: 'Font size',
                                        property: 'font-size',
                                        units: ['px', '%', 'em', 'rem', 'vh', 'vw'],
                                        min: 0,
                                    },
                                    {
                                        type: 'select',
                                        property: 'font-family',
                                        label: 'Font-Family',
                                        default: "Arial, Helvetica, sans-serif",
                                        // Additional props
                                        options: [
                                            { id: "Arial, Helvetica, sans-serif", label: "Arial" },
                                            { id: 'Arial Black, Gadget, sans-serif', label: 'Arial Black' },
                                            { id: 'Comic Sans MS, cursive, sans-serif', label: "Comic Sans MS" },
                                            { id: "Brush Script MT, sans-serif", label: "Brush Script MT" },
                                            { id: "Courier New, Courier, monospace", label: "Courier New" },
                                            { id: "Georgia, serif", label: "Georgia" },
                                            { id: "Helvetica, sans-serif", label: "Helvetica" },
                                            { id: "Impact, Charcoal, sans-serif", label: "Impact" },
                                            { id: "Lucida Sans Unicode, Lucida Grande, sans-serif", label: "Lucida Sans Unicode" },
                                            { id: "Tahoma, Geneva, sans-serif", label: "Tahoma" },
                                            { id: "Times New Roman, Times, serif", label: "Times New Roman" },
                                            { id: "Trebuchet MS, Helvetica, sans-serif", label: "Trebuchet MS" },
                                            { id: "Verdana, Geneva, sans-serif", label: "Verdana" }

                                        ]
                                    },
                                    {
                                        type: 'select',
                                        property: "font-weight",
                                        label: 'Font-Weight',

                                        // Additional props
                                        options: [
                                            { id: "100", label: "Thin" },
                                            { id: "200", label: "Extra-Light" },
                                            { id: "300", label: "Light" },
                                            { id: "400", label: "Normal" },
                                            { id: "500", label: "Medium" },
                                            { id: "600", label: "Semi-Bold" },
                                            { id: "700", label: "Bold" },
                                            { id: "800", label: "Extra-Bold" },
                                            {
                                                id: "900", label: "Ultra-Bold"
                                            }


                                        ]
                                    },
                                ],
                            },
                            {
                                name: 'Color',
                                open: false,
                                type: 'stack',
                                property: 'text-shadow',
                                label: 'Stack type',
                                // Additional props
                                properties: [
                                    { type: 'number', units: ['px'], default: '0', property: 'x' },
                                    { type: 'number', units: ['px'], default: '0', property: 'y' },
                                    { type: 'number', units: ['px'], default: '0', property: 'blur' },
                                    { type: 'color', default: 'black', property: 'color' },
                                    {
                                        type: "file",
                                        label: "background-image",
                                        property: "background-image",
                                        functionName: "url",
                                        full: "",
                                        default: "none"
                                    },
                                    {
                                        type: "color",
                                        label: "background-color",
                                        property: "background-color",
                                        default: "none"
                                    },
                                    {
                                        type: "select",
                                        default: "scroll",
                                        label: "background-attachment",
                                        property: "background-color",
                                        options: [
                                            { id: "scroll" },
                                            { id: "fixed" },
                                            { id: "local" },
                                        ]
                                    },

                                ]
                            },
                            {
                                name: 'Decoration',
                                open: false,
                                // buildProps: ['width', 'min-height', 'padding'],
                                properties: [
                                    {
                                        type: 'select',
                                        label: 'align-content',
                                        property: 'align-content',
                                        default: "stretch",
                                        properties: [
                                            { id: "flex-start" },
                                            { id: "flex-end" },
                                            { id: "center" },
                                            { id: "space-between" },
                                            { id: "space-around" },
                                        ],
                                        requires: [{ display: "flex" }]
                                    },
                                    {
                                        type: 'select',
                                        label: 'align-items',
                                        property: 'align-items',
                                        default: "stretch",
                                        properties: [
                                            { id: "flex-start" },
                                            { id: "flex-end" },
                                            { id: "center" },
                                            { id: "baseline" },
                                            { id: "stretch" },
                                        ],
                                        requires: [{ display: "flex" }]
                                    },
                                    {
                                        type: 'radio',
                                        label: 'text-align',
                                        default: "left",
                                        property: 'text-align',

                                        options: [
                                            { id: "left" },
                                            { id: "center" },
                                            { id: "right" },
                                            { id: "justify" },

                                        ]
                                    },
                                    {
                                        type: 'radio',
                                        label: 'position',
                                        default: "static",
                                        property: 'position',

                                        options: [
                                            { id: "static" },
                                            { id: "relative" },
                                            { id: "absolute" },
                                            { id: "fixed" },

                                        ]
                                    },

                                    {
                                        type: 'composite',
                                        property: 'border',
                                        label: 'border',
                                        // Additional props
                                        properties: [
                                            { default: "0", id: "border-width-sub", min: 0, property: "border-width", type: "number", units: ['px', 'em', 'rem', 'vh', 'vw'] },
                                            { default: "solid", id: "border-style-sub", property: "border-style" },
                                            { default: "black", id: "border-color-sub", property: "border-color", type: "color" },

                                        ]
                                    },
                                    {
                                        type: 'composite',
                                        property: 'border-radius',
                                        label: 'border-radius',
                                        // Additional props
                                        properties: [
                                            { default: "0", id: "border-top-left-radius-sub", min: 0, property: "border-top-left-radius", type: "number", units: ['px', '%', 'em', 'rem', 'vh', 'vw'] },
                                            { default: "0", id: "border-top-right-radius-sub", property: "border-top-right-radius", type: "number", units: ['px', '%', 'em', 'rem', 'vh', 'vw'] },
                                            { default: "0", id: "border-bottom-right-radius-sub", property: "border-bottom-right-radius", type: "number", units: ['px', '%', 'em', 'rem', 'vh', 'vw'] },
                                            { default: "0", id: "border-bottom-left-radius-sub", property: "border-bottom-left-radius", type: "number", units: ['px', '%', 'em', 'rem', 'vh', 'vw'] },
                                        ]
                                    },
                                    {
                                        type: 'select',
                                        label: 'display',
                                        property: 'display',
                                        properties: [
                                            { id: "block" },
                                            { id: "inline" },
                                            { id: "inline-block" },
                                            { id: "flex" },
                                            { id: "none" },
                                        ]
                                    },
                                    {
                                        type: 'slider',
                                        label: 'opacity',
                                        property: 'opacity',
                                        default: "1",
                                        max: 1,
                                        min: 0,
                                        step: 0.01
                                    },


                                ],
                            },
                            {
                                name: "Flex",
                                open: false,
                                // buildProps: ['width', 'min-height', 'padding'],
                                properties: [
                                    {
                                        type: 'stack',
                                        property: 'transition',
                                        label: 'transition',
                                        //formStyle:ƒ (t, e),
                                        // Additional props
                                        properties: [
                                            { default: "width", id: "transition-property-sub", options: [{ id: "all" }, { id: "width" }, { id: "height" }, { id: "background-color" }, { id: "transform" }, { id: "box-shadow" }, { id: "opacity" }] },
                                            { default: "2s", id: "transition-duration-sub", min: 0, property: "transition-duration", type: "number", units: ['s', 'ms'] },
                                            { default: "ease", id: "transition-timing-function-sub", options: [{ id: "linear" }, { id: "ease" }, { id: "ease-in" }, { id: "ease-out" }, { id: "ease-in-out" }] }

                                        ]
                                    },
                                    {
                                        type: 'stack',
                                        property: 'transition-property',
                                        label: 'transition-duration',
                                        default: "2s",
                                        //formStyle:ƒ (t, e),
                                        // Additional props
                                        properties: "transition-duration",
                                        type: "number",
                                        units: ['s', 'ms']
                                    },
                                    {
                                        type: 'select',
                                        property: '"transition-property"',
                                        label: 'transition-property',
                                        default: "width",
                                        options: [
                                            { id: "all" },
                                            { id: "width" },
                                            { id: "height" },
                                            { id: "background-color" },
                                            { id: "transform" },
                                            { id: "box-shadow" },
                                            { id: "opacity" },

                                        ]

                                    },
                                ]
                            }
                        ],
                    },
                    blockManager: {
                        appendTo: "#blocks",
                    },
                    layerManager: {
                        appendTo: "#layers-container",
                    },
                    selectorManager: {
                        appendTo: "#styles-container",
                    },
                    traitManager: {
                        appendTo: "#trait-container"
                    },
                    panels: {
                        defaults: {}
                    }
                })
                grapes.on('load', () => {
                    grapes.setComponents({});
                });
                setEditor(grapes);
            }
            catch (err) {
                console.log(err)
                nav('/login')
            }
        }
        checkLogin();
    }, [])

    return (
        <>
            <div id='navbar' className='sidenav d-flex flex-column overflow-scroll'>
                <nav className='navbar navbar-light'>
                    <div className='container-fluid'>
                        <span className='navbar-brand mb-0 h3 logo'>Webify</span>
                    </div>
                </nav>
                <div className='my-2 d-flex flex-column'>
                    <button
                        type='button'
                        className='btn btn-outline-secondary btn-sm mb-2 mx-2'
                        data-bs-toggle='modal'
                        data-bs-target='#addPageModal'
                    >
                        <i className='bi bi-plus'></i>
                        Add Page
                    </button>
                    <ul className='list-group pages'>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            Home
                            <div className='m-2'>
                                <button className='btn btn-sm btn-outline-primary'>
                                    <i className='bi bi-pencil'></i>
                                </button>
                                <button className='btn btn-sm btn-outline-danger'>
                                    <i className='bi bi-trash'></i>
                                </button>
                            </div>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            About
                            <div className='m-2'>
                                <button className='btn btn-sm btn-outline-primary'>
                                    <i className='bi bi-pencil'></i>
                                </button>
                                <button className='btn btn-sm btn-outline-danger'>
                                    <i className='bi bi-trash'></i>
                                </button>
                            </div>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            Contact Us
                            <div className='m-2'>
                                <button className='btn btn-sm btn-outline-primary'>
                                    <i className='bi bi-pencil'></i>
                                </button>
                                <button className='btn btn-sm btn-outline-danger'>
                                    <i className='bi bi-trash'></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                        <li className='nav-item' role='presentation'>
                            <button
                                className='nav-link active'
                                id='block-tab'
                                data-bs-toggle='tab'
                                data-bs-target='#block'
                                type='button'
                                role='tab'
                                aria-controls='block'
                                aria-selected='true'
                            >
                                <i className='bi bi-grid-fill'></i>
                            </button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button
                                className='nav-link'
                                id='layer-tab'
                                data-bs-toggle='tab'
                                data-bs-target='#layer'
                                type='button'
                                role='tab'
                                aria-controls='layer'
                                aria-selected='false'
                            >
                                <i className='bi bi-layers-fill'></i>
                            </button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button
                                className='nav-link'
                                id='style-tab'
                                data-bs-toggle='tab'
                                data-bs-target='#style'
                                type='button'
                                role='tab'
                                aria-controls='style'
                                aria-selected='false'
                            >
                                <i class="bi bi-palette-fill"></i>
                            </button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button
                                className='nav-link'
                                id='trait-tab'
                                data-bs-toggle='tab'
                                data-bs-target='#trait'
                                type='button'
                                role='tab'
                                aria-controls='trait'
                                aria-selected='false'
                            >
                                <i class="bi bi-gear-fill"></i>
                            </button>
                        </li>
                    </ul>
                    <div className='tab-content'>
                        <div
                            className='tab-pane fade show active'
                            id='block'
                            role='tabpanel'
                            aria-labelledby='block-tab'
                        >
                            <div id="blocks"></div>
                        </div>
                        <div
                            className='tab-pane fade'
                            id='layer'
                            role='tabpanel'
                            aria-labelledby='layer-tab'
                        >
                            <div id="layers-container"></div>
                        </div>
                        <div
                            className='tab-pane fade'
                            id='style'
                            role='tabpanel'
                            aria-labelledby='style-tab'
                        >
                            <div id="styles-container"></div>
                        </div>
                        <div
                            className='tab-pane fade'
                            id='trait'
                            role='tabpanel'
                            aria-labelledby='trait-tab'
                        >
                            <div id="trait-container"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='main-content'>
                {/* <nav className='navbar navbar-light'>
                    <div className='container-fluid'>
                        <div className='panel__devices'></div>
                        <div className='panel__basic-actions'></div>
                    </div>
                </nav> */}
                <div id='editor'></div>
                <button className='savebtn' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Save<img src={save} width="25" alt="save" /></button>
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
                                        <input type="text" class="form-control" id="recipient-name" onChange={(e)=>setName(e.target.value)} />
                                        <label for="recipient-name" class="col-form-label">Domain:</label>
                                        <input type="text" class="form-control" id="recipient-name" onChange={(e)=>setDomain(e.target.value)} />
                                    </div>

                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary"  onClick={savePage}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                    </a>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                        <li><Link to={`/addPage/${id}`}><a class="dropdown-item" href="#">All Pages</a></Link></li>
                        {/* <li><a class="dropdown-item" href="#">Settings</a></li> */}
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>

                <div
                    className='modal fade'
                    id='addPageModal'
                    tabIndex='-1'
                    aria-labelledby='addPageModalLabel'
                    aria-hidden='true'
                    data-bs-backdrop='static'
                    data-bs-keyboard='false'
                >
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <form id='create-page'>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='addPageModalLabel'>Create Page</h5>
                                    <button
                                        type='button'
                                        className='btn-close'
                                        data-bs-dismiss='modal'
                                        aria-label='Close'
                                    ></button>
                                </div>
                                <div className='modal-body'>
                                    <div className='col-auto'>
                                        <label htmlFor='name' className='form-label'>Name</label>
                                        <input
                                            type='text'
                                            className='form-control form-control-sm'
                                            id='name'
                                            name='name'
                                            placeholder='Name of Page'
                                            required
                                        />
                                        <div className='invalid-feedback'>
                                            Please provide a valid name.
                                        </div>
                                    </div>
                                </div>
                                <div className='modal-footer'>
                                    <button
                                        type='button'
                                        className='btn btn-secondary btn-sm'
                                        data-bs-dismiss='modal'
                                    >
                                        Close
                                    </button>
                                    <button type='submit' className='btn btn-primary btn-sm'>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editor;