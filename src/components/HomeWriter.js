import React, { PureComponent } from 'react';
// 1.connect
import { connect } from 'react-redux';
import { 
    HomeWriterWrapper, 
    /*RecommendItem, */
    SearchInfoSwitch, 
    SearchInfoList, 
    SearchInfo, 
    SearchInfoTitle, 
    SearchInfoItem 
} from './style';

class HomeWriter extends PureComponent {
    render(){
        return(
            <HomeWriterWrapper>
                {/* {
                    this.props.list.map((item)=>{
                        return(
                            <RecommendItem key={item.get('id')}
                                imgUrl={item.get('imgUrl')}
                            >
                            </RecommendItem>
                        )
                    })
                } */}
                <SearchInfo
                >
                    <SearchInfoTitle>推薦作者</SearchInfoTitle>
                    <SearchInfoSwitch
                        // onClick = {this.props.handleChangePage}
                        // onClick = {() => this.props.handleChangePage(page, totalPage, this.iconfont)}
                    >	
                        <i 
                        // ref可以獲取js真實DOM的DOM節點
                        // 透過真實DOM節點去改變它的CSS樣式旋轉
                        // ref={(icon)=>{this.iconfont = icon}}
                        className="iconfont">&#xe6dd;</i>						
                        換一批								
                    </SearchInfoSwitch>
                    <SearchInfoList>
                        <SearchInfoItem>
                            溜溜心情的溜媽
                        </SearchInfoItem>
                        {/* {
                            this.props.list.map((item)=>{
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        } */}
                        {/* {showList} */}
                    </SearchInfoList>
                </SearchInfo>
            </HomeWriterWrapper>
        )
    }
}

// 3.
const mapState = (state) => {
	return {
        // list: state.get('home').get('writerList')
        list: state.getIn(['home','writerList'])
	}
}

// 2.
export default connect(mapState, null)(HomeWriter);