import React, {  useState } from 'react'
import Title from '../layouts/Title';
import DataAnalysis from './DataAnalysis';
import WebDev from './WebDev';
import AppDev from './AppDev'

const Services = () => {
   const [dataAnalysisData, setDataAnalysisData] = useState(true);
   const [webDevData, setWebDevData] = useState(false);
   const [appDevData, setAppDevData] = useState(false);
  return (
    <section id="services" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT ABOUT SERVICE" des="Services" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
          <li
            onClick={() =>
              setDataAnalysisData(true) &
              setWebDevData(false) &
              setAppDevData(false)
            }
            className={`${
              dataAnalysisData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Data Anaysis
          </li>
          <li
            onClick={() =>
              setDataAnalysisData(false) &
              setWebDevData(true) &
              setAppDevData(false)
            }
            className={`${
              webDevData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Web Development
          </li>
          <li
            onClick={() =>
              setDataAnalysisData(false) &
              setWebDevData(false) &
              setAppDevData(true)
            }
            className={`${
              appDevData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            App Development
          </li>
        </ul>
      </div>
      {dataAnalysisData && <DataAnalysis />}
      {webDevData && <WebDev />}
      {appDevData && <AppDev />}
 
    </section>
  );
}

export default Services