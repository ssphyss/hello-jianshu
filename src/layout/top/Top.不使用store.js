import React from 'react';
import  "./../../sass/all.scss";

class Top extends React.Component{
    constructor(props) {
        super(props);
		this.state = {
			focused: false
		}
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}
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
								onFocus={this.handleInputFocus}
								onBlur={this.handleInputBlur}
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
        console.log(123);
		this.setState({
			focused: true
		})
	}

	handleInputBlur() {
        console.log(456);
		this.setState({
			focused: false
		})
	}
}

export default Top;
