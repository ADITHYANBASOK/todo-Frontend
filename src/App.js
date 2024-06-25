import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'



function App() {
  
  const [tudo,setTudo]=useState()
  const [tudoupdate,setTudoupdate]=useState()
  const [edit,setEdit]=useState([])
  const [tudos,setTudos]=useState([])

  const ADD = ()=>{
    if(tudo){
    setTudos([...tudos,{id:Date.now(),data:tudo}])
    console.log(tudos);
    setTudo('')
  }
  }
 

  const Edit = (id)=>{
    setEdit(tudos.filter(a=>a.id==id))
    console.log('fr',edit[0]);
  }

  const Delete = (id)=>{
    setTudos(tudos.filter(a=>a.id!==id))
    console.log(tudos);
  }

  const Close=()=>{
    setEdit('')
    setTudoupdate('')

  }

  const Update=()=>{

    const updatedata=tudos.find(a=>a.id==edit[0].id)
    console.log('mmm',updatedata);
    if(updatedata){
      updatedata.id=edit[0].id
      updatedata.data=tudoupdate?tudoupdate:edit[0].data
    }
    setTudoupdate('')
    setEdit('')

  
    
  }


  return (
    <>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n  #list1 .form-control {\n  border-color: transparent;\n}\n#list1 .form-control:focus {\n  border-color: transparent;\n  box-shadow: none;\n}\n#list1 .select-input.form-control[readonly]:not([disabled]) {\n  background-color: #fbfbfb;\n}\n\n"
      }}
    />
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card"
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
            >
              <div className="card-body py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  <i className="fas fa-check-square me-1" />
                  <u>My Todos</u>
                </p>
                <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-row align-items-center">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          value={tudo}
                          placeholder="Add new..."
                          onChange={(e)=>{setTudo(e.target.value)}}
                        />                 
                        <div>
                          <button type="button" className="btn btn-primary" onClick={ADD}>
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
              
                {tudos.map((data)=>(
                <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                  <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div className="form-check">
                      <input
                        className="form-check-input me-0"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckChecked1"
                        aria-label="..."
                        defaultChecked=""
                      />
                    </div>
                  </li>
                  <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p className="lead fw-normal mb-0">
                      {data.data}
                    </p>
                  </li>
                  <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                    <div className="d-flex flex-row justify-content-end mb-1">
                      <a
                        href="#"
                        className="text-info"
                        title="Edit todo"
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={()=>{Edit(data.id)}}
                      >
                  <FontAwesomeIcon icon={faPenToSquare} style={{"--fa-primary-opacity": "1", paddingRight:'10px'}} />                      </a>
                      <a
                        href="#"
                        className="text-danger"
                        data-mdb-toggle="tooltip"
                        title="Delete todo"
                        onClick={()=>{Delete(data.id)}}
                      >
                    <FontAwesomeIcon icon={faTrashCan} style={{color: "#dc0909",}} />    
                         </a>
                    </div>
                    <div className="text-end text-muted">
                    
                    </div>
                  </li>
                </ul>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  

{/*  Modal  */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update tudo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={Close}></button>
      </div>
      <div class="modal-body">
        <div id='list1'>
      <div className="pb-2">
                  <div className="card">
                    <div className="card-body">
                     {edit?edit?.map((data)=>(
                      <div className="d-flex flex-row align-items-center">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="exampleFormControlInput1"
                          placeholder="Add new..."
                          defaultValue={data.data}
                          onChange={(e)=>{setTudoupdate(e.target.value)}}
                        />
                     
                      </div>
                      )):null} 
                    </div>
                  </div>
                </div>
                </div>

                  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={Close}>Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={Update}>Update</button>
      </div>
    </div>
  </div>
</div>

  </>
  
  );
}

export default App;



