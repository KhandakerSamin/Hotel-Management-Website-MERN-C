import singleBannerIng from '../../assets/home/chef-service.jpg'

const SingleBanner = () => {
    const bannerStyle = {
        backgroundImage: `url(${singleBannerIng})`,
    };
    return (
        <div className='min-h-[550px] mb-24 mx-auto max-w-screen-xl' style={bannerStyle}>
            <div className='min-h-[110px]'>

            </div>
            <div className='h-[330px] px-32 py-24 md:w-[1000px] bg-white mx-auto '>
                <h1 className='text-5xl text-center mb-3'>Bistro Boss</h1>
                <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default SingleBanner;