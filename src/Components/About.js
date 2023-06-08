import Image from "../Images/image.jpg"

export default function About(){
    return(
        <>
            <div className="heading">
                <h2>About <span>Me</span></h2>
            </div> 
            <section className="about">                       
                <div className="image">
                    <img src={Image} alt="Image" />
                </div>
                <div className="about-content">
                    <h2>Frontend Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>           
            </section>
            
        </>
    )
}