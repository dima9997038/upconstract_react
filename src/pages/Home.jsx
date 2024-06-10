import React from "react";
import GetStartedComponent from "../components/GetStartedComponent";
import ServicesComponent from "../components/ServicesComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";

function Home(props) {
    return (
        <>
            <HeaderComponent/>
            <HeroComponent/>
            <main id="main">
                {/*<GetStartedComponent/>*/}
                {/*<ConstructionsComponent/>*/}
                <ServicesComponent/>
                {/*<AltServicesComponent/>*/}
                {/*<FeaturesComponent/>*/}
                <ProjectsComponent/>
                {/*<TestimonialsComponent/>*/}
                {/*<BlogPostsComponent/>*/}
            </main>
            <FooterComponent/>
        </>
    );
}

export default Home;
