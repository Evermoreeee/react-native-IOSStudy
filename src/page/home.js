import React, {Component}  from 'react';
import { Text, View } from 'react-native';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native';
import  MyCenter from './myCenter/index';
import  HomeCenter from './homeCenter/index'
import YcHome from './ycHome/index'
class BasicTabBarExample extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
    };
  }
  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    );
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {

    return (
      <TabBar
        unselectedTintColor="#333"
        tintColor="#ea6f5a"
        barTintColor="#fff555"
        style={{width:200,}}
        >
        <TabBar.Item
          title="首页"
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => this.onChangeTab('homeTab')}
        >
          {/* <HomeCenter ></HomeCenter> */}
          <YcHome></YcHome>
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="分类"
          selected={this.state.selectedTab === 'textTab'}
          onPress={() => this.onChangeTab('textTab')}
        >
          <MyCenter></MyCenter>
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like" />}
          title="购物车"
          selected={this.state.selectedTab === 'msgTab'}
          onPress={() => this.onChangeTab('msgTab')}
        >
          {this.renderContent('Friend Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="我的"
          selected={this.state.selectedTab === 'myTab'}
          onPress={() => this.onChangeTab('myTab')}
        >
          {this.renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    );
  }
}
export default BasicTabBarExample ;