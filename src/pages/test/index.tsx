import { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";

import "./index.scss";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Test {
  props: PageStateProps;
}

@inject("store")
@observer
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      delIdex: 0,
    };
  }
  componentWillMount() {}

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        listData: [
          {
            category_id: -1,
            name: "未分类",
            seq: 1,
            spu_total: 0,
          },
          {
            category_id: 70,
            name: "测试分类",
            seq: 2,
            spu_total: 0,
          },
          {
            category_id: 73,
            name: "测试分类消息测试",
            seq: 3,
            spu_total: 0,
          },
          {
            category_id: 119,
            name: "测试类别",
            seq: 4,
            spu_total: 0,
          },
          {
            category_id: 72,
            name: "鞋子",
            seq: 5,
            spu_total: 0,
          },
          {
            category_id: 120,
            name: "工具",
            seq: 6,
            spu_total: 0,
          },
          {
            category_id: 121,
            name: "沙发",
            seq: 7,
            spu_total: 1,
          },
          {
            category_id: 71,
            name: "衣服",
            seq: 8,
            spu_total: 3,
          },
          {
            category_id: 122,
            name: "电器",
            seq: 9,
            spu_total: 0,
          },
          {
            category_id: 124,
            name: "电视",
            seq: 10,
            spu_total: 0,
          },
          {
            category_id: 133,
            name: "哈哈",
            seq: 11,
            spu_total: 0,
          },
          {
            category_id: 134,
            name: "我具体",
            seq: 12,
            spu_total: 0,
          },
          {
            category_id: 151,
            name: "新分类",
            seq: 13,
            spu_total: 0,
          },
        ],
      });
    }, 100);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {
      counterStore: { counter },
    } = this.props.store;
    return (
      <View className="index">
        <ec-drag
          listData={this.state.listData.map((c) => ({
            ...c,
            id: c.category_id,
          }))}
          topSize={110}
          bottomSize={50}
          onSortend={(e) => {
            console.log("onSortend");
          }}
          onEdit={(e) => {
            console.log("onEdit");
          }}
          onDelete={(e) => {}}
          currentDeleteId={this.state.delIdex}
        />
      </View>
    );
  }
}

export default Test;
