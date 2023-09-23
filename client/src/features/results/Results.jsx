import React from "react";


const Results = () => {


const handleOnClickLike = () => {
// functionality for clicking the like button goes here.
// AFter request is sent, connect component to props to be send to the favorites component. 
};
const handleOnClickDislike = () => {
    // functionality for clicking the dislike button goes here. 
    //After request is sent, connect component to props to be sent to dislikes component
};
    

    return (

        <>

        <h1>Results</h1>

        <h2>Tennis Courts Available</h2>

        <>
        <p className='Results_Display' id={'resultsApi'}>Location: <button onclick={handleOnClickLike}id='LikeButton'>👍</button> <button onclick={handleOnClickDislike} id='DislikeButton'>👎</button><br/>-obj-</p>
        </>

        <>
        <p className='Results_Display' id={'resultsApi'}>Location: <button onclick={handleOnClickLike}id='LikeButton'>👍</button> <button onclick={handleOnClickDislike} id='DislikeButton'>👎</button><br/>-obj-</p>
        </>

        <>
        <p className='Results_Display' id={'resultsApi'}>Location: <button onclick={handleOnClickLike}id='LikeButton'>👍</button> <button onclick={handleOnClickDislike} id='DislikeButton'>👎</button><br/>-obj-</p>
        </>

        <>
        <p className='Results_Display' id={'resultsApi'}>Location: <button onclick={handleOnClickLike}id='LikeButton'>👍</button> <button onclick={handleOnClickDislike} id='DislikeButton'>👎</button><br/>-obj-</p>
        </>

        <>
        <p className='Results_Display' id={'resultsApi'}>Location: <button onclick={handleOnClickLike}id='LikeButton'>👍</button> <button onclick={handleOnClickDislike} id='DislikeButton'>👎</button><br/>-obj-</p>
        </>
      

        </>
    )
};


export default Results