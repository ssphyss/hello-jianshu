import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreators } from './store';
import logoPic from '../../assets/banner.png';
import HomeDownloadApp from './../../components/HomeDownloadApp';
import HomeList from './../../components/HomeList';
import HomeRecommend from './../../components/HomeRecommend';
import HomeTopic from './../../components/HomeTopic';
import HomeWriter from './../../components/HomeWriter';

class Home extends PureComponent {

    handleScrollTop(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img src={logoPic} alt=""/>
                    <HomeTopic>Topic</HomeTopic>
                    <HomeList>List</HomeList>
                </HomeLeft>
                <HomeRight>
                    <HomeRecommend>Recommend</HomeRecommend>
                    <HomeDownloadApp>DownloadApp</HomeDownloadApp>
                    <HomeWriter>Writer</HomeWriter>
                </HomeRight>
                {
                    this.props.showScroll ? (
                        <BackTop
                            onClick={this.handleScrollTop}
                        >   Top

                            <i className="iconfont">&#xe6f5;</i>
                        </BackTop>
                    )                   
                    :null
                }
                
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.changeHomeData();   
        this.bindEvents();   
    }
    componentWillUnMount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => {
	return {
		showScroll: state.getIn(['home','showScroll']),
	}
}

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);       
    },
    changeScrollTopShow(){
        console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleTopShow(true)); 
        }else {
            dispatch(actionCreators.toggleTopShow(false)); 
        }
    }
})

export default connect(mapStateToProps, mapDispatch)(Home);