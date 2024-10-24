import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className='flex justify-center flex-col md:w-[80%] w-full'>
      {/* Tab navigation */}
      <div className='flex text-sm text-gray-500'>
        <button
          className={`md:py-6 md:px-8 py-4 px-2  w-full   ${
            activeTab === 1
              ? 'bg-[#07597a] text-white '
              : 'bg-[#1a1a1a] hover:bg-[#262626] hover:text-white duration-100'
          } `}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`md:py-6 md:px-8 py-4 px-2 w-full  ${
            activeTab === 2
              ? 'bg-[#07597a] text-white '
              : 'bg-[#1a1a1a] hover:bg-[#262626] hover:text-white duration-100'
          } `}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={`md:py-6 md:px-8 py-4 px-2 w-full  ${
            activeTab === 3
              ? 'bg-[#07597a] text-white '
              : 'bg-[#1a1a1a] hover:bg-[#262626] hover:text-white duration-100'
          } `}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
        <button
          className={`md:py-6 md:px-8 py-4 px-2 w-full  ${
            activeTab === 4
              ? 'bg-[#07597a] text-white '
              : 'bg-[#1a1a1a] hover:bg-[#262626] hover:text-white duration-100'
          } `}
          onClick={() => handleTabClick(4)}
        >
          Tab 4
        </button>
      </div>

      {/* Tab content */}
      <div className='p-4 bg-white'>
        {activeTab === 1 && (
          <div className='max-w-full md:max-w-4xl mx-auto flex-col flex md:gap-6 gap-3 my-4 px-4'>
            <h2 className='text-xl font-bold'>Title 1</h2>
            <p className='mt-4 text-black break-words font-light'>
              In sint do non adipisicing incididunt excepteur sit. Voluptate
              esse aliqua pariatur dolor ex occaecat sunt eu. Pariatur ullamco
              id dolore sint proident sint nostrud nisi sit id est. Duis et
              excepteur cupidatat sint nisi dolore qui irure qui in id excepteur
              irure laboris.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div className='max-w-full md:max-w-4xl mx-auto flex-col flex gap-6 my-4 px-4'>
            <h2 className='text-xl font-bold'>Title 2</h2>
            <p className='mt-4 text-black break-words font-light'>
              This is the content for Tab 2. Customize this content as needed.
            </p>
          </div>
        )}
        {activeTab === 3 && (
          <div className='max-w-full md:max-w-4xl mx-auto flex-col flex gap-6 my-4 px-4'>
            <h2 className='text-xl font-bold'>Title 3</h2>
            <p className='mt-4 text-black break-words font-light'>
              This is the content for Tab 3. Customize this content as needed.
            </p>
          </div>
        )}
        {activeTab === 4 && (
          <div className='max-w-full md:max-w-4xl mx-auto flex-col flex gap-6 my-4 px-4'>
            <h2 className='text-xl font-bold'>Title 4</h2>
            <p className='mt-4 text-black break-words font-light'>
              This is the content for Tab 4. Customize this content as needed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
