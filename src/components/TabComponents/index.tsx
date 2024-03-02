/* eslint-disable no-unused-vars */
import { Tabs, Tab } from 'react-bootstrap';

interface ITabOptions {
  _id: string;
  name: string;
  alt: string;
}
interface IProps {
  activeKey: string;
  tabOptions: ITabOptions[];
  onChangeTab: (selectedTab: string) => void;
}

function TabComponent(props: IProps) {
  const onTabSelect = (k: string | null) => {
    if (k) {
      props.onChangeTab(k);
    }
  };
  return (
    <>
      <Tabs
        defaultActiveKey={props.activeKey}
        id="uncontrolled-tab-example"
        onSelect={k => onTabSelect(k)}
        activeKey={props.activeKey}
        //   className={`common-tabs ${style['Tabs']}`}
      >
        {props.tabOptions.length > 1
          ? props.tabOptions?.map((option: ITabOptions) => {
              return (
                <Tab
                  key={option?._id}
                  eventKey={option?.name.toLowerCase()}
                  className="element_center flex-column"
                  title={<>{option?.alt}</>}
                  // tabClassName={style['Tab']}
                ></Tab>
              );
            })
          : ''}
      </Tabs>
    </>
  );
}

export default TabComponent;
