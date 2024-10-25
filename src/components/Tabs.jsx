import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getText } from '../state/tabSlice';
const Tabs = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(1);
  const { text } = useSelector((state) => state.tabs);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    dispatch(getText());
  }, [activeTab]);

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
      {text !== null && (
        <div className='p-4 bg-white'>
          {activeTab === 1 && (
            <div className='max-w-full md:max-w-4xl mx-auto flex-col flex md:gap-6 gap-3 my-4 px-4'>
              <h2 className='text-xl font-bold'>Title 1</h2>
              <div
                className='mt-4 text-black break-words font-light'
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          )}
          {activeTab === 2 && (
            <div className='max-w-full md:max-w-4xl mx-auto flex-col flex gap-6 my-4 px-4'>
              <h2 className='text-xl font-bold'>Title 2</h2>
              <div
                className='mt-4 text-black break-words font-light'
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          )}
          {activeTab === 3 && (
            <div className='max-w-full md:max-w-4xl mx-auto flex-col flex gap-6 my-4 px-4'>
              <h2 className='text-xl font-bold'>Title 3</h2>
              <div
                className='mt-4 text-black break-words font-light'
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          )}
          {activeTab === 4 && (
            <div className='max-w-full md:max-w-4xl mx-auto flex-col flex gap-6 my-4 px-4'>
              <h2 className='text-xl font-bold'>Title 4</h2>
              <div
                className='mt-4 text-black break-words font-light'
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tabs;
