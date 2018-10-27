import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';   // 讓 store 統一管理其他檔
import  "./../../sass/all.scss";
import  "./index.scss";

class Top extends React.Component{ 
    render(){
        // const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const { list, page, totalPage } = this.props;
		const newList = list.toJS();  // 把Iimmutable數組轉成普通JS數組
		const showList = [];
		// newList = 47筆
        // showList = 10筆 要渲染的
        // 如果有資料才會做循環
		// if (newList.length) {
		// 	for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
		// 		// console.log('這是i',i,newList[i]);
		// 		showList.push(
		// 			<div key={newList[i]} style={{background: 'pink'}}>
        //                 {newList[i]}
		// 			</div>
		// 		)
		// 	}
        // }
        
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
                        <div>
                        </div>             
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
                            {/* { this.getListArea()} */}
                            {                                              
                                this.props.focused || this.props.mouseIn ?         
                                    (
                                    <div
                                        style={{ background: 'yellow' }}
                                        onMouseEnter = { this.props.handleMouseEnter }
                                        onMouseLeave = { this.props.handleMouseLeave }
                                        className='search__info'
                                    >
                                        <div className='search__title-box clearfix'>
                                            <span className='search__text left'>熱門搜索</span>  
                                            <button  
                                                // onClick = {(e)=>this.props.handleChangePage()}                              
                                                onClick = {(e)=>{
                                                    console.log('案到了')
                                                    e.preventDefault();
                                                    this.props.handleChangePage(this.props.page, 15 );
                                                }} 
                                                className='btn search__text right' 
                                                // href='https://www.google.com.tw/'
                                            >
                                                <i className="iconfont">&#xe6dd;</i>
                                                換一批
                                            </button>  
                                        </div>                             
                                        <ul>
                                            {/* <li className='search__item'>
                                                <a href="https://www.google.com.tw/" className="search__link">區塊鏈</a>
                                            </li>
                                            {/* <li className='search__item'>{this.props.list}</li> */}
                                            {/* {
                                                this.props.list.map((item) => {
                                                    return (
                                                        <li className='search__item' key={item}>
                                                            <a href="https://www.google.com.tw/" className="search__link">{item}</a>
                                                        </li>
                                                    )
                                                })
                                            } */}
                                            {
                                                newList.length ?( 
                                                    newList.map((item) => {
                                                        return (                                                                    
                                                            <div key={item} style={{background: 'red'}}>                                           
                                                                <li className='search__item'>
                                                                    <a href="https://www.google.com.tw/" className="search__link">{item}</a>
                                                                </li>
                                                            </div>
                                                        )
                                                    })                                                                                               
                                                ):null
                                            }
                                            {/* {
                                                // 要寫在外
                                                // 0~9
                                                // 10~19
                                                if (newList.length) {
                                                    for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
                                                        // console.log('這是i',i,newList[i]);
                                                        showList.push(
                                                            <div key={newList[i]} style={{background: 'pink'}}>
                                                                {newList[i]}
                                                            </div>
                                                        )
                                                    }
                                                }
                                            } */}
                                            {/* { showList } */}
                                        </ul>             
                                    </div> 
                                )            
                                :null
                            }
                            {/* {                                
                                AAA === true?
                                <h1>123dfhuiehfuirehftioudfheiufhfhjhudhfudfuidhguirghuirghiurhbirfthbifhbibhrhgor</h1>: null
                            } */}
                        </form>
                        <nav className="navigation navigation--user">
                            <ul className="navigation__list">
                                <li className="navigation__item">
                                    <a href="https://www.google.com.tw/" className="navigation__link">
                                        <i className="iconfont icon-Aa"></i>
                                    </a>                                    
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
}

// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
	return {
		// focused: state.focused
		// focused: state.top.focused
		// 改成調用immutable數據
        // focused: state.top.get('focused')
        // focused: state.get('top').get('focused')
        focused: state.getIn(['top','focused']),
        list: state.getIn(['top','list']),
        page: state.getIn(['top','page']),
        totalPage: state.getIn(['top','totalPage']),
        mouseIn: state.getIn(['top','mouseIn'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
            // console.log('123')
			// const action = {
			// 	type: 'search_focus'
			// };
            // dispatch(action);
            dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.getList());
            
		},
		handleInputBlur() {
            // console.log('456')
            dispatch(actionCreators.searchBlur());
		},
        handleMouseEnter(){
            console.log('滑入：handleMouseEnter');
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            console.log('滑出：handleMouseLeave');
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, pageItems, totalPage){
             console.log('點了換一批：handleChangePage');
             console.log('totalPage', totalPage)
             dispatch(actionCreators.getList(page, pageItems));
            //  dispatch(actionCreators.getList(page, totalPage)
            // dispatch(actionCreators.changePage());
            if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
        }
	}
}
// export default Top;
// export default connect( )(Top);
export default connect(mapStateToProps, mapDispathToProps)(Top);