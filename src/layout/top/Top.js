import React from 'react';
import { connect } from 'react-redux';
// import * as actionCreators from './store/actionCreators';
import { actionCreators } from './store';
import  "./../../sass/all.scss";
import  "./index.scss";

class Top extends React.Component{
    // constructor(props) {
        // super(props);
        // 改寫,改成寫在reducer
		// this.state = {
		// 	focused: false
		// }
		// this.handleInputFocus = this.handleInputFocus.bind(this);
		// this.handleInputBlur = this.handleInputBlur.bind(this);
	// }
    render(){
        return(
            <div className="top">
                <div className="container">
                    <div className="top__logo-box">
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <div className="top__navigation-box clearfix">
                        <nav className="navigation navigation--primary">
                            <ul className="navigation__list">
                                <li className="navigation__item">
                                    <a href="https://www.google.com.tw/" className="navigation__link active">
                                    <i className="iconfont icon-compass"></i>    
                                    {/* <i class="iconfont">&#xe71b;</i> */}
                                        首頁
                                    </a>
                                </li>
                                <li className="navigation__item">
                                    <a href="https://www.google.com.tw/" className="navigation__link">
                                        <i className="iconfont icon-xiazai"></i>
                                        {/* <i class="iconfont">&#xe62a;</i>     */}
                                        下載 App
                                    </a>
                                </li>							
                            </ul>					
                        </nav>
                        <form action="" className="search">
                            <input type="text" 
                                className="search__input" 
                                placeholder="搜尋" 
                                // className={this.state.focused ? 'focused': ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
                            />	
                            <button className="search__button">  
                                <i className="iconfont icon-searchamagnifyingglass"></i>
                                {/* <i className="iconfont">&#xe625;</i> */}
                            </button>
                        </form>
                        <nav className="navigation navigation--user">
                            <ul className="navigation__list">
                                <li className="navigation__item">
                                    {/* <a href="#" className="navigation__link active">Aa</a> */}
                                    <i className="iconfont icon-Aa"></i>
                                    {/* <i className="iconfont">&#xe636;</i> */}
                                </li>
                                <li className="navigation__item">
                                    <a href="https://www.google.com.tw/" className="navigation__link btn btn__login">登陸</a>
                                </li>
                                <li className="navigation__item">
                                    <a href="https://www.google.com.tw/" className="navigation__link btn btn--outline btn--pill btn--primary">註冊</a>
                                </li>		
                                <li className="navigation__item">
                                    <a href="https://www.google.com.tw/" className="navigation__link btn btn--pill btn--primary">
                                        <i className="iconfont icon-feather"></i>
                                        {/* <i className="iconfont">&#xe728;</i> */}
                                        寫文章
                                    </a>
                                </li>					
                            </ul>
                        </nav>
                    </div>	
                </div>	
            </div>
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
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
	return {
		// focused: state.focused
		// focused: state.header.focused
		// 改成調用immutable數據
        // focused: state.header.get('focused')
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header','focused'])
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
// export default Top;
// export default connect( )(Top);
export default connect(mapStateToProps, mapDispathToProps)(Top);