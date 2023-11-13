/* eslint-disable react/prop-types */

const Cover = ({img , title, subtitle}) => {
        const bannerStyle = {
            backgroundImage: `url(${img})`,
        }
    return (
        <div className='min-h-[700px] mb-24 mx-auto max-w-screen-2xl w-full bg-cover' style={bannerStyle}>
            <div className='min-h-[170px]'>

            </div>
            <div style={{backgroundImage: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%)`}} className='h-[460px]  px-32 py-24 w-[1100px]  mx-auto '>
                <h1 className='text-8xl text-white font-bold text-center mb-3 mt-12 uppercase'>{title}</h1>
                <p className='text-center text-white font-semibold  text-2xl'>{subtitle ? subtitle : 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}</p>
            </div>
        </div>
    );
};


export default Cover;