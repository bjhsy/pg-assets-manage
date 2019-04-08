import React, { useState } from 'react';
import { layout } from '@fyl080801/navijs';
import { Table, Divider, Form, Icon, Input, Drawer } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import Search from 'antd/lib/input/Search';

const { Button, HeaderForm, PageLayout } = layout;

export default function(props: any) {
  const [visible, setVisible] = useState(false);

  const columns: ColumnProps<any>[] = [
    { title: '资产编号', key: 1 },
    { title: '资产名称', key: 2 },
    { title: '资产别名', key: 3 }
  ];
  return (
    <PageLayout
      title="资产登记"
      header={
        <HeaderForm>
          <Form.Item>
            <Search placeholder="输入关键字" />
          </Form.Item>
          <Form.Item>
            <Button onClick={() => setVisible(true)}>
              <Icon type="bars" />
              详细查找
            </Button>
            <Drawer
              title="详细查找"
              placement="right"
              closable={true}
              maskClosable={true}
              onClose={() => setVisible(false)}
              visible={visible}
            >
              <Form>
                <Form.Item label="资产编号">
                  <Input />
                </Form.Item>
                <Form.Item label="资产名称">
                  <Input />
                </Form.Item>
              </Form>
            </Drawer>
          </Form.Item>
        </HeaderForm>
      }
    >
      <Table columns={columns} bordered={true} />
    </PageLayout>
  );
}
