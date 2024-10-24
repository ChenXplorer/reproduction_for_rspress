import React, { useRef, useEffect } from 'react';
import { Table} from 'antd';
import './index.less'



const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
};
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },
];
const data = [
  {
    keys: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    index: 0,
  },
  {
    keys: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    index: 1,
  },
  {
    keys: '3',
    name: 'Joe Black',
    age: 32,
    address:
      'Sidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake ParkSidney No. 1 Lake Park',
    index: 2,
  },
];
export default () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log('ref', ref.current);
  }, []);
  return (
    <>
      <p>普通表格</p>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey="keys"
        ref={ref}
      />
    </>
  );
};
