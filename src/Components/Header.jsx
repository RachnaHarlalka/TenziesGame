function Header(props){
    console.log("darmode",props.darkMode)
    const theme=props.darkMode?"dark":"light";
    const icon=props.darkMode?"on":"off";
    return(
        <>
        <div className={`header ${theme}-header`}>
            <span className={`${theme}-text bold`}>Light</span>
            <i 
                className={`fa-solid fa-toggle-${icon} fa-3x icon ${theme}-text`} 
                onClick={props.toggle}
                >
            </i>
            <span className={`${theme}-text margin-right bold`}>Dark</span>
        </div>
        </>
    )
}
export default Header