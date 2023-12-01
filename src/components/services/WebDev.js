import React from 'react'
import { WebOne, WebTwo, WebThree } from "../../assets/index";
import Card from './Card';

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <Card
          title="Creating a Website"
          des=" This involves gathering detailed information about the client's business,Development and Implementation,Design and Prototyping, Front-end Development and Back-end Development."
          src={WebOne}
        />
        <Card
          title="Web Hosting"
          des=" Hosting providers store website files on servers and make them accessible to users worldwide.It includes Domain name registration."
          src={WebTwo}
        />
        <Card
          title="Web Maintenence"
          des=" Website maintenance is the ongoing process of keeping a website up-to-date, secure, and functioning properly.Installing security patches and updates for the website's content management system (CMS)."
          src={WebThree}
        />
      </div>
    </section>
  );
}

export default Services