import Header from "../components/GlobalComponents/Header";
import SearchBar from "../components/HomeComponents/SearchBar";
import HomeContent from "../components/HomeComponents/HomeContent";

export default function Home() {
    return (
        <>
            <Header headerVersion={"v2"}/>
            <SearchBar />
            <HomeContent />
        </>
    );
}