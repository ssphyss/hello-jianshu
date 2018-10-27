import React from 'react';
import { connect } from 'react-redux';

import {
    TopicWrapper,
    TopicItem,
    More
} from './style'

// import topic01 from './../assets/topic01.jpg';
// import topic02 from './../assets/topic02.jpg';
// import topic03 from './../assets/topic03.jpg';
// import topic04 from './../assets/topic04.jpg';
// import topic05 from './../assets/topic05.jpg';
// import topic06 from './../assets/topic06.jpg';

class HomeTopic extends React.Component{
    render(){
        return(
            <TopicWrapper>
                {
                    this.props.list.map((item)=>{
                        return(
                            <TopicItem key={item.get('id')}>
                                <img
                                    alt=''
                                    className='topic-pic'
                                    src={item.get('imgUrl')} 
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                {/* <TopicItem>
                    <img 
                        className='topic-pic'
                        src={topic01} 
                        alt=""
                    />
                    社會熱點
                </TopicItem> */}
                {/* <TopicItem>
                    <img 
                        className='topic-pic'
                        src={topic02} 
                        alt=""
                    />
                    社會熱點
                </TopicItem>
                <TopicItem>
                    <img 
                        className='topic-pic'
                        src={topic03} 
                        alt=""
                    />
                    社會熱點
                </TopicItem>
                <TopicItem>
                    <img 
                        className='topic-pic'
                        src={topic04} 
                        alt=""
                    />
                    社會熱點
                </TopicItem>
                <TopicItem>
                    <img 
                        className='topic-pic'
                        src={topic05} 
                        alt=""
                    />
                    社會熱點
                </TopicItem>
                <TopicItem>
                    <img 
                        className='topic-pic'
                        src={topic06} 
                        alt=""
                    />
                    社會熱點
                </TopicItem> */}
                <More>
                    更多熱門專題
                    <i className="iconfont">&#xe6f5;</i>
                </More>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        list: state.get('home').get('topicList')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
			console.log('123')
			// dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			console.log('456')
			// dispatch(actionCreators.searchBlur());
		}
	}
}
export default connect(mapStateToProps, mapDispathToProps)(HomeTopic);