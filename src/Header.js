import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default () => {
    const history = useHistory();
    const state = () => history.push("/state");
    const effect = () => history.push("/effect");
    return(
        <div>
            <h2><Link to="/">React Hook Study</Link></h2>
            <button onClick={state}>useState</button>
            <button onClick={effect}>useEffect</button>
        </div>
    )
}