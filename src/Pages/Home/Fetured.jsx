import featuredImg from '../../assets/home/featured.jpg'

const Fetured = () => {

    const combinedStyle = {
        backgroundImage: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url(${featuredImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed',
    };

    return (
        <div style={combinedStyle} className="bg-cover mb-24 min-h-[700px] py-6 px-52">
            <div className="md:w-4/12 text-center mx-auto mb-12 mt-20">
                <p className=" text-xl text-yellow-600 mb-2">---Check it out---</p>
                <hr />
                <p className=" text-4xl text-white uppercase border-y-4 py-4">featured item</p>
                <hr />
            </div>
            <div className="flex max-w-screen-xl mx-auto justify-center items-center">
                <div className="w-1/2">
                    <img className="w-[600px] h-[300px]" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white w-1/2">
                    <p className="text-xl">November 11, 2023</p>
                    <p className="text-2xl font-medium">
                        WHERE CAN I GET SOME?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="text-white uppercase px-4 py-2 font-bold rounded-md bg-transparent hover:bg-slate-900 border-b border-b-white my-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;