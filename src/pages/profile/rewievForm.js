import React, { useState } from "react";
import Dropdown from "../../elements/Dropdown";
import TextInput from "react-autocomplete-input";
import { typeResurse, numberRating, tagArray } from "../../data/data";

const requestUrl = "https://young-lowlands-67962.herokuapp.com/";

function sendRequest(method, url, body){
    const headers = {
        'Content-Type': 'app/review',
        'Access-Control-Allow-Origin': '*'
    }
    return fetch(url, {
        
        mode: "no-cors",
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.json();
    });
}

export default function () {

    const [nameReview, setNameReview] = useState("");
    const [descReview, setDescReview] = useState("");
    const [ganreReview, setGanreReview] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedRating, setSelectedRating] = useState("");

    const submitForm = async (e) => {
        try {
            const body = { nameReview, selectedType, descReview, selectedRating, ganreReview };
            sendRequest('POST', requestUrl, body).then(data => console.log(data)).catch(err => console.log(err));
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="col-md-5 border-right">
            <div className="p-3 py-2">
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <h6 className="text-right">Create review</h6>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6  d-inline">
                        <label className="labels">Name</label>
                        <Dropdown selected={selectedType} setSelected={setSelectedType} options={typeResurse} />
                    </div>
                    <div className="col-md-12 mt-1">
                        <input type="text" className="form-control" value={nameReview} onChange={e => setNameReview(e.target.value)} placeholder={"Name " + selectedType} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <label className="labels">Genre</label>
                        <TextInput trigger={["", " "]} className="form-control" onChangeText={ganreReview => setGanreReview(ganreReview)} placeholder={"Enter genre " + selectedType} options={tagArray} />
                    </div>

                </div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <label className="labels">Description</label>
                        <div class="form-floating">
                            <textarea class="form-control" value={descReview} onChange={e => setDescReview(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 d-inline">
                        <label className="labels">Rating</label>
                        <Dropdown selected={selectedRating} setSelected={setSelectedRating} options={numberRating} />
                    </div>

                </div>

                <div className="mt-4 text-center">
                    <button className="btn btn-primary profile-button" type="button" onClick={submitForm}>Save {selectedType}</button>
                </div>
            </div>
        </div>
    );
}

