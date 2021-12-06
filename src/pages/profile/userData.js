import React, {useContext} from "react";
import { Context } from '../../context/context';

export default function UserData() {
    
    const [context, setContext] = useContext(Context);
    return (
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" src={context.imageUrl} alt="img" />
                <span class="font-weight-bold">{context.name}</span>
                <span class="text-black-50">{context.email}</span>
            </div>
        </div>
    );
}