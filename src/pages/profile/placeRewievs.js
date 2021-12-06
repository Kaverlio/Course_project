import React from "react";
import Comment from './comment';

export default function PlaceReviews() {
    return (
        <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience">
                    <Comment />
                </div>

            </div>
        </div>
    );
}