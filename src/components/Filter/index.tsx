interface filterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filter: React.FC<filterProps> = ({ filter, setFilter }) => {
  const types = [
    { name: "All", path: "" },
    { name: "Single", path: "single" },
    { name: "EP", path: "ep" },
    { name: "Album", path: "album" },
  ];

  return (
    <div className="flex flex-row items-center h-fit w-full mb-5 justify-center overflow-x-auto no-scrollbar">
      {types?.map((tab, index) => (
        <button
          key={index}
          onClick={() => setFilter(tab.path)}
          className={`${
            filter === tab.path ? "text-cream bg-periwinkle" : "text-periwinkle"
          } w-fit h-fit py-[5px] px-[20px] text-s font-[700] rounded-[5px]`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
