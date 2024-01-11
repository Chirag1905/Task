// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./EmpCreate.css";
// import employ from "../db.json"

// const EmpCreate = () => {
//     const [title, titlechange] = useState("");
//     const [description, descriptionchange] = useState("");
//     const [cover, coverchange] = useState("");
//     const [active, activechange] = useState(true);
//     const [validation, valchange] = useState(false);
//     const navigate = useNavigate();

//     const handlesubmit = (e) => {
//         e.preventDefault();
    
//         // Assuming 'employ' is an array of existing records
//         const lastId = employ.length > 0 ? employ.employ[employ.length - 1].id : 0;
//         const newId = lastId + 1;
    
//         const empdata = {
//             id: newId,
//             title,
//             description,
//             cover,
//             active,
//         };
    
//         fetch("http://localhost:5000/employ", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(empdata),
//         })
//             .then((res) => {
//                 if (res.ok) {
//                     alert("Saved successfully.");
//                     navigate("/home");
//                 } else {
//                     throw new Error(`Failed to save. Status: ${res.status}`);
//                 }
//             })
//             .catch((err) => {
//                 console.error(err.message);
//             });
//     };
    
//     return (
//         <div>
//             <div className="login-box">
//                 <h2>Employ Create</h2>
//                 <form onSubmit={handlesubmit}>
//                     <div className="user-box">
//                         <input
//                             required
//                             value={title}
//                             onMouseDown={(e) => valchange(true)}
//                             onChange={(e) => titlechange(e.target.value)}
//                         ></input>
//                         <label>Title</label>
//                     </div>
//                     <div className="user-box">
//                         <input
//                             required
//                             value={description}
//                             onChange={(e) => descriptionchange(e.target.value)}
//                         ></input>
//                         <label>Description</label>
//                     </div>
//                     <div className="user-box">
//                         <input
//                             required
//                             value={cover}
//                             onChange={(e) => coverchange(e.target.value)}
//                         ></input>
//                         <label>Cover</label>
//                     </div>
//                     <div className="user-box1">
//                         <input
//                             required
//                             checked={active}
//                             onChange={(e) => activechange(e.target.checked)}
//                             type="checkbox"
//                             className="form-check-input"
//                         ></input>
//                         <label className="ms-2" style={{ color: "#03e9f4" }}>
//                             Is Active
//                         </label>
//                     </div>
//                     <div className="btn-container">
//                         <Link to="/home">
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>Back
//                         </Link>
//                         <button type="submit">
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                             <span></span>Save
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
// export default EmpCreate;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmpCreate.css";

const EmpCreate = () => {
    const [id] = useState("");
    const [title, titlechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [cover, coverchange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { title, description, cover, active };

        fetch("http://localhost:5000/employ", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata),
        })
            .then((res) => {
                alert("saved successfully.");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div>
            {/* <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handlesubmit}>
                        <div className='card'>
                            <div className='card-title'>
                                <h2 className='text-center'>Employ Create</h2>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label><b>ID</b></label>
                                            <input value={id} disabled='disabled' className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label><b>Title</b></label>
                                            <input required value={title} onMouseDown={e => valchange(true)} onChange={e => titlechange(e.target.value)} className='form-control'></input>
                                            {title.length === 0 && validation && <span className='text-danger'>Enter the title</span>}
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label><b>Description</b></label>
                                            <input value={description} onChange={e => descriptionchange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label><b>Cover</b></label>
                                            <input value={cover} onChange={e => coverchange(e.target.value)} className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type='checkbox' className='form-check-input'></input>
                                            <label className='form-check-label'><b>Is Active</b></label>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button className='btn btn-success float-end' type='submit'>Save</button>
                                            <Link to='/' className='btn btn-danger'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
            <div className="login-box">
                <h2>Employ Create</h2>
                <form onSubmit={handlesubmit}>
                    <div className="user-box">
                        {/* <input value={id} disabled="disabled"></input>
                        <label>ID</label> */}
                    </div>
                    <div className="user-box">
                        <input
                            required
                            value={title}
                            onMouseDown={(e) => valchange(true)}
                            onChange={(e) => titlechange(e.target.value)}
                        ></input>
                        <label>Title</label>
                    </div>
                    <div className="user-box">
                        <input
                            required
                            value={description}
                            onChange={(e) => descriptionchange(e.target.value)}
                        ></input>
                        <label>Description</label>
                    </div>
                    <div className="user-box">
                        <input
                            required
                            value={cover}
                            onChange={(e) => coverchange(e.target.value)}
                        ></input>
                        <label>Cover</label>
                    </div>
                    <div className="user-box1">
                        <input
                            required
                            checked={active}
                            onChange={(e) => activechange(e.target.checked)}
                            type="checkbox"
                            className="form-check-input"
                        ></input>
                        <label className="ms-2" style={{ color: "#03e9f4" }}>
                            Is Active
                        </label>
                    </div>
                    <div className="btn-container">
                        <Link to="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>Back
                        </Link>
                        <button type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EmpCreate;
