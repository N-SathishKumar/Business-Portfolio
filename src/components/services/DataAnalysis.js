import React from 'react'
import { DataOne, DataTwo, DataThree } from "../../assets/index";
import Card from './Card';

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <Card
          title="Business Data Preprocessing"
          des=" We meticulously handle your data, ensuring accuracy and reliability. Our preprocessing techniques lay a strong foundation for robust analytics."
          src={DataOne}
        />
        <Card
          title="Data Pattern Identification"
          des=" Unlock the potential within your datasets with our advanced analytics. We identify patterns that provide valuable insights, empowering your business to make informed decisions."
          src={DataTwo}
        />
        <Card
          title="Dynamic Dashboard Creation"
          des=" Visualize your data like never before with our dynamic dashboard solutions. We craft intuitive and interactive dashboards that make complex data easily understandable, facilitating efficient decision-making."
          src={DataThree}
        />
      </div>
    </section>
  );
}

export default Services