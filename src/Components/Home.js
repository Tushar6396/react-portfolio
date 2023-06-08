import Image from '../Images/image.jpg';

export default function Home(){
    return(
        <section className="home">
            <div className="home-content">
                <h3>Hello, Its Me</h3>
                <h1>Tushar Verma</h1>
                <h3>I'm a <span>Web Developer</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit at alias velit, sed neque, molestias perspiciatis facere, itaque dolorem numquam necessitatibus vero earum dolore! Quos ipsam vitae quibusdam neque!</p>
                <div class="social-media">
				<a href="#"><i class='bx bxl-facebook'></i></a>
				<a href="#"><i class='bx bxl-instagram' ></i></a>
				<a href="#"><i class='bx bxl-twitter' ></i></a>
				<a href="#"><i class='bx bxl-linkedin' ></i></a>
			    </div>
            </div>
            <div className="image">
                <img src={Image} alt="" />
            </div>
        </section>
    )
}