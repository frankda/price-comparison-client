import React from 'react';
import { Button, Tooltip } from 'antd';
import 
{ 
  SearchOutlined,
  UserOutlined
} from '@ant-design/icons';

import DivideLine from './svg/divide';

export default () => {
  return (
    <header>
      <div className="logo">
        <img src="" alt="" />
        <h1>Price Comparison</h1>
      </div>
      <div className="user-profile">
        <Button type="primary">
          SIGN UP
        </Button>
        <DivideLine height="30" />
        <div className="login">
          <UserOutlined />
          <a>Log In</a>
        </div>
      </div>
    </header>
  );
}