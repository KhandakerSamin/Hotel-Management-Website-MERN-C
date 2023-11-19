/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 text-center mx-auto mb-12 pt-16">
            <p className=" text-xl text-yellow-600 mb-2">---{subHeading}---</p>
            <hr />
            <p className=" text-4xl uppercase border-y-4 py-4">{heading}</p>
            <hr />
        </div>
    );
};

export default SectionTitle;