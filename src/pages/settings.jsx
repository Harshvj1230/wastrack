import { TrendingUp, Newspaper } from "lucide-react";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";

export const Settings = () => {
  return (
    <div className="text-slate-700 flex justify-center">
      <div className="w-1/2">
        <div className="text-custom">
          <h1 className="text-5xl h-14 font-light gradientDefault">
            Settings.
          </h1>
          <p className="text-base mt-2 mb-4">
            Take a closer look at the reports below to gain valuable insights
            into your recent performance.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          <AccordionItem value="item-1" defaultOpen>
            <div className="flex justify-start items-center p-5">
              <Newspaper size={18} className="mr-3" />
              Water Usage Trends in Your Area
              <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
            </div>
            <Switch />
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Is it Accessible?
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, our platform adheres to the WAI-ARIA design pattern,
                ensuring that all users, regardless of their abilities, can
                navigate and interact with the interface seamlessly.
              </p>
              <p>
                Accessibility is a fundamental aspect of modern web design, and
                our commitment to inclusivity is reflected in our approach.
                We've implemented keyboard navigation, screen reader support,
                and other assistive technologies to guarantee that every feature
                is usable by everyone.
              </p>
              <p>
                Continuous feedback from users with disabilities helps us refine
                our platform further. As we progress, we plan to host workshops
                to educate the community about the importance of accessibility
                in digital environments.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Is it Styled?
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Yes, the components come with default styles that match the
                overall aesthetic of the application. We’ve focused on a clean,
                modern design that enhances usability while also being visually
                appealing.
              </p>
              <p>
                Every aspect of our styling is meticulously curated to ensure
                coherence throughout the user interface. From typography to
                color schemes, each element has been chosen to create a pleasing
                experience for users.
              </p>
              <p>
                Additionally, we allow customization for users who wish to
                tailor the interface to their preferences, ensuring a consistent
                yet personalized experience.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Average Household Water Consumption
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                The average household in your area consumes about 10,000 gallons
                of water per month. This figure encompasses various uses,
                including drinking, cooking, bathing, and outdoor activities
                like watering lawns and gardens.
              </p>
              <p>
                Understanding this statistic is vital as it helps families
                recognize their water usage patterns. By breaking down
                consumption into categories, residents can identify areas where
                they can reduce waste.
              </p>
              <p>
                Simple actions like shortening showers or fixing leaks can lead
                to significant savings. Local workshops are being organized to
                educate families on how to track and manage their water usage
                effectively.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Water Conservation Tips
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Simple changes, like fixing leaks and using water-efficient
                fixtures, can save up to 30% of water usage. Implementing
                practices such as turning off the tap while brushing teeth and
                taking shorter showers can significantly reduce water waste.
              </p>
              <p>
                The local government is actively promoting these conservation
                tips through community events and online resources.
                Additionally, they are offering incentives for residents who
                choose to install rain barrels or drought-resistant landscaping.
              </p>
              <p>
                By making small adjustments to daily routines, residents can
                contribute to a larger movement toward sustainability,
                benefiting both their environment and their utility bills.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Impact of Drought on Water Supply
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Ongoing drought conditions have reduced the local water supply
                by approximately 20%. This decline poses significant challenges
                for both residential and agricultural users.
              </p>
              <p>
                As water levels drop, authorities are implementing restrictions
                on non-essential water use, such as filling swimming pools or
                watering lawns. Awareness campaigns are being launched to inform
                residents about the severity of the situation and the importance
                of conservation.
              </p>
              <p>
                Through community engagement, there is a growing recognition
                that collective efforts are necessary to adapt to changing
                environmental conditions and ensure a sustainable water future
                for all.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Water Quality Reports
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Recent tests show that the water quality in your area meets all
                safety standards. The results indicate low levels of
                contaminants and confirm that the water supply is safe for
                consumption.
              </p>
              <p>
                Regular testing is conducted to ensure compliance with federal
                and state regulations, and the community is encouraged to stay
                informed about any changes. Reports are made available online,
                providing transparency and building trust between residents and
                local authorities.
              </p>
              <p>
                Community workshops and information sessions are being organized
                to foster a culture of accountability and care for local water
                resources.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Upcoming Water Conservation Programs
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Local authorities will launch a new water conservation program
                next month aimed at reducing usage by 10%. This initiative will
                include workshops, informational sessions, and community
                challenges to engage residents actively.
              </p>
              <p>
                Participants will receive resources and tools to help them track
                their water usage and identify areas for improvement. The
                program aims to create a culture of conservation by fostering a
                sense of community responsibility.
              </p>
              <p>
                Additionally, residents who commit to the program may qualify
                for rebates on water-efficient appliances and fixtures, helping
                to establish sustainable practices that benefit both the
                community and the environment.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Community Water Usage Challenge
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Join the community challenge to reduce water usage by 15% over
                the next three months! This initiative encourages neighborhoods
                to compete against each other in a friendly manner while
                adopting sustainable water practices.
              </p>
              <p>
                Participants will be able to track their usage through an online
                platform and share tips and successes with others. Regular
                updates will highlight the progress of each community, fostering
                a sense of camaraderie and collective achievement.
              </p>
              <p>
                Prizes will be awarded to the neighborhoods that show the
                greatest reductions in water usage, incentivizing participation
                and engagement.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                New Water Meter Installation
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                New smart water meters will be installed in homes throughout the
                neighborhood to monitor usage more accurately. These advanced
                meters provide real-time data, allowing homeowners to track
                their consumption patterns and adjust their habits accordingly.
              </p>
              <p>
                The installation process will begin next month, and residents
                will receive notifications with details on what to expect. The
                goal is to empower residents with information, leading to more
                conscious water use.
              </p>
              <p>
                Additionally, the new meters will help local authorities manage
                the water supply more efficiently, ultimately benefiting the
                entire community.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Importance of Rainwater Harvesting
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Implementing rainwater harvesting can reduce dependency on
                municipal water supply and promote sustainability. By collecting
                rainwater from rooftops and directing it into storage systems,
                households can supplement their water needs, especially during
                dry spells.
              </p>
              <p>
                This practice not only helps in conserving water but also
                reduces stormwater runoff, benefiting local ecosystems.
                Community workshops will be organized to educate residents on
                how to install and maintain rainwater harvesting systems.
              </p>
              <p>
                Financial incentives may be available for those who choose to
                adopt this practice, making it an appealing option for many
                families.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Water Usage During Summer Months
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Water usage typically increases by 25% during summer due to
                outdoor activities, such as watering gardens, filling pools, and
                washing cars. This seasonal spike can strain local water
                supplies, prompting authorities to remind residents about the
                importance of conservation.
              </p>
              <p>
                Simple measures, like using a broom instead of a hose to clean
                driveways or watering lawns in the early morning, can make a
                significant difference.
              </p>
              <p>
                Local parks and recreation departments are planning summer
                programs to educate families about efficient water use while
                still enjoying outdoor activities.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Water Pollution Awareness
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Awareness campaigns are underway to educate the community about
                the impact of pollution on water sources. Local organizations
                are collaborating with schools, businesses, and residents to
                spread the message about keeping water clean.
              </p>
              <p>
                Initiatives include cleanup days, workshops on proper disposal
                of hazardous materials, and educational materials distributed to
                households.
              </p>
              <p>
                By fostering a culture of responsibility, the community aims to
                reduce pollutants that enter local waterways.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Tips for Reducing Outdoor Water Usage
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Using drought-resistant plants can significantly cut down on
                outdoor water usage. Landscaping with native species not only
                conserves water but also supports local wildlife.
              </p>
              <p>
                Local gardening clubs and extension services are offering
                workshops on creating beautiful, low-water gardens that thrive
                in the regional climate.
              </p>
              <p>
                By fostering a culture of sustainable landscaping, the community
                can collectively make a positive impact on local water resources
                while enhancing the beauty of their neighborhoods.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Newspaper size={18} className="mr-3" />
                Water Utility Bill Analysis
                <p className="ml-2 text-slate-400"> • 3 hrs ago / 3 min read</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Analyzing your water bill can help identify trends and areas for
                potential savings. Residents are encouraged to review their
                monthly statements to track usage over time and compare it with
                similar households.
              </p>
              <p>
                This analysis can reveal patterns that might indicate excessive
                use or leaks. Community workshops are being organized to teach
                residents how to read and interpret their water bills
                effectively.
              </p>
              <p>
                By understanding their bills better, residents can make informed
                decisions about water use and implement changes that lead to
                cost savings and reduced consumption.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
