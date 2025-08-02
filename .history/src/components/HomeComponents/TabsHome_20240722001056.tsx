import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Course from "../Courses/Course";
import { useState } from "react";

export default function TabsHome({ courses }: any) {

  const [coursesTabs] = useState([
    {
      name: "Online Courses",
      // courses: [
      //   {
      //     courseId: 1,
      //     coursePhoto: imgsCourses[0],
      //     numStudent: 40,
      //     title: "Coaching",
      //     date: "1 - 28 July 2022",
      //     fullDesc:
      //       "A life coaching course is a life experience that helps you know yourself and reach your goals in a way that enables you to discover and hone your talents and skills, solve your problems and overcome them and the pressures of life. Live coaching is an innovative method that helps participants explore their personalities.",
      //     price: 380,
      //     priceDisc: 200,
      //     category: "Online Courses",
      //   },
      //   {
      //     courseId: 2,
      //     coursePhoto: imgsCourses[1],
      //     numStudent: 40,
      //     title: "NLP",
      //     date: "1 - 28 July 2022",
      //     fullDesc:
      //       "A life coaching course is a life experience that helps you know yourself and reach your goals in a way that enables you to discover and hone your talents and skills, solve your problems and overcome them and the pressures of life. Live coaching is an innovative method that helps participants explore their personalities.",
      //     price: 380,
      //     priceDisc: 200,
      //     category: "Online Courses",
      //   },
      //   {
      //     courseId: 3,
      //     coursePhoto: imgsCourses[2],
      //     numStudent: 40,
      //     title: "Success strategies",
      //     date: "1 - 28 July 2022",
      //     fullDesc:
      //       "A life coaching course is a life experience that helps you know yourself and reach your goals in a way that enables you to discover and hone your talents and skills, solve your problems and overcome them and the pressures of life. Live coaching is an innovative method that helps participants explore their personalities.",
      //     price: 380,
      //     priceDisc: 200,
      //     category: "Online Courses",
      //   },
      //   {
      //     id: 4,
      //     coursePhoto: imgsCourses[3],
      //     numStudent: 40,
      //     title: "ToT",
      //     date: "1 - 28 July 2022",
      //     description:
      //       "A life coaching course is a life experience that helps you know yourself and reach your goals in a way that enables you to discover and hone your talents and skills, solve your problems and overcome them and the pressures of life. Live coaching is an innovative method that helps participants explore their personalities.",
      //     price: 380,
      //     priceDisc: 200,
      //     category: "Online Courses",
      //   },
      // ],
      courses : courses?.data
    },
    {
      name: "Live courses",
      courses : courses?.data
    },
    {
      name: "Consulting",
      courses : courses?.data
    },
  ]);

  return (
    <div className="flex w-full justify-center ">
      <div className="">
        <TabGroup>
          <TabList className="flex gap-2 md:gap-4 max-w-max mx-auto">
            {coursesTabs.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-lg py-2 px-3 md:px-5 border text-[12px] md:text-[14px] font-semibold transition-all duration-300 text-[#818C96] hover:text-white focus:outline-none data-[selected]:bg-main-color data-[selected]:text-white data-[hover]:bg-main-color data-[selected]:data-[hover]:bg-main-color data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="mt-3">
            {coursesTabs.map(({ name, courses }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <div className="grid gap-3 gap-y-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {courses?.map((course:any) => (
                    <div className="" key={course.courseId}>
                      <Course course={course} inHome = {true} />
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
