import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {firebaseContext, AuthContext} from '../../store/Context';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(firebaseContext);
  const date = new Date();
  const history = useHistory()

  const handleSubmit = ()=>{
    firebase.storage().ref(`/images/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          item,
          category,
          price,
          url,
          userId:user.uid,
          date: date.toDateString()
        }).catch((err)=>console.log(err))
      }).catch((err)=>console.log(err))
    }).catch((err)=>console.log(err)).then(()=>{
      history.push('/');
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="itemName">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={item}
            onChange={e=>setItem(e.target.value)}
            id="itemName"
            name="itemName"
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={e=>setCategory(e.target.value)}
            id="category"
            name="category"
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input 
            className="input" 
            type="number" 
            value={price}
            onChange={e=>setPrice(e.target.value)}
            id="price" 
            name="price" 
          />
          <br />
          <br />
          { image && <img alt="Posts" width="200px" height="200px" src={ image ? URL.createObjectURL(image) : ''}></img>}
          <br />
          <br />
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">Upload & Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
