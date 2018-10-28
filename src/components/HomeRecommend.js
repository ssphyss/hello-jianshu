import React, { PureComponent } from 'react';
// 1.connect
import { connect } from 'react-redux';
import { HomeRecommendWrapper, RecommendItem } from './style';

class HomeRecommend extends PureComponent {
    render(){
        return(
            <HomeRecommendWrapper>
                {
                    this.props.list.map((item)=>{
                        return(
                            <RecommendItem key={item.get('id')}
                                imgUrl={item.get('imgUrl')}
                            >
                            </RecommendItem>
                        )
                    })
                }
                {/* <RecommendItem
                    imgUrl='http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'                    
                    // imgUrl='./../assets/recommend/recommend01.png'
                    // imgUrl='./../../src/assets/recommend/recommend01.png'
                    // imgUrl='./images/logo.png'
                >
                </RecommendItem>
                <RecommendItem
                    imgUrl='http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
                >
                </RecommendItem>
                <RecommendItem
                    imgUrl='http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
                >
                </RecommendItem>                
                <RecommendItem
                    imgUrl='http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
                >
                </RecommendItem>
                <RecommendItem
                    imgUrl='https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
                >
                </RecommendItem> */}
            </HomeRecommendWrapper>
        )
    }
}

// 3.
const mapState = (state) => {
	return {
        // list: state.get('home').get('recommendList')
        list: state.getIn(['home','recommendList'])
	}
}

// 2.
export default connect(mapState, null)(HomeRecommend);