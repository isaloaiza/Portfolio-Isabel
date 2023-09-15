import React from 'react';


export const Body = () => {
    return (
        <div id="body" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
            {/* Information */}
            <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
                <div className="flex flex-col gap-8">
                    <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
                        programmer in development{" "}
                        <span className="py-2 px-6 border-8 border-pink-900 relative inline-block text-emerald-700">
                            FrontEnd
                        </span>
                    </h1>
                    <p className="text-black text-2xl leading-[2.5rem]">
                        Hey, mi nombre es isabel loaiza. Soy programadora en desarrollo,
                         con ganas de aprender cosas nuevas y desenvolverme en esta area.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl bg-pink-900">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className="md:col-span-3 flex items-center justify-center relative">
                {/* Content image */}
                <div>
                    <img
                        src="https://cdn.pixabay.com/photo/2021/08/12/19/24/saturn-6541609_1280.png"
                        className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
                    />
                </div>




            </div>
        </div>
    );
}

