import Applications_Received from "../Applications_Received/Applications_Received";
import Count_candidates from "../Count_candidates/Count_candidates";
import Create_Jobs from "../Create_Jobs/Create_Jobs";
import All_Jobs from "../Jobs/All_Jobs/All_Jobs";
import Nabvar from "../Nabvar/Nabvar";
import Statistics from "../Statistics/Statistics";


const Home = () => {
    return (
        <div className="w-full flex space-x-8">
            <div className="w-3/4 ml-8">
                <Nabvar></Nabvar>
                <Count_candidates></Count_candidates>
                <Statistics></Statistics>
                <Applications_Received></Applications_Received>
            </div>

            <div className="border-l-4 border-[#11998e69] rounded w-full">
                <Create_Jobs></Create_Jobs>
                <All_Jobs></All_Jobs>
            </div>
        </div>
    );
};

export default Home;
