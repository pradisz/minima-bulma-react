import React from 'react';

import { Layout } from './admin.styles';

const AdminLayout = (props) => <Layout className="container is-fullhd">{props.children}</Layout>;

export default AdminLayout;
