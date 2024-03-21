import { Tabs, Tab } from 'react-bootstrap';
import { ITabData } from '@/components/admin/clientList/clientData';

interface IProps {
  activeKey: string;
  tabOptions: ITabData[];
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
        onSelect={(k: string | null) => onTabSelect(k)}
        activeKey={props.activeKey}
        //   className={`common-tabs ${style['Tabs']}`}
      >
        {props.tabOptions.length > 1
          ? props.tabOptions?.map((option: ITabData) => {
              return (
                <Tab
                  key={option?.name}
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
