import React from "react";
import Image from "next/image";
import hero_pattern from "@/app/assets/images/dough.png";

const Hero = () => {
  return (
    <section className="bg-secondary_grey w-screen:h-[100%] 2xl:h-[50vh] shadow-sm">
      <div className="container flex xl:flex-row flex-col-reverse pt-10 xl:pt-0 w-full items-center">
        <div className="xl:w-[40%] w-full flex justify-center">
          <Image
            src={hero_pattern}
            width={450}
            height={450}
            alt="Hero"
            className="w-[450px] h-[450px]"
          />
        </div>

        <div className="xl:w-[60%] w-full px-3">
          <h2 className="text-3xl font-semibold hover:text-mint_green duration-1000 pb-3 text-center xl:text-start">
            Marzipan
          </h2>
          <div className="group relative inline-block overflow-hidden rounded border border-gray-100 px-12 py-3 bg-gray-200 text-sm font-medium  focus:outline-none focus:ring">
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-mint_green transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-mint_green transition-all duration-200 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-mint_green transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-mint_green transition-all duration-200 group-hover:h-full"></span>
            <p className="xl:text-base text-sm">
              Marzipan is a confection consisting primarily of sugar and almond
              meal (ground almonds), sometimes augmented with almond oil or
              extract. It is often made into sweets; common uses are
              chocolate-covered marzipan and small marzipan imitations of fruits
              and vegetables. It can also be used in biscuits or rolled into
              thin sheets and glazed for icing cakes, primarily birthday cakes,
              wedding cakes and Christmas cakes. Marzipan may also be used as a
              baking ingredient, as in stollen or banket. In some countries, it
              is shaped into small figures of animals as a traditional treat for
              New Year's Day or Christmas. Marzipan is also used in Tortell, and
              in some versions of king cake eaten during the Carnival season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
