"use client";

//essential
import Wrapper from "@/hoc/Wrapper";
//components
import Hero from "@/components/Home/Hero";
import Trending from "@/components/Home/Trending";
import Top from "@/components/Home/Top";
import Genres from "@/components/Home/Genres";
import Discover from "@/components/Home/Discover";
import Highlight from "@/components/Home/Highlight";
import About from "@/components/Home/About";
import Subscribe from "@/components/Home/Subscribe";
import Footer from "@/components/Home/Footer";

export default function Home() {
    return (
        <>
            <Wrapper>
                <Hero />
                <Trending />
                <Top />
                <Genres />
                <Discover />
            </Wrapper>
            <Highlight />
            <Wrapper>
                <About />
                <Subscribe />
                <Footer />
            </Wrapper>
        </>
    );
}
