import React from "react";
const GetDice = (props) => {
    if (props.num===6) return (
        <div className='dice--num six'>
            <span>.</span><span>.</span>
            <span>.</span><span>.</span>
            <span>.</span><span>.</span>
        </div>)
    if (props.num===5) return (
        <div className='dice--num five'>
            <span><span className='left'>.</span><span>.</span></span>
            <span>.</span>
            <span><span className='left'>.</span><span>.</span></span>
        </div>
    )
    if (props.num===4) return (
        <div className='dice--num four'>
            <span>.</span><span>.</span>
            <span>.</span><span>.</span>
        </div>)
    if (props.num===3) return (
        <div className='dice--num three'>
            <span>.</span><span>.</span><span>.</span>

        </div>)
    if (props.num===2) return (
        <div className='dice--num two'>
            <span>.</span><span>.</span>

        </div>)
    if (props.num===1) return (
        <div className='dice--num one'>
            <span>.</span>

        </div>)

}
export default GetDice