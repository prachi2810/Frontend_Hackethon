import React, { useEffect, useState } from 'react';
import './Editor.css';
import 'grapesjs/dist/css/grapes.min.css';
import axios from 'axios';
import grapesjs from 'grapesjs';
import presetWebpage from 'grapesjs-preset-webpage';
import blocksBasic from 'grapesjs-blocks-basic';
import tooltip from 'grapesjs-tooltip';
import gradientPlugin from 'grapesjs-style-gradient';
import { TagsInput } from "react-tag-input-component";

import stylebg from 'grapesjs-style-bg'
import { useNavigate } from "react-router-dom";
import save from '../../Images/saveicon.png';
import { useParams,Link,useLocation } from 'react-router-dom';

import tabsPlugin from  'grapesjs-tabs'

function Editor() {
  const location = useLocation();
  const currentPath = location.pathname;
    const nav = useNavigate()
    const [userId, setUserId] = useState(null);
    const [editor, setEditor] = useState(null);
    const [name, setName]=useState('');
    const [isPathEditor,setPathEditor]=useState(true);
    const[thumbNail,setThumbnail]=useState(null);
    const [tags,setTags]=useState([])
    const {id}=useParams();
    const savePage = async () => {
        const newHtml = editor.getHtml();
        const newStyle = editor.getStyle();
        const html = editor.getHtml();
        const css = editor.getStyle();
        const assets = editor.AssetManager.getAll().map(asset => asset.get('src'));
        const formData=new FormData();
        formData.append('html',html);
        formData.append('css',css);
        formData.append('assets',assets);
        formData.append('name',name);
        formData.append('userId',userId);
        formData.append('thumbnail',thumbNail)
        formData.append('tags',tags);
        if(isPathEditor){
        let newWebsite = await axios.post('http://localhost:8000/page/savePage', {html,css,name,userId,assets});
        console.log(newWebsite)
        }
        else
        {
          let newWebsite = await axios.post('http://localhost:8000/templates/saveTemplate', formData,{
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          console.log(newWebsite)
        }
    }

    useEffect(() => {
       if(currentPath!=='/editor')
       setPathEditor(false);
        const checkLogin = async () => {
            try {
                const result = await axios.get('http://localhost:8000/user/isLoggedIn', { withCredentials: true })
                setUserId(result.data.userId)
                const grapes = await grapesjs.init({
                    container: '#editor',
                    fromElement: true,
                    width: 'auto',
                    dragMode:'translate',
                    // Disable the storage manager for the moment
                    storageManager: false,
                    // Avoid any default panel
                    plugins: [blocksBasic, presetWebpage,tooltip,tabsPlugin,gradientPlugin,stylebg],
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
                        },
                        
                    },
                    styleManager: {
                        appendTo: '#styles-container',
                        sectors:[{
                            name: 'General',
                            properties:[
                              {
                                extend: 'float',
                                type: 'radio',
                                default: 'none',
                                options: [
                                  { value: 'none', className: 'fa fa-times'},
                                  { value: 'left', className: 'fa fa-align-left'},
                                  { value: 'right', className: 'fa fa-align-right'}
                                ],
                              },
                              'display',
                              { extend: 'position', type: 'select' },
                              'top',
                              'right',
                              'left',
                              'bottom',
                            ],
                          }, {
                              name: 'Dimension',
                              open: false,
                              properties: [
                                'width',
                                {
                                  id: 'flex-width',
                                  type: 'integer',
                                  name: 'Width',
                                  units: ['px', '%'],
                                  property: 'flex-basis',
                                  toRequire: 1,
                                },
                                'height',
                                'max-width',
                                'min-height',
                                'margin',
                                'padding'
                              ],
                            },{
                              name: 'Typography',
                              open: false,
                              properties: [
                                  'font-family',
                                  'font-size',
                                  'font-weight',
                                  'letter-spacing',
                                  'color',
                                  'line-height',
                                  {
                                    extend: 'text-align',
                                    options: [
                                      { id : 'left',  label : 'Left',    className: 'fa fa-align-left'},
                                      { id : 'center',  label : 'Center',  className: 'fa fa-align-center' },
                                      { id : 'right',   label : 'Right',   className: 'fa fa-align-right'},
                                      { id : 'justify', label : 'Justify',   className: 'fa fa-align-justify'}
                                    ],
                                  },
                                  {
                                    property: 'text-decoration',
                                    type: 'radio',
                                    default: 'none',
                                    options: [
                                      { id: 'none', label: 'None', className: 'fa fa-times'},
                                      { id: 'underline', label: 'underline', className: 'fa fa-underline' },
                                      { id: 'line-through', label: 'Line-through', className: 'fa fa-strikethrough'}
                                    ],
                                  },
                                  'text-shadow'
                              ],
                            },
                            
                            
                            {
                              name: 'Decorations',
                              open: false,
                              properties: [
                                'opacity',
                                'border-radius',
                                'border',
                                'box-shadow',
                                'background',
                              ],
                            },{
                              name: 'Extra',
                              open: false,
                              buildProps: [
                                'transition',
                                'perspective',
                                'transform'
                              ],
                            },{
                              name: 'Flex',
                              open: false,
                              properties: [{
                                name: 'Flex Container',
                                property: 'display',
                                type: 'select',
                                defaults: 'block',
                                list: [
                                  { value: 'block', name: 'Disable'},
                                  { value: 'flex', name: 'Enable'}
                                ],
                              },{
                                name: 'Flex Parent',
                                property: 'label-parent-flex',
                                type: 'integer',
                              },{
                                name: 'Direction',
                                property: 'flex-direction',
                                type: 'radio',
                                defaults: 'row',
                                list: [{
                                  value: 'row',
                                  name: 'Row',
                                  className: 'icons-flex icon-dir-row',
                                  title: 'Row',
                                },{
                                  value: 'row-reverse',
                                  name: 'Row reverse',
                                  className: 'icons-flex icon-dir-row-rev',
                                  title: 'Row reverse',
                                },{
                                  value: 'column',
                                  name: 'Column',
                                  title: 'Column',
                                  className: 'icons-flex icon-dir-col',
                                },{
                                  value: 'column-reverse',
                                  name: 'Column reverse',
                                  title: 'Column reverse',
                                  className: 'icons-flex icon-dir-col-rev',
                                }],
                              },{
                                name: 'Justify',
                                property: 'justify-content',
                                type: 'radio',
                                defaults: 'flex-start',
                                list: [{
                                  value: 'flex-start',
                                  className: 'icons-flex icon-just-start',
                                  title: 'Start',
                                },{
                                  value: 'flex-end',
                                  title: 'End',
                                  className: 'icons-flex icon-just-end',
                                },{
                                  value: 'space-between',
                                  title: 'Space between',
                                  className: 'icons-flex icon-just-sp-bet',
                                },{
                                  value: 'space-around',
                                  title: 'Space around',
                                  className: 'icons-flex icon-just-sp-ar',
                                },{
                                  value: 'center',
                                  title: 'Center',
                                  className: 'icons-flex icon-just-sp-cent',
                                }],
                              },{
                                name: 'Align',
                                property: 'align-items',
                                type: 'radio',
                                defaults: 'center',
                                list: [{
                                  value: 'flex-start',
                                  title: 'Start',
                                  className: 'icons-flex icon-al-start',
                                },{
                                  value: 'flex-end',
                                  title: 'End',
                                  className: 'icons-flex icon-al-end',
                                },{
                                  value: 'stretch',
                                  title: 'Stretch',
                                  className: 'icons-flex icon-al-str',
                                },{
                                  value: 'center',
                                  title: 'Center',
                                  className: 'icons-flex icon-al-center',
                                }],
                              },{
                                name: 'Flex Children',
                                property: 'label-parent-flex',
                                type: 'integer',
                              },{
                                name: 'Order',
                                property: 'order',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                              },{
                                name: 'Flex',
                                property: 'flex',
                                type: 'composite',
                                properties  : [{
                                  name: 'Grow',
                                  property: 'flex-grow',
                                  type: 'integer',
                                  defaults: 0,
                                  min: 0
                                },{
                                  name: 'Shrink',
                                  property: 'flex-shrink',
                                  type: 'integer',
                                  defaults: 0,
                                  min: 0
                                },{
                                  name: 'Basis',
                                  property: 'flex-basis',
                                  type: 'integer',
                                  units: ['px','%',''],
                                  unit: '',
                                  defaults: 'auto',
                                }],
                              },{
                                name: 'Align',
                                property: 'align-self',
                                type: 'radio',
                                defaults: 'auto',
                                list: [{
                                  value: 'auto',
                                  name: 'Auto',
                                },{
                                  value: 'flex-start',
                                  title: 'Start',
                                  className: 'icons-flex icon-al-start',
                                },{
                                  value   : 'flex-end',
                                  title: 'End',
                                  className: 'icons-flex icon-al-end',
                                },{
                                  value   : 'stretch',
                                  title: 'Stretch',
                                  className: 'icons-flex icon-al-str',
                                },{
                                  value   : 'center',
                                  title: 'Center',
                                  className: 'icons-flex icon-al-center',
                                }],
                              }]
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
                grapes.on("component:selected", function(args) { args[1].set("resizable", true); });

                
                setEditor(grapes);
            }
            catch (err) {
                console.log(err)
                nav('/login')
            }
        }
        checkLogin();
    }, [])

    const saveTags=(newTags)=>{
             setTags(newTags)
    }
    const logout=async()=>{
      try{
          const response=await axios.get('http://localhost:8000/user/logout',{withCredentials:true});
          if(window.location.pathname!=='/')
          nav('/')
          else{
              window.location.reload();
          }
      }
      catch(err){
          console.log(err)
      }
  }
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
                                        
                                        {!isPathEditor&&
                                       <><label for="tags" class="col-form-label">Tags:</label>
                                         <TagsInput  id='tags'  name="tags"  placeHolder="Add Tags" onChange={saveTags}/> 
                                        <em>press enter to add new tag</em><br></br>
                                        <label for="recipient-name" class="col-form-label">Add Thumbnail</label><br></br>
                                        <input type="file" onChange={(e)=>{console.log(e.target.files[0]); setThumbnail(e.target.files[0])}}></input></>  }
      
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
                        <li><a class="dropdown-item" onClick={logout} >Log out</a></li>
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
