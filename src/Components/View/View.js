import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { postContext } from '../../store/postContext';
import { firebaseContext } from '../../store/Context';

function View() {
    const [userDetails, setUserDetails] = useState('');
    const { postDetails } = useContext(postContext);
    const { firebase } = useContext(firebaseContext);

    useEffect(() => {
        const { userId } = postDetails;
        firebase
            .firestore()
            .collection('users')
            .where('id', '==', userId)
            .get()
            .then((res) => {
                res.forEach((doc) => {
                    setUserDetails(doc.data());
                });
            });
    }, [firebase, postDetails]);

    return (
        <div className="viewParentDiv">
            <div className="imageShowDiv">
                <img src={postDetails.url} alt="postImgage" />
            </div>
            <div className="rightSection">
                <div className="productDetails">
                    <p>&#x20B9; {postDetails.price} </p>
                    <span>{postDetails.item}</span>
                    <p>{postDetails.category}</p>
                    <span>{postDetails.date}</span>
                </div>
                {userDetails && (
                    <div className="contactDetails">
                        <p>Seller details</p>
                        <p>{userDetails.username}</p>
                        <p>{userDetails.phone}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default View;
