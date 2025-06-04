function Notfound(){
    return(
        <section className="hero is-fullheight is-flex is-justify-content-center is-align-items-center">
            <p className="title poppins-semibold has-text-centered">404 Page Not Found !</p>
            <button className="button is-warning" onClick={()=>window.location.href="/"}>Back To Home</button>
        </section>
    )
}

export default Notfound