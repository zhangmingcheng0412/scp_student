import React from 'react';
import { Tabs } from 'antd';
import SubmitContent from '@/pages/teacher/business/SubmitContent';
import InstitutionsContent from '@/pages/teacher/business/InstitutionsContent';
import ErrorContent from '@/pages/teacher/business/ErrorContent';

const { TabPane } = Tabs;
const BusinessTabs = () => {
  function callback(key) {
    console.log(key);
  }

  // tabList
  const tabList = [
    {
      key: 'submit',
      tab: '提交记录',
    },
    {
      key: 'institutions',
      tab: '机构建设',
    },
    {
      key: 'error',
      tab: '错误记录',
    },
  ];

  const contentList = {
    submit: <SubmitContent />,
    institutions: <InstitutionsContent />,
    error: <ErrorContent />,
  };
  return (
    <Tabs onChange={callback}>
      {tabList.map(({ tab, key }) => (
        <TabPane tab={tab} key={key}>
          {contentList[key]}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default BusinessTabs;
