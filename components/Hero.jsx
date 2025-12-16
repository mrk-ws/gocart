"use client";
import { assets } from "@/assets/assets";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import CategoriesMarquee from "./CategoriesMarquee";

const Hero = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  return (
    <div className="mx-6">
      <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10">
        <div>
          <div className="relative h-64 md:w-[850px] flex-1 flex flex-col rounded-3xl xl:min-h-full overflow-hidden group">
            {/* 2. استخدم Next/Image مع خاصية "fill" لملء الـ div الأب */}
            <Image
              src={assets.hero_model_img1}
              alt="Background Image"
              fill // لملء العنصر الأب
              className="object-cover rounded-3xl" // لضمان تغطية الصورة للـ div مع الحفاظ على الأبعاد
            />

            {/* 3. طبقة التراكب (Overlay) */}
            {/* absolute inset-0 يجعله يغطي العنصر الأب بالكامل */}
            {/* bg-black/30 تعني خلفية سوداء بشفافية 30% (تظليل خفيف) */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* 4. محتوى الـ div. يجب أن يكون له z-index أعلى ليظهر فوق التراكب */}
            <div className="relative z-10 flex flex-col  items-center justify-center h-full">
              <div className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm">
                <span className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs">
                  NEWS
                </span>{" "}
                Free Shipping on Orders Above $50!{" "}
                <ChevronRightIcon
                  className="group-hover:ml-2 transition-all"
                  size={16}
                />
              </div>
              <div className="flex gap-3 p-2 items-center">

                <h2 className="text-xl sm:text-4xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-200 to-[#A0FF74] bg-clip-text text-transparent max-w-xs  sm:max-w-md">
                  Experience Saudi Arabia, Fully Managed.
                </h2>
                <p className="text-sm my-3 text-slate-200 max-w-xs sm:max-w-md">
                  From spiritual journeys to unforgettable lesiure experiences, we
                  manage every detail of your trip inside Saudi Arabia -
                  professionally, safely, and seamlessly.
                </p>
              </div>
              <div className="flex gap-8 items-center">

                <ul className=" text-slate-300 text-sm sm:text-sm max-w-xs sm:max-w-md mt-4 space-y-2">
                  <li>✔ Local licensed ground operator in Saudi Arabia</li>
                  <li>✔ Tailored itineraries for UK & European travelers</li>
                  <li>✔ Religious & leisure travel specialists</li>
                  <li>✔ English-speaking on-ground support</li>
                </ul>
                <button className='bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition'>Plan Your Saudi Journey</button>
              </div>

            </div>
          </div>
        </div>
        {/* <div className='relative flex-1 flex flex-col bg-green-200 bg rounded-3xl xl:min-h-100 group'> */}
        {/* <div className="p-5 sm:p-16">
                        <div className='inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm'>
                            <span className='bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs'>NEWS</span> Free Shipping on Orders Above $50! <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                        </div>
                        <h2 className='text-xl sm:text-4xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs  sm:max-w-md'>
                            Experience Saudi Arabia, Fully Managed.
                        </h2>
                        <p className='text-sm my-3 text-slate-500 max-w-xs sm:max-w-md'>From spiritual journeys to unforgettable lesiure experiences, we manage every detail of your trip inside Saudi Arabia - professionally, safely, and seamlessly.</p>
                        <ul className=' text-slate-600 text-sm sm:text-sm max-w-xs sm:max-w-md mt-4 space-y-2'>
                          <li>✔ Local licensed ground operator in Saudi Arabia</li>
                          <li>✔ Tailored itineraries for UK & European travelers</li>
                          <li>✔ Religious & leisure travel specialists</li>
                          <li>✔ English-speaking on-ground support</li>
                        </ul>
          <div className='text-slate-800 text-sm font-medium mt-4 sm:mt-8'>
                            <p>Starts from</p>
                            <p className='text-3xl'>{currency}4.90</p>
                        </div>
          <button className='bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition'>Plan Your Saudi Journey</button>
        </div> */}
        {/* <Image className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm' src={assets.hero_model_img} alt="" /> */}
        {/* </div> */}
        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
          <div className="flex-1 flex items-center justify-between w-full bg-orange-200 rounded-3xl p-6 px-8 group">
            <div>
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40">
                Best products
              </p>
              <p className="flex items-center gap-1 mt-4">
                View more{" "}
                <ArrowRightIcon
                  className="group-hover:ml-2 transition-all"
                  size={18}
                />{" "}
              </p>
            </div>
            <Image className="w-35" src={assets.hero_product_img1} alt="" />
          </div>
          <div className="flex-1 flex items-center justify-between w-full bg-blue-200 rounded-3xl p-6 px-8 group">
            <div>
              <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40">
                20% discounts
              </p>
              <p className="flex items-center gap-1 mt-4">
                View more{" "}
                <ArrowRightIcon
                  className="group-hover:ml-2 transition-all"
                  size={18}
                />{" "}
              </p>
            </div>
            <Image className="w-35" src={assets.hero_product_img2} alt="" />
          </div>
        </div>
      </div>
      <CategoriesMarquee />
    </div>
  );
};

export default Hero;
