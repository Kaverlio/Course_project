import React, { useState } from 'react';
import Dropdown from "./Dropdown";
import TextInput from "react-autocomplete-input";
import { typeResurse, numberRating, tagArray} from "../data/data";

export default function Profile() {
    const [selectedType, setSelectedType] = useState("");
    const [selectedRating, setSelectedRating] = useState("");
    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90" alt="img" />
                        <span className="font-weight-bold">John Doe</span>
                        <span className="text-black-50">john_doe12@bbb.com</span>
                        <span>United States</span>
                    </div>
                </div>
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
                                <input type="text" className="form-control" placeholder={"Name " + selectedType} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <label className="labels">Genre</label>
                                <TextInput trigger={["", " "]} className="form-control" placeholder={"Enter genre " + selectedType} options={tagArray} />
                            </div>

                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <label className="labels">Description</label>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
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
                            <button className="btn btn-primary profile-button" type="button">Save {selectedType}</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center experience">
                            <span>This place to comment</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

