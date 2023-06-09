import Header from "./Header";

export default function Contact(){
    return(
        <>
            <section className="contact">
                <div className="heading">
                    <h2>Contact <span>Me!</span></h2>
                </div>
                <div className="contact-content">
                    <div className="info">
                        <p className="details"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque aspernatur amet sunt iusto dolorum quas ipsum voluptatibus et perspiciatis accusantium porro, magni eum quisquam fuga, enim tempore sint id.</p>
                    </div>
                    <form action="submit" className="form">
                        <input type="text" placeholder="first-name" />
                        <input type="text" placeholder="last-name" />
                        <input type="email" placeholder="email" />
                        <textarea name="" id="" placeholder="your message"></textarea>
                        <input type="submit" value="Send Message" className="btn" /> 
                    </form>
                </div>
            </section>
        </>
    )
}