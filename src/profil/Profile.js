import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {
  return (
    <div style={{textAlign:'center',marginLeft:20,marginRight:20}}>
        <p style={{fontWeight:'bold'}}>{props.fullname}</p>
        <p style={{backgroundColor:'orange',marginLeft:400,marginRight:400}}>{props.bio}</p> 
        <p style={{fontWeight:'bold'}}>{props.profession}</p>
        <p>{props.children}</p>
        <button style={{backgroundColor:'blue', color:'white'}}onClick={props.handleName}> Cliquez ici </button>
    </div>
  )
}

Profile.defaultProps={
    fullname:"Nom & Prenom",
    bio:"Ma bio",
    profession:"Ma profession",
    children:"Mo image",
}

Profile.propTypes={
    fullname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    children:PropTypes.element,
    handleName:PropTypes.func 
    }

export default Profile