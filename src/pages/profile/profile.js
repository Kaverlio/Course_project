import React from 'react';
import UserData from './userData';
import RewievForm from './rewievForm';
import PlaceReviews from './placeRewievs';

export default function Profile() {
   
    return (
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <UserData/>
                <RewievForm/>
                <PlaceReviews/>
            </div>
        </div>
    )
}

