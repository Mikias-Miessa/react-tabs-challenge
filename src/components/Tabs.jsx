import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getText } from '../state/tabSlice';
import { ThreeDots } from 'react-loader-spinner';

const Tabs = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const textData = useSelector((state) => state.tabs.textData);
  const loading = useSelector((state) => state.tabs.loading);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    // Dispatch action to fetch data for the active tab
    dispatch(getText(activeTab));
  }, [activeTab, dispatch]);

  return (
    <div className='flex justify-center flex-col md:w-[80%] w-full'>
      {/* Tab navigation */}
      <div className='flex text-sm text-gray-500'>
        {[1, 2, 3, 4].map((tabIndex) => (
          <button
            key={tabIndex}
            className={`md:py-6 md:px-8 py-4 px-2 w-full ${
              activeTab === tabIndex
                ? 'bg-[#07597a] text-white '
                : 'bg-[#1a1a1a] hover:bg-[#262626] hover:text-white duration-100'
            }`}
            onClick={() => handleTabClick(tabIndex)}
          >
            Tab {tabIndex}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {textData[activeTab] !== null && !loading ? (
        <div className='p-4 bg-white'>
          <div className='max-w-full md:max-w-4xl mx-auto flex-col flex gap-6 my-4 px-4'>
            <h2 className='text-xl font-bold'>Title {activeTab}</h2>
            <div
              className='mt-4 text-black break-words font-light'
              dangerouslySetInnerHTML={{ __html: textData[activeTab] }}
            ></div>
          </div>
        </div>
      ) : (
        <div className='p-4 bg-white h-[200px]'>
          <div className='max-w-full md:max-w-4xl mx-auto flex-col items-center justify-center flex gap-6 my-4 px-4'>
            <ThreeDots
              visible={true}
              height='80'
              width='80'
              color='#000000'
              radius='9'
              ariaLabel='three-dots-loading'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
