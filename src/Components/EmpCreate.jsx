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
                navigate("/home");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div>
            <div className="login-box">
                <h2>Employ Create</h2>
                <form onSubmit={handlesubmit}>
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
                        <Link to="/home">
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
