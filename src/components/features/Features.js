import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe, FaDatabase } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What We Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Data Analysis"
          des="Specializes in comprehensive data analytics services, encompassing business data preprocessing to ensure accuracy, data pattern identification for insightful analysis, and the creation of dynamic dashboards."
          icon={<FaDatabase />}
        />
        <Card
          title="App Development"
          des="Our app development services help businesses harness the power of mobile technology to achieve their strategic goals."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Development"
          des="We offer a comprehensive suite of web development services tailored to your unique needs, helping you establish a powerful and engaging online presence that drives business growth."
          icon={<MdOutlineWeb />}
        />
        <Card
          title="Business Strategy"
          des=" Our team of experienced business strategists will work closely with you to develop a comprehensive strategy that aligns with your unique business goals, positions you for competitive advantage, and drives long-term success."
          
        />
        <Card
          title="UX Design"
          des="Creating a user-centric experience is crucial for businesses to thrive. Our team of experienced UX designers will help you craft an intuitive, engaging, and results-driven UX that sets your products and services apart."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Hosting services ensure your website is always up and running, secure, and accessible to users worldwide, enabling you to focus on growing your business and achieving your online goals."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features