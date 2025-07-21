/* eslint-disable @typescript-eslint/no-explicit-any */
import CountUp from "react-countup"

function AchievementBox({achievement}:any) {
  return (
    <div className="flex items-center gap-3">
        <div className="shadow-lg">
            {achievement.icon}
        </div>
        <div className="flex flex-col">
            <span className="text-2xl font-bold font-raleway">
                <CountUp end={achievement.number} duration={2} enableScrollSpy={true} /> +</span>
            <p>{achievement.name}</p>
        </div>
    </div>
  )
}

export default AchievementBox