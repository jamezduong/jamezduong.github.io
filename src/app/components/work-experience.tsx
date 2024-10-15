const activity = [
  {
    id: 1,
    position: "Senior Software Engineer",
    companyName: "Leonardo.Ai",
    description: "Ai image generation platform.",
    date: "Dec 22 - Current",
    dateTime: "2023-01-23T10:32",
  },
  {
    id: 2,
    position: "Software Engineer",
    companyName: "Before You Buy",
    description: "Real estate property reports.",
    date: "Jul 21 - Dec 22",
    dateTime: "2023-01-23T10:32",
  },
  {
    id: 3,
    position: "Software Engineer",
    companyName: "Q-83 Technology",
    description: "Social media managing platform.",
    date: "Feb 20 - Jun 21",
    dateTime: "2023-01-23T10:32",
  },
  {
    id: 4,
    position: "Software Engineer",
    companyName: "Simble",
    description: "Energy analytics platform.",
    date: "Apr 19 - Jan 20",
    dateTime: "2023-01-23T10:32",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function WorkExperience() {
  return (
    <>
      <ul role="list" className="space-y-6">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div
              className={classNames(
                activityItemIdx === activity.length - 1 ? "h-6" : "-bottom-6",
                "absolute left-0 top-0 flex w-6 justify-center"
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>
            <>
              <div
                className={
                  "relative flex h-6 w-6 flex-none items-center justify-center bg-white"
                }
              >
                <div
                  className={`h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300
                    ${
                      activityItemIdx === 0
                        ? "animate-pulse ring-green-400 bg-green-400"
                        : ""
                    }
                    `}
                />
              </div>
              <p className="flex-auto py-0.5 text-sm leading-5">
                <div className="flex flex-col">
                  <span className="font-medium">{activityItem.position}</span>
                  <span className="font-medium">
                    {activityItem.companyName}
                  </span>
                  <p className="text-gray-500">{activityItem.description}</p>
                </div>
              </p>
              <time
                dateTime={activityItem.dateTime}
                className="flex-none py-0.5 text-xs leading-5 text-gray-500"
              >
                {activityItem.date}
              </time>
            </>
          </li>
        ))}
      </ul>
    </>
  );
}
