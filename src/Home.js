import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                // src="https://images-eu-ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_B01,204,203,200_.jpg"
                />
                <Product
                    id="49538094"
                    title="Spalding NBA Replica Indoor/Outdoor Game Ball"
                    price={14.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51LHuTczHqL.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="4903850"
                    title="iTouch Air 3 Smartwatch Fitness Tracker Heart Rate Step Counter Sleep Monitor Message IP68"
                    price={59.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/615KcdDo9OL._AC_UY436_FMwebp_QL65_.jpg"
                />
                <Product
                    id="23445930"
                    title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                    price={74.39}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UY436_FMwebp_QL65_.jpg"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (Latest Model, 4th Generation)"
                    price={598.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/719UcXKzXHL._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="90829332"
                    title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
                    price={447.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UY436_FMwebp_QL65_.jpg"
                />

            </div>
            
            {/* Product  */}
        </div>
    )
}

export default Home
