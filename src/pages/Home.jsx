import React from "react";
import GetStartedComponent from "../components/GetStartedComponent";
import ConstructionsComponent from "../components/ConstructionsComponent";
import ServicesComponent from "../components/ServicesComponent";
import AltServicesComponent from "../components/AltServicesComponent";
import FeaturesComponent from "../components/FeaturesComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import TestimonialsComponent from "../components/TestimonialsComponent";
import BlogPostsComponent from "../components/BlogPostsComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";

function Home(props) {
    return (
        <>
            <HeaderComponent/>
            <HeroComponent/>
            <main id="main">
                <GetStartedComponent/>
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
