import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import RecomendCard from "../Shared/RecomendCard";

const Recomend = () => {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recomendMenu = data.slice(0,3)
                setMenu(recomendMenu)
            })
    }, [])

    return (
        <div className="max-w-screen-xl mb-24 mx-auto">
            <SectionTitle
                subHeading={'Should try'}
                heading={'CHEF RECOMMENDS'}>
            </SectionTitle>
            <div className='grid gap-x-10 grid-cols-1 md:grid-cols-3'>
                {
                    menu.map(item => <RecomendCard key={item._id} item={item}></RecomendCard>)
                }
            </div>

        </div>
    );
};

export default Recomend;