const { createRoot } = ReactDOM;
const { Fragment } = React;

const coffeeData = [
    {
        className: "green",
        header: "Green Beans",
        temp: "22°C (72°F)",
        description: "Green coffee as it arrives at the dock. They can be stored for approximately 12-18 months in a climate controlled environment before quality loss is noticeable."
    },
    {
        className: "light",
        header: "Light Roast",
        temp: "205°C (401°F)",
        description: "Moderate light brown, but still mottled in appearance. A preferred roast for some specialty roasters, highlights origin characteristics as well as complex acidity."
    },
    {
        className: "city",
        header: "City Roast",
        temp: "219°C (426°F)",
        description: "Medium brown, common for most specialty coffee. Good for tasting origin character, although roast character is noticeable."
    },
    {
        className: "vienna",
        header: "Vienna Roast",
        temp: "230°C (446°F)",
        description: "Moderate dark brown with light surface oil, more bittersweet, caramel flavor, acidity muted. In the middle of second crack. Any origin characteristics have become eclipsed by roast at this level."
    },
    {
        className: "italian",
        header: "Italian Roast",
        temp: "245°C (473°F)",
        description: "Nearly black and shiny, burnt tones become more distinct, acidity nearly eliminated, thin body."
    }
];


const countryData = [
    {
        country: "BRAZIL",
        text: "Arabica dominates both Brazil and the world as a whole with about 85% of the production; robusta accounts for the remaining 30%. In Brazil, arabica production is located in the main coffee-growing cluster of states led by Rio where arabica is produced almost exclusively. Robusta is primarily grown in the northwestern much smaller state of Espirito Santo where about 80% of the coffee is robusta."
    },
    {
        country: "COLOMBIA",
        text: "Colombia has a reputation as producing mild, well balanced coffee beans.Colombia's average annual coffee production of 11.5 million bags is the third total highest in the world, after Brazil and Vietnam; though highest in terms of the arabica bean. The beans are exported to United States, Germany, France, Japan, and Italy. Most coffee is grown in the Colombian coffee growing axis region."
    },
    {
        country: "INDIA",
        text: "Indian coffee, grown mostly in southern India under monsoon rainfall conditions, is also termed as 'Indian monsooned coffee'. Its flavor is defined as: 'At its best similar to the flavor characteristics of Pacific coffees, but at its worst bland and uninspiring'. The two well known species of coffee grown are the Arabica and Robusta. Probably the most commonly planted Arabica in India and Southeast Asia is S.795."
    },
    {
        country: "ETHIOPIA",
        text: "Ethiopian beans can be divided into 3 categories: Longberry, Shortberry, and Mocha. Longberry varieties consist of the largest beans and are often considered of the highest quality in both value and flavor. Shortberry varieties are smaller. The Mocha variety is a highly prized commodity. Mocha Harars are known for their peaberry beans that often have complex chocolate, spice and citrus notes."
    },
    {
        country: "COSTA RICA",
        text: "Costa Rican coffee beans are considered among the best in the world. Tarrazu is thought to produce the most desirable coffee beans in Costa Rica. In 2012, Tarrazu Geisha coffee became the most expensive coffee sold by Starbucks in 48 of their stores in the United States, using the Clover automated French press. The finest coffee is typically grown at altitudes of 1200 to 1700 meters."
    },
    {
        country: "KENYA",
        text: "The acidic soil in highlands of central Kenya, just the right amount of sunlight and rainfall provide excellent conditions for growing coffee plants. Coffee from Kenya is of the 'Colombia mild' type, and is well known for its intense flavor, full body, and pleasant aroma with notes of cocoa and high grade coffee from Kenya is one of the most sought-after coffees in the world."
    }
];


function Header() {
    return (
        <div className="header">
            {/* <h1>The Best Coffee Regions</h1> */}
        </div>
    );
}

function Coffees() {
    return (
        <div className="roasting">
            <h3>A Note on Roasting</h3>
            <p>
                Witness the captivating alchemy of coffee as raw beans metamorphose into exquisite roasted delights. Expert
                roasters skillfully determine the perfect roast level, guided by the evolving hues and flavors that culminate in a
                sensational coffee experience. Prepare to embark on a remarkable journey of taste and aroma, where science and art
                unite in every exquisite cup.
            </p>
            <br />
            <div id="coffees">
                {coffeeData.map(({ className, header, temp, description }, index) => (
                    <div className={className} key={`coffee-${index}`}>
                        <h4>{header}</h4>
                        <h5>{temp}</h5>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


function Countries() {
    return (
        <ul>
            {countryData.map(({ country, text }, index) => (
                <li key={`country-${index}`}>
                    <h2>{country} </h2>
                    <p>{text} </p>
                    <a href="#">{`LEARN MORE ABOUT ${country}`} </a>
                </li>
            ))}
        </ul>
    );
}

function Footer() {
    return (
        <footer>
            <div id="tech-icons">
                <span id="tech-stack">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />                   
                </span>
                <span id="github">
                    <a href="https://github.com/Jeffs0412/coffee-info" target="_blank" className="devicon-github-original"></a>
                        <p id="source-code">Visit Repository</p>
                </span>
            </div>
        </footer>
    );
}

function Contents() {
    return (
        <Fragment>
            <Header />
            <Coffees />
            <Countries />
            <Footer />
        </Fragment>
    );
}

const root = document.querySelector("#root");
const rootContainer = createRoot(root);

rootContainer.render(<Contents />);