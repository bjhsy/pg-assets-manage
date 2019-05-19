import React from 'react';
import { layout } from '@fyl080801/navijs';
import { Icon, Form, Row } from 'antd';
import SchemaForm from 'react-jsonschema-form';
import { RowProps } from 'antd/lib/row';
import Col, { ColProps } from 'antd/lib/col';

const { Button, HeaderForm, PageLayout } = layout;

const RowSection = (props: any) => {
  return <Row />;
};

const widgets = {
  row: RowSection
};

function ArrayFieldTemplate(props: any) {
  if (props.schema.element === 'column') {
    return <Col {...props.schema.props}>{props.items.map((element: any) => element.children)}</Col>;
  }
  return <Row {...props.schema.props}>{props.items.map((element: any) => element.children)}</Row>;
}

export default () => {
  const schema: any = {
    type: 'object',
    properties: {
      test1: {
        type: 'string'
      },
      test2: {
        type: 'string'
      }
    }
  };

  // const uiSchema = [
  //   {
  //     'ui:widget': 'RowSection',
  //     'ui:options': {
  //       children: [
  //         {
  //           'ui:widget': 'ColumnSection',
  //           'ui:options': {
  //             children: [{ key: 'trigger_day' }]
  //           }
  //         },
  //         {
  //           'ui:widget': 'ColumnSection',
  //           'ui:options': {
  //             children: [{ key: 'trigger_month' }]
  //           }
  //         }
  //       ]
  //     }
  //   }
  // ];

  // const widgets = {
  //   RowSection: RowSection,
  //   ColumnSection: ColumnSection
  // };

  return (
    <PageLayout title="类别管理">
      <SchemaForm schema={schema} ArrayFieldTemplate={ArrayFieldTemplate}>
        &nbsp;
      </SchemaForm>
    </PageLayout>
  );
};
