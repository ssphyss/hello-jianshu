import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
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
} from './style';

class Header extends React.Component{
	getListArea () {
		// const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const { list, page, totalPage } = this.props;
		const newList = list.toJS();  // 把Iimmutable數組轉成普通JS數組
		const pageList = [];

		// newList = 47筆
		// pageList = 10筆 要渲染的

		// if (newList.length){
		// 	for (let i = (page - 1) * 10; i < page * 10; i++) {
		// 		// console.log('這是i',i,newList[i]);
		// 		if(typeof newList[i] != 'undefined'){
		// 			pageList.push(
		// 				<SearchInfoItem key={newList[i]}>
		// 					{newList[i]}
		// 				</SearchInfoItem>	
		// 			)
		// 		}
		// 	}
		// }

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
				// console.log('這是i',i,newList[i]);
				pageList.push(
					<SearchInfoItem key={newList[i]}>
						{newList[i]}
					</SearchInfoItem>
				)
			}
		}
		if(this.props.focused || this.props.mouseIn){
			return (
					<SearchInfo
						onMouseEnter = { this.props.handleMouseEnter }
						onMouseLeave = { this.props.handleMouseLeave }
					>
						<SearchInfoTitle>熱門搜索</SearchInfoTitle>
						<SearchInfoSwitch
							// onClick = {this.props.handleChangePage}
							onClick = {() => this.props.handleChangePage(page, totalPage, this.iconfont)}
						>	
							<i 
							// ref可以獲取js真實DOM的DOM節點
							// 透過真實DOM節點去改變它的CSS樣式旋轉
							ref={(icon)=>{this.iconfont = icon}}
							className="iconfont">&#xe6dd;</i>						
							換一批								
						</SearchInfoSwitch>
						<SearchInfoList>
							{/* <SearchInfoItem>行距杯2018徵文</SearchInfoItem>
							<SearchInfoItem>區塊練</SearchInfoItem>
							<SearchInfoItem>小程序</SearchInfoItem>
							<SearchInfoItem>美食</SearchInfoItem> */}
							{/* {
								this.props.list.map((item)=>{
									return <SearchInfoItem key={item}>{item}</SearchInfoItem>
								})
							} */}
							{pageList}
						</SearchInfoList>
					</SearchInfo>
			)
		} else {
			return null;
		}
	}
    render(){
		// const { focused, handleInputFocus, handleInputBlur } = this.props;
		const { list } = this.props;
        return(
            <HeaderWrapper>
                <Logo />
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
								// onFocus={this.props.handleInputFocus}
								onFocus={() => this.props.handleInputFocus(list)}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont': 'iconfont'}> &#xe625;</i>
						{/* { this.getListArea(this.props.focused)} */}
						{ this.getListArea()}
					</SearchWrapper>
				</Nav>
                <Addition>
					<Button className='writting' primary num={'9px'}>
						<i className="iconfont">&#xe728;</i>
						寫文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		// focused: state.focused
		// focused: state.header.focused
		// 改成調用immutable數據
		// focused: state.header.get('focused')

		// 外層的reducer引用了{ combineReducers } from  'redux-immutable';
		// 所以讓state也成為immutable對象,要改成state.get('header')
		// focused: state.get('header').get('focused')
		// 換一個immutable的方法,接收數組,表示取得header下的focused
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage']),
		mouseIn: state.getIn(['header','mouseIn'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			console.log('123')			
			
			// const action = actionCreators.getList();
			// dispatch(action)
			dispatch(actionCreators.searchFocus());
			
			// 異步請求獲取搜尋清單的數據
			// const action = actionCreators.searchFocus();
			// dispatch(action)
			// dispatch(actionCreators.getList());

			// 改寫
			// 當數據是0的時候,才要發送Ajax請求
			console.log('list：', list);
			// if (list.size === 0) {
			// 	dispatch(actionCreators.getList());
			// }
			(list.size === 0) && dispatch(actionCreators.getList());
		},
		handleInputBlur() {
			console.log('456')
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, icon){
			console.log('totalPage', totalPage)
			console.log('icon',icon);
			// 原生js獲取css樣式的語法
			console.log('icon',icon.style.transform);
			// icon.style.transform = 'rotate(360deg)'
			let originDeg = icon.style.transform.replace(/[^0-9]/ig, '')
			if (originDeg) {
				originDeg = parseInt(originDeg, 10);
			}else {
				originDeg = 0;
			}
			console.log('originDeg：', originDeg)
			icon.style.transform = `rotate(${originDeg+360}deg)`;

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}			
		}
	}
}
// export default Header;
export default connect(mapStateToProps, mapDispathToProps)(Header);