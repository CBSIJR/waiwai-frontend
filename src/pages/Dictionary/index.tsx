import Banner from "./components/Banner";
import WordsList from "./components/WordsList";

const Dictionary: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center lg:mt-16">
            <Banner />
            <div className="py-8 px-4 md:px-8">
                <WordsList />
            </div>
        </div>
    );
};

export default Dictionary;
