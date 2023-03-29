function SmallSquare(props){
    const backColor=props.isHeld?"#d8ade9":"#ffffff"
    // const int=props.isHeld?num:props.num

    return(
        <>
            <div onClick={props.holdSquares} className="small-box" style={{backgroundColor:backColor}}>
               {props.num}
            </div>
        </>
    )
}

export default SmallSquare