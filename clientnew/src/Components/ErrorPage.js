

function ErrorPage(){
    return(
        <div style={{display:"flex",
        flexDirection:"column",
        justifyContent:"Center",
        alignItems:"center", height:"73vh"}}>
            <img src="./error.jpeg" alt="Error 404" />
            <h3>This page is not found.Try Again!</h3>
        </div>
    );
}

export default ErrorPage ;