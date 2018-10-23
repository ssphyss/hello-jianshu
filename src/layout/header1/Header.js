import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import * as actionCreators from './store/actionCreators';
import { actionCreators } from './store';

import {
    HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style'
;
// const getListArea = (show) => {
// 	if(show){
// 		return (
// 				<SearchInfo>
// 					<SearchInfoTitle>熱門搜索</SearchInfoTitle>
// 					<SearchInfoSwitch>	
// 						<i className="iconfont">&#xe6dd;</i>							
// 						換一批								
// 					</SearchInfoSwitch>
// 					<SearchInfoList>
// 						<SearchInfoItem>行距杯2018徵文</SearchInfoItem>
// 						<SearchInfoItem>區塊練</SearchInfoItem>
// 						<SearchInfoItem>小程序</SearchInfoItem>
// 						<SearchInfoItem>vue</SearchInfoItem>
// 						<SearchInfoItem>畢業</SearchInfoItem>
// 						<SearchInfoItem>PHP</SearchInfoItem>
// 						<SearchInfoItem>flutetr</SearchInfoItem>
// 						<SearchInfoItem>理財</SearchInfoItem>
// 						<SearchInfoItem>美食</SearchInfoItem>
// 					</SearchInfoList>
// 				</SearchInfo>
// 		)
// 	} else {
// 		return null;
// 	}
// }
class Header extends React.Component{
    // constructor(props) {
		// super(props);
		// this.state = {
		// 	focused: false
		// }
		// this.handleInputFocus = this.handleInputFocus.bind(this);
		// this.handleInputBlur = this.handleInputBlur.bind(this);
	// }
	getListArea () {
		if(this.props.focused){
			return (
					<SearchInfo>
						<SearchInfoTitle>熱門搜索</SearchInfoTitle>
						<SearchInfoSwitch>	
							<i className="iconfont">&#xe6dd;</i>							
							換一批								
						</SearchInfoSwitch>
						<SearchInfoList>
							{/* <SearchInfoItem>行距杯2018徵文</SearchInfoItem>
							<SearchInfoItem>區塊練</SearchInfoItem>
							<SearchInfoItem>小程序</SearchInfoItem>
							<SearchInfoItem>vue</SearchInfoItem>
							<SearchInfoItem>畢業</SearchInfoItem>
							<SearchInfoItem>PHP</SearchInfoItem>
							<SearchInfoItem>flutetr</SearchInfoItem>
							<SearchInfoItem>理財</SearchInfoItem>
							<SearchInfoItem>美食</SearchInfoItem> */}
							{
								this.props.list.map((item)=>{
									return <SearchInfoItem key={item}>{item}</SearchInfoItem>
								})
							}
						</SearchInfoList>
					</SearchInfo>
			)
		} else {
			return null;
		}
	}
    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
					<NavItem className='left active'>
						<i className="iconfont">&#xe71b;</i>
						首頁
					</NavItem>
					<NavItem className='left'>
						<i className="iconfont">&#xe62a;</i>
						下載App
					</NavItem>
					<NavItem className='right'>登陸</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
                        {/* <NavSearch></NavSearch> */}
                        <CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused': ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont': 'iconfont'}> &#xe625;</i>
						{/* <SearchInfo>
							<SearchInfoTitle>熱門搜索</SearchInfoTitle>
							<SearchInfoSwitch>	
								<i className="iconfont">&#xe6dd;</i>							
								換一批								
							</SearchInfoSwitch>
							<SearchInfoList>
								<SearchInfoItem>行距杯2018徵文</SearchInfoItem>
								<SearchInfoItem>區塊練</SearchInfoItem>
								<SearchInfoItem>小程序</SearchInfoItem>
								<SearchInfoItem>vue</SearchInfoItem>
								<SearchInfoItem>畢業</SearchInfoItem>
								<SearchInfoItem>PHP</SearchInfoItem>
								<SearchInfoItem>flutetr</SearchInfoItem>
								<SearchInfoItem>理財</SearchInfoItem>
								<SearchInfoItem>美食</SearchInfoItem>
							</SearchInfoList>
						</SearchInfo> */}
						{/* { this.getListArea(this.props.focused)} */}
						{ this.getListArea()}
					</SearchWrapper>
				</Nav>
                <Addition>
					<Button className='writting'>
						<i className="iconfont">&#xe728;</i>
						寫文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
		// this.setState({
		// 	focused: true
		// })
	}

	handleInputBlur() {
		// this.setState({
		// 	focused: false
		// })
	}

}
const mapStateToProps = (state) => {
	return {
		// focused: state.focused
		// focused: state.header.focused
		// 改成調用immutable數據
		// focused: state.header.get('focused')
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
			console.log('123')
			// const action = {
			// 	type: 'search_focus'
			// };
			// dispatch(action);
			dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			console.log('456')
			// const action = {
			// 	type: 'search_blur'
			// };
			// dispatch(action);
			dispatch(actionCreators.searchBlur());
		}
	}
}
// export default Header;
// export default connect( )(Header);
export default connect(mapStateToProps, mapDispathToProps)(Header);