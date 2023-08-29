"use client";

//essential
import Wrapper from "@/hoc/Wrapper";
//components
import Hero from "@/components/Home/Hero";
import Trending from "@/components/Home/Trending";
import Top from "@/components/Home/Top";
import Category from "@/components/Home/Category";
import Discover from "@/components/Home/Discover";
import Highlight from "@/components/Home/Highlight";
import About from "@/components/Home/About";

export default function Home() {
    return (
        <>
            <Wrapper>
                <Hero />
                <Trending />
                <Top />
                <Category />
                <Discover />
            </Wrapper>
            <Highlight />
            <Wrapper>
                <About />
            </Wrapper>
        </>
    );
}
