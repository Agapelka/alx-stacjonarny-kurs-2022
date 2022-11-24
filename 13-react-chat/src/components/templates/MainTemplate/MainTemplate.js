import Navigation from "components/sections/Navigation/Navigation";
import Footer from "components/sections/Footer/Footer";

// templatki to reużywalne layouty aplikacji, zawierające zazwyczaj nawigację, footer i dynamiczną treść.
function MainTemplate(props) {
    return (
        <div>
            <Navigation />

            {props.children}

            <Footer />
        </div>

    )
}
export default MainTemplate;