//required
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchGameTrailer } from "@/shared/hooks/games/useFetchGameTrailer";
//components
import Error from "@/components/shared/Error";

const Container = styled.div`
    width: 100%;
    height: 75vh;
    position: relative;
    overflow: hidden;
`;

const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Highlight = () => {
    const { data, isLoading, isError } = useFetchGameTrailer(2454);

    const trailer = data?.results[0]?.data[480];

    return (
        <Container>
            {isLoading ? (
                <Skeleton
                    width={"100%"}
                    height={"100%"}
                />
            ) : isError ? (
                <Error />
            ) : (
                trailer && (
                    <VideoBackground
                        id="video"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src={trailer}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </VideoBackground>
                )
            )}
        </Container>
    );
};

export default Highlight;
