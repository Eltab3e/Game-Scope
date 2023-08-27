"use client";

//essential
import Wrapper from "@/hoc/Wrapper";
//components
import Hero from "@/components/Home/Hero";
import Trending from "@/components/Home/Trending";
import Top from "@/components/Home/Top";
import Category from "@/components/Home/Category";

export default function Home() {
    return (
        <Wrapper>
            <Hero />
            <Trending />
            <Top />
            <Category />
        </Wrapper>
    );
}
