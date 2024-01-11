// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import "./EmpDelete.css";

// const EmpDelete = () => {
//     const [empData, setEmpData] = useState({});
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         // Fetch data for the employee with the specified ID
//         fetch(`http://localhost:5000/employ/${id}`)
//             .then((res) => res.json())
//             .then((data) => setEmpData(data))
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     }, [id]);

//     const handleDelete = () => {
//         // Perform delete operation
//         fetch(`http://localhost:5000/employ/${id}`, {
//             method: "DELETE",
//         })
//             .then((res) => {
//                 alert("Deleted successfully.");
//                 navigate("/home");
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     };

//     return (
//         <div>
//             <div className="delete-box">
//                 <h2>Delete Employee</h2>
//                 <div className="user-box">
//                     <label>Title: {empData.title}</label>
//                 </div>
//                 <div className="user-box">
//                     <label>Description: {empData.description}</label>
//                 </div>
//                 <div className="user-box">
//                     <label>Cover: {empData.cover}</label>
//                 </div>
//                 <div className="user-box1">
//                     <label className="ms-2" style={{ color: "#03e9f4" }}>
//                         Is Active: {empData.active ? "Yes" : "No"}
//                     </label>
//                 </div>
//                 <div className="btn-container">
//                     <Link to="/home">
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>Back
//                     </Link>
//                     <button onClick={handleDelete}>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>Delete
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EmpDelete;


import React from 'react'

const EmpDelete = () => {
    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:5000/employ/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            });

            alert('Deleted successfully.');
            navigate('/home');
        } catch (err) {
            console.error('Error deleting record:', err.message);
        }
    };
  return (
    <div>EmpDelete</div>
  )
}

export default EmpDelete