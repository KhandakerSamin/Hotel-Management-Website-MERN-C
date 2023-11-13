import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopulerMenu = () => {

    const [menu] = useMenu()
    const populer = menu.filter(item => item.category === 'popular')


    return (
        <section className='mb-24 max-w-screen-xl mx-auto'>
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Populer Items'}
            ></SectionTitle>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2'>
                {
                    populer.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className='flex items-center justify-center mt-10 '>
                <Link to='menu'><button className='btn btn-outline border-0 border-b-4'>view full menu</button></Link>
            </div>


            <div className='mb-24 mt-24'>
                <div className='w-full bg-black flex justify-center h-[250px] items-center'>
                    <h1 className='text-white font-semibold text-5xl'>Call Us: +88 0192345678910</h1>
                </div>
            </div>

        </section>
    );
};

export default PopulerMenu;