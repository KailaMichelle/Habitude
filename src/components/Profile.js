import React from 'react';
import { Link } from 'react-router-dom';

function Profile(){
    // const { user, list } = props
    return (
        <div>
            {/* <Link to={`/api/users/${user._id}`}> */}
                <div>
                {user.name}
                </div>

                {/* {!list && (
                    <>
                    {user.name}
                    </>
                )}
            </Link> */}
        </div>
    )
}

export default Profile;
