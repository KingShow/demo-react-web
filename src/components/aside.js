import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { setMenuCurrent } from '../actions/index';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class AppAside extends Component {
    state = {
        openKeys: 'sub1',
        menuList: [
            {
                key: 'sub1',
                icon: 'mail',
                navTitle: '导航一',
                itemGroup: [{
                    groupTitle: '分组1',
                    innerItems: [{
                        key: 1,
                        link: '/home',
                        item: '首页', 
                    }, {
                        key: 2,
                        link: '/order',
                        item: '订单',
                    }]
                }, {
                    groupTitle: '分组2',
                    innerItems: [{
                       key: 3,
                       link: '/user',
                        item: '用户中心',
                    }, {
                        key: 4,
                        link: '/dishs',
                        item: '我的菜品',
                    }]
                }],
            }, {
                key: 'sub2',
                icon: 'appstore',
                navTitle: '导航二',
                innerItems: [{
                    key: 5,
                    link: '/order',
                    item: '首页5', 
                }, {
                    key: 6,
                    link: '/order',
                    item: '首页6', 
                }],
                submenu: {
                    key: 'sub3',
                    icon: '',
                    navTitle: '三级导航',
                    innerItems: [{
                        key: 7,
                        link: '/order',
                        item: '首页7', 
                    }, {
                        key: 8,
                        link: '/order',
                        item: '首页8', 
                    }]
                }
            }, {
                key: 'sub4',
                navTitle: '导航三',
                icon: 'setting',
                innerItems: [{
                    key: 9,
                    item: '首页9', 
                }, {
                    key: 10,
                    item: '首页10', 
                },{
                    key: 11,
                    item: '首页11', 
                }, {
                    key: 12,
                    item: '首页12', 
                }]
            }
        ],
    }

    handleClick = (e) => {
        this.props.setMenuCurrent(e.key);
    }

    renderMenuItem = (list) => {
        return list.map((it, k) => {
            const link = it.link ? <Link to={it.link}>{it.item}</Link> : it.item;
            return <Menu.Item key={it.key}>{link}</Menu.Item>
        });
    }

    renderItemGroup = (data) => {
        return data.map((it, k) => {
            return (
                <MenuItemGroup title={it.groupTitle} key={`groupTitle${k}`}>
                    {this.renderMenuItem(it.innerItems)}
                </MenuItemGroup>
            )
        })
    }

    renderSubMenu = (data) => {
        return (
            <SubMenu key={data.key} title={data.navTitle}>
                {this.renderMenuItem(data.innerItems)}
            </SubMenu>
        )
    }

    render() {
        const menuList = this.state.menuList.map((item, key) => {
            const renderIcon = item.icon ? <span><Icon type={item.icon} /><span>{item.navTitle}</span></span> : item.navTitle;
            return (
                <SubMenu key={item.key} title={renderIcon}>
                    {item.innerItems ? this.renderMenuItem(item.innerItems) : ''}
                    {item.itemGroup ? this.renderItemGroup(item.itemGroup): ''}
                    {item.submenu ? this.renderSubMenu(item.submenu): ''}
                </SubMenu>
            )
        });
        const {appStates} = this.props;
        return (
            <div className="app-aside">
                <Menu onClick={this.handleClick} 
                defaultOpenKeys={['sub1']} 
                selectedKeys={[appStates.menuCurrent]} 
                mode="inline">
                    {menuList}
                </Menu>
            </div>
        )
    }
}

const Aside = connect(state => ({
    ...state
}), {
    setMenuCurrent
})(AppAside)

export default Aside;
