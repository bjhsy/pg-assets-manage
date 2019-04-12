import React from 'react';
import { layout } from '@fyl080801/navijs';
import { Icon } from 'antd';

const { Button, HeaderForm, PageLayout } = layout;

export default () => {
  return (
    <PageLayout title="类别管理">
      {/* <div className="ant-cascader-menus ant-cascader-menus-placement-bottomLeft">
        <div>
          <ul className="ant-cascader-menu">
            <li
              className="ant-cascader-menu-item ant-cascader-menu-item-expand ant-cascader-menu-item-active"
              title="Zhejiang"
            >
              Zhejiang
              <span className="ant-cascader-menu-item-expand-icon">
                <Icon type="right" />
              </span>
            </li>
            <li className="ant-cascader-menu-item ant-cascader-menu-item-expand" title="Jiangsu">
              Jiangsu
              <span className="ant-cascader-menu-item-expand-icon">
                <Icon type="right" />
              </span>
            </li>
          </ul>
          <ul className="ant-cascader-menu">
            <li
              className="ant-cascader-menu-item ant-cascader-menu-item-expand ant-cascader-menu-item-active"
              title="Hangzhou"
            >
              Hangzhou
              <span className="ant-cascader-menu-item-expand-icon">
                <Icon type="right" />
              </span>
            </li>
          </ul>
          <ul className="ant-cascader-menu">
            <li className="ant-cascader-menu-item ant-cascader-menu-item-active" title="West Lake">
              West Lake
            </li>
          </ul>
        </div>
      </div> */}
    </PageLayout>
  );
};
