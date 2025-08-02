import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Instructor from './Instructor'


export default function TabsOverviewCourse({course}:any) {

  const categories = [
    {
      name: 'Overview',
      content: ['Soooon' ],
    },
  
    {
      name: 'Curriculum',
      content: ['Soooon' ],
    },
  
    {
      name: 'Instructors',
      content: course.instructors,
    },
  
    {
      name: 'Review',
      content: ['Soooon' ],
    },
  ]

  return (
    <div className="">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex flex-wrap justify-between border-b-[3px] border-b-[#E9EAF0] gap-3 md:gap-0">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="py-2 px-3 md:px-5 text-[16px] md:text-[14px] font-semibold transition-all duration-300 text-[#666e75] hover:text-black focus:outline-none data-[selected]:text-black data-[selected]:border-b-main-color data-[selected]:border-b-2 data-[hover]:text-black data-[selected]:data-[hover]:text-black"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, content }) => (
              <TabPanel key={name} className="rounded-xl bg-bg-main p-3">
                {
                  name === 'Instructors'? <div className="">
                    {
                      content.map((instructor:any) => <Instructor key={instructor.id} inst={instructor } />)
                    }
                  </div>: <div className="font-bold">{course.fullDesc}</div>
                }
                
                
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
