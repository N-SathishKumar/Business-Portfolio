import React, { useState } from 'react'
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { ProfileOne, ProfileTwo, ProfileThree, quote } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Profile = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#ff014f",
              borderRadius: "50%",
              cursor: "pointer",
            }
            : {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };
  return (
    <section
      id="Profile"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="About Us" des="Profiles" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={ProfileOne}
                  alt="ProfileOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Co-Founder
                  </p>
                  <h3 className="text-2xl font-bold">Pranav</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Data Analyst
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-center">
                        Nomels InfoTech
                      </h3>
                      {/* <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Hello! I'm Pranav, a dedicated data analyst currently interning at Beier Group in Durban, South Africa. I thrive on translating raw data into actionable strategies in the dynamic field of Fintech. Beyond data, I'm passionate about sports and entrepreneurship, believing strategic thinking from sports can seamlessly apply to business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={ProfileTwo}
                  alt="ProfileTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Co-Founder
                  </p>
                  <h3 className="text-2xl font-bold">Rizwan</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Data Analyst
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-center">
                        Nomels InfoTech
                      </h3>
                      {/* <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    I'm Mohamed Rizwan, a dedicated ML engineer at Emerging Technologies, a startup based in Gujarat. Currently involved in impactful projects, I enjoy unraveling insights from complex datasets. My journey involves translating data into actionable strategies, contributing to the dynamic landscape of machine learning. Outside of tech, I'm passionate about exploring innovative solutions and the strategic aspects of the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={ProfileThree}
                  alt="ProfileThree"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Co-Founder
                  </p>
                  <h3 className="text-2xl font-bold">Sathish Kumar</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Web Developer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-center">
                        Nomels InfoTech
                      </h3>
                      {/* <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p> */}
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Hello! I'm Sathish Kumar, a passionate and skilled freelance web developer, driven to help businesses thrive online. With a blend of creativity and technical expertise, I craft visually stunning, user-friendly, and SEO-optimized websites that align with your brand and business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Profile