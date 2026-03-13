//Next
import Image from "next/image";

//Components
import LogosList from "./LogosList";
import GridComponents from "./GridComponents";
import GridWork from "./GridWork";
import GridTeam from "./GridTeam";
import AgencyForm from "./AgencyForm";

//Interface
interface MainProps {
  lightMode: boolean;
}

const Main = ({ lightMode }: MainProps) => {
  return (
    <main className="flex flex-col items-center gap-10 pt-50">
      <div
        className={`${lightMode ? "border-white" : ""} flex flex-row items-center gap-2 border rounded-2xl py-1 px-2`}
      >
        <Image
          src="/img/group_profile.png"
          alt="People Image"
          width={100}
          height={100}
        />
        <p className={lightMode ? "text-white" : ""}>Trusted by 10k+ people</p>
      </div>
      <h1
        className={`text-center w-[50%] ${lightMode ? "text-white" : "text-[#364153]"} font-black text-6xl`}
      >
        Turning imagination into{" "}
        <span className="bg-linear-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </h1>
      <p
        className={`text-lg ${lightMode ? "text-white opacity-80" : "text-[#646b79]"} font-semibold text-center w-[30%]`}
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>
      <Image
        src="/img/hero_img.png"
        alt="Hero Image"
        width={1000}
        height={1000}
      />
      <p
        className={`text-lg ${lightMode ? "text-white opacity-80" : "text-[#646b79]"} font-semibold text-center`}
      >
        Trusted by Leading Companies
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <LogosList urlImage="microsoft_logo.png" altName="Microsoft Logo" />
        <LogosList urlImage="zoom_logo.png" altName="Zoom Logo" />
        <LogosList urlImage="rakuten_logo.png" altName="Rakuten Logo" />
        <LogosList urlImage="coinbase_logo.png" altName="Coinbase Logo" />
        <LogosList urlImage="airbnb_logo.svg" altName="Airbnb Logo" />
        <LogosList urlImage="google_logo.svg" altName="Google Logo" />
      </div>
      <h1
        className={`text-center w-[50%] ${lightMode ? "text-white" : "text-[#364153]"} font-black text-2xl mt-20`}
      >
        How can we help?
      </h1>
      <p
        className={`text-lg ${lightMode ? "text-white opacity-80" : "text-[#646b79]"} font-semibold text-center w-[35%]`}
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 w-[58%]">
        <GridComponents
          urlImage="advertising"
          altImage="Advertising Logo"
          title="Advertising"
          desc="We turn bold ideas into powerful digital solutions that connect, engage..."
          lightMode={lightMode}
        />
        <GridComponents
          urlImage="advertising"
          altImage="Advertising Logo"
          title="Advertising"
          desc="We turn bold ideas into powerful digital solutions that connect, engage..."
          lightMode={lightMode}
        />
        <GridComponents
          urlImage="advertising"
          altImage="Advertising Logo"
          title="Advertising"
          desc="We turn bold ideas into powerful digital solutions that connect, engage..."
          lightMode={lightMode}
        />
        <GridComponents
          urlImage="advertising"
          altImage="Advertising Logo"
          title="Advertising"
          desc="We turn bold ideas into powerful digital solutions that connect, engage..."
          lightMode={lightMode}
        />
      </div>
      <h1
        className={`text-center w-[50%] ${lightMode ? "text-white" : "text-[#364153]"} font-black text-2xl mt-20`}
      >
        Our latest work
      </h1>
      <p
        className={`text-lg ${lightMode ? "text-white opacity-80" : "text-[#646b79]"} font-semibold text-center w-[35%]`}
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 w-[58%]">
        <GridWork
          urlImage="mobile_app"
          altImage="Mobile App Image"
          title="Mobile app marketing"
          desc="We turn bold ideas into powerful digital solutions that connect, engage..."
          lightMode={lightMode}
        />
        <GridWork
          urlImage="dashboard_management"
          altImage="Dashboard Management"
          title="Dashboard management"
          desc="We help you execute your plan and deliver results."
          lightMode={lightMode}
        />
        <GridWork
          urlImage="fitness_app"
          altImage="Fitness App Promotion"
          title="Fitness app promotion"
          desc="We help you create a marketing strategy that drives results."
          lightMode={lightMode}
        />
      </div>
      <h1
        className={`text-center w-[50%] ${lightMode ? "text-white" : "text-[#364153]"} font-black text-2xl mt-20`}
      >
        Meet the team
      </h1>
      <p
        className={`text-lg ${lightMode ? "text-white opacity-80" : "text-[#646b79]"} font-semibold text-center w-[30%]`}
      >
        A passionate team of digital experts dedicated to your brands success.
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 w-[58%]">
        <GridTeam
          urlImage="haley_photo.jpg"
          name="Haley Carter"
          jobPosition="CEO & founder"
          lightMode={lightMode}
        />
        <GridTeam
          urlImage="james_photo.jpg"
          name="James Walker"
          jobPosition="Ads manager"
          lightMode={lightMode}
        />
        <GridTeam
          urlImage="jessica_photo.avif"
          name="Jessica Morgan"
          jobPosition="Vice president"
          lightMode={lightMode}
        />
        <GridTeam
          urlImage="ashley_photo.jpg"
          name="Ashley Bennett"
          jobPosition="Marketing & sales"
          lightMode={lightMode}
        />
        <GridTeam
          urlImage="emily_photo.jpg"
          name="Emily Parker"
          jobPosition="Content marketer"
          lightMode={lightMode}
        />
        <GridTeam
          urlImage="ryan_photo.jpg"
          name="Ryan Mitchell"
          jobPosition="Content writer"
          lightMode={lightMode}
        />
        <GridTeam
          urlImage="megan_photo.jpg"
          name="Megan Brooks"
          jobPosition="Performance manager"
          lightMode={lightMode}
        />
        <GridTeam
          urlImage="amber_photo.jpg"
          name="Amber Foster"
          jobPosition="Senior writer"
          lightMode={lightMode}
        />
      </div>
      <h1
        className={`text-center w-[50%] ${lightMode ? "text-white" : "text-[#364153]"} font-black text-2xl mt-20`}
      >
        Reach out to us
      </h1>
      <p
        className={`text-lg ${lightMode ? "text-white opacity-80" : "text-[#646b79]"} font-semibold text-center w-[30%]`}
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>
      <AgencyForm lightMode={lightMode} />
    </main>
  );
};

export default Main;
