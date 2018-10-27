import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';   // 讓 store 統一管理其他檔
import  "./../../sass/all.scss";
import  "./index.scss";

class Top extends React.Component{ 
    render(){
        // const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const { list, /*page,*/ totalPage } = this.props;

		const newList = list.toJS();  // 把 Iimmutable數組轉成普通 JS 數組 newList = 47筆
        
        const showItems = 15;  // 定義一頁15筆

        const pageMenu = [];
        for (let i=1; i <= totalPage; i++){
            pageMenu.push(
                <span 
                    className={'pageMenu'}
                    key={i}
                    onClick = {(e)=>{
                        e.preventDefault();
                        // console.log('頁碼按到')                        
                        // 頁數 - 一次15筆 - 共123筆
                        this.props.handleChangePage( i-1 , showItems, this.props.totalPage );
                    }} 
                >
                    {i}                    
                </span>     
            )
        }
        
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
                                        首頁
                                    </a>
                                </li>
                                <li className="navigation__item">
                                    <a href="https://www.google.com.tw/" className="navigation__link">
                                        <i className="iconfont icon-xiazai"></i>
                                        下載 App
                                    </a>
                                </li>							
                            </ul>					
                        </nav>
                                    
                        <form action="" className="search">
                            <input type="text" 
                                className="search__input" 
                                placeholder="搜尋"      
                                // onFocus={this.props.handleInputFocus}
                                onFocus={() => this.props.handleInputFocus(list)}
								onBlur={this.props.handleInputBlur}
                            />
                            <button className="search__button">
                                <i className="iconfont icon-searchamagnifyingglass"></i>
                            </button>
                            {/* { this.getListArea()} */}
                            {                                              
                                this.props.focused || this.props.mouseIn ?         
                                    (
                                    <div
                                        // style={{ background: 'yellow' }}
                                        onMouseEnter = { this.props.handleMouseEnter }
                                        onMouseLeave = { this.props.handleMouseLeave }
                                        className='search__info'
                                    >
                                        <div className='search__title-box clearfix'>
                                            <span className='search__text left'>熱門搜索</span>  
                                            <button                                 
                                                onClick = {(e)=>{
                                                    console.log('案到了')
                                                    e.preventDefault();
                                                    // 頁數 - 一次15筆 - 共123筆
                                                    this.props.handleChangePage(this.props.page, showItems, this.props.totalPage, this.iconfont );
                                                }} 
                                                className='btn search__text right'
                                            >
                                                <i
                                                    // ref可以獲取js真實DOM的DOM節點
                                                    // 透過真實DOM節點去改變它的CSS樣式旋轉
                                                    ref={(icon)=>{ this.iconfont = icon }}
                                                    className="iconfont">&#xe6dd;
                                                </i>
                                                換一批
                                            </button>                                            
                                        </div>    
                                        <div className='search__menu'> { pageMenu } </div>                        
                                        <ul>
                                            {
                                                newList.length ?( 
                                                    newList.map((item) => {
                                                        return (                                                                    
                                                            <li key={item} className='search__item'>
                                                                <a 
                                                                    href="https://www.google.com.tw/" 
                                                                    className="search__link">
                                                                    {item}
                                                                </a>
                                                            </li>
                                                        )
                                                    })                                                                                               
                                                ):null
                                            }                                  
                                        </ul>             
                                    </div> 
                                )            
                                :null
                            }
                        </form>
                        <nav className="navigation navigation--user">
                            <ul className="navigation__list">
                                <li className="navigation__item">
                                    <a href="https://www.google.com.tw/" className="navigation__link">
                                        <i className="iconfont icon-Aa"></i>
                                    </a>
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
}

const mapStateToProps = (state) => {
	return {
        focused: state.getIn(['top','focused']),
        list: state.getIn(['top','list']),
        page: state.getIn(['top','page']),
        totalPage: state.getIn(['top','totalPage']),
        mouseIn: state.getIn(['top','mouseIn'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
            dispatch(actionCreators.searchFocus());
            
            // dispatch(actionCreators.getList());  
            // 改寫
			// 當數據是0(沒數據時候)的時候,才要發送Ajax請求
            console.log('打印list：', list);   
            // if (list.size === 0) {
			// 	dispatch(actionCreators.getList());
            // }       
            (list.size === 0) && dispatch(actionCreators.getList());
		},
		handleInputBlur() {
            dispatch(actionCreators.searchBlur());
		},
        handleMouseEnter(){
            // console.log('滑入：handleMouseEnter');
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            // console.log('滑出：handleMouseLeave');
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, showItems, totalPage, icon){
            // console.log('點了換一批：handleChangePage');  
            // console.log('點了換一批：showItems', showItems);                    
            console.log('page', page);
            console.log('totalPage', totalPage);   
 
            // 原生js獲取css樣式的語法
            console.log('icon：８８８');
            console.log('icon', icon);
            console.log('transform', icon.style.transform);
            
            // 換頁
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
                dispatch(actionCreators.getList(page + 1 , showItems)); 
			}else {
                // 如果目前 page=totalPage 表示在最後一頁,所以要回到第1頁
                dispatch(actionCreators.changePage(1));
                dispatch(actionCreators.getList(1 , showItems)); 
            }  
        }
	}
}
// export default Top;
// export default connect( )(Top);
export default connect(mapStateToProps, mapDispathToProps)(Top);