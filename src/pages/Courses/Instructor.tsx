function Instructor({ inst }: any) {
  return (
    <div className="flex justify-around items-center font-bold">
      <img
        className="h-16 w-16 ring ring-white dark:ring-gray-900 rounded-full object-cover"
        src={inst.instructorPhoto}
        alt={inst.instractorName}
      />
      <h3 className="">{inst.instractorName}</h3>
      <span>{inst.instractorTitle}</span>
    </div>
  );
}

export default Instructor;
