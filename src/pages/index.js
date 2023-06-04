import Link from "next/link";
import hero from "../../public/assets/hero.png"
import Image from "next/image";

export default function HomePage() {
    return (
        <div className="grid-halves h-screen-nav">
            <div className="bg-teal border-right">
                <div className="column-padding">
                    <div className="tablet-centered">
                        <div className="content-grid home-hero">
                            <h1>
                                The Most <br /> Trendy Products
                            </h1>
                            <p className="section-subtitle">Be a Trend setter of the internet all here</p>
                            <Link href='/products' className="large-button">
                                <div className="large-button-text">Explore Products</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-salmon">
                <div className="column-padding centered">
                    <div className="callout-wrap"> 
                        <Image src={hero} placeholder="blur" alt="hero" className="callout-image" />
                    </div>
                </div>
            </div>
        </div>
    )   
}
