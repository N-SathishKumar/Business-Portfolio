import React from 'react'
import { AppOne, AppTwo, AppThree } from "../../assets/index";
import Card from './Card';

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <Card
          title="Native and Cross-Platform App Development"
          des=" Our expert developers utilize cutting-edge technologies to build robust and scalable native apps for iOS and Android platforms. We also offer cross-platform development solutions using frameworks like React Native and Flutter, enabling you to reach a wider audience with a single codebase."
          src={AppOne}
        />
        <Card
          title="App Deployment and Launch"
          des=" We guide you through the app deployment process, ensuring a smooth and successful launch on the respective app stores (App Store for iOS, Google Play for Android). We'll help you optimize your app store listing, create a marketing plan, and generate buzz to attract new users."
          src={AppTwo}
        />
        <Card
          title="Ongoing App Maintenance and Support"
          des=" We provide ongoing maintenance and support services to keep your app up-to-date, secure, and functioning optimally. Our team will promptly address any issues, implement regular updates, adapt to evolving market trends, and provide ongoing consultation."
          src={AppThree}
        />
      </div>
    </section>
  );
}

export default Services