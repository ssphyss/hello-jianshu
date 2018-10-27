import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import  "./../../sass/all.scss";
import  "./index.scss";

class TopState extends React.Component{ 

    constructor(props) {
		super(props);
		this.state = {
            focused: true,
            mouseIn: true,
            page: 1,
            showItems: 15
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeList = this.handleChangeList.bind(this);
    }

    render(){
        console.log('----------focused：',this.state.focused)
        console.log('----------mouseIn',this.state.mouseIn)
        console.log('----------page',this.state.page)
        console.log('----------(store)list',this.props.list)
        console.log('----------(store)totalPage',this.props.totalPage)
       
        const { list, totalPage } = this.props;
        const listNew = list.toJS();
        // const showItems = 15;

        const pageMenu = [];
        for (let i=1; i <= totalPage; i++){
            pageMenu.push(
                <span 
                    className={'pageMenu'}
                    key={i}
                    onClick = {(e)=>{
                        e.preventDefault();                     
                        // 頁數 - 一次15筆 - 共123筆
                        this.handleChangeList(i);
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
                                className='search__input'
                                onFocus={ this.handleInputFocus }
								onBlur={ this.handleInputBlur }
                            />
                            <button className="search__button">
                                <i className="iconfont icon-searchamagnifyingglass"></i>
                            </button>
                           {
                               this.state.focused || this.state.mouseIn? 
                               (
                                <div
                                    // style={{ background: 'yellow' }}
                                    className='search__info'
                                    onMouseEnter = { this.handleMouseEnter }
                                    onMouseLeave = { this.handleMouseLeave }
                                >
                                    <div className='search__title-box clearfix'>
                                        <span className='search__text left'>熱門搜索</span>  
                                        <button                                 
                                            onClick = {(e)=>{
                                                console.log('案到了')
                                                // 每按一下讓 page加 1                                                
                                                this.handleChangePage(e);
                                                // 告訴 store 取第幾頁，要顯示15筆，傳總筆數要算分頁   
                                                // this.props.handleChangePage(this.state.page, showItems, totalPage)                                    
                                            }} 
                                            className='btn search__text right'
                                        >
                                            <i className="iconfont">&#xe6dd;</i>
                                            換一批
                                        </button>                                        
                                    </div>         
                                    <div className='search__menu'> { pageMenu } </div>                                            
                                    <ul>
                                        {
                                            listNew.length ? (
                                                listNew.map((item) => {
                                                    return (
                                                        <li key={item} className='search__item'>
                                                            <a 
                                                                href="https://www.google.com.tw/" 
                                                                className="search__link"
                                                            > {item}                                              
                                                            </a>
                                                        </li>   
                                                    )
                                                })  
                                            ):null
                                        }                                                                  
                                    </ul>             
                                </div>
                               ): null
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

    // 1.聚焦
    handleInputFocus(){        
        this.setState(() => ({			
            focused: true
        }))
        console.log('聚焦 focused');
        this.props.handlegetList();
    }

    // 2.失焦
    handleInputBlur(){        
        this.setState(() => ({			
            focused: true
        }))
        console.log('失焦 focused')
    }

    // 3.移入
    handleMouseEnter(){
        this.setState(() => ({			
            mouseIn: true
        }))
        console.log('移入 mouseIn')
    }

    // 4.移出
    handleMouseLeave(){
        this.setState(() => ({			
            mouseIn: true
        }))
        console.log('移出 mouseIn')
    }

    // 7.改變頁數(換一批控制)
    handleChangePage(e){
        e.preventDefault();                                                   
        // let newPage = this.state.page + 1 ;
        // if(newPage > this.props.totalPage){
        //     newPage = 1
        // } 
        // this.setState({
        //     page: newPage
        // })

        // 換頁
        if (this.state.page < this.props.totalPage) {
            let newPage = this.state.page + 1;
            this.setState({
                page: newPage
            })
            this.props.handlegetListNew( newPage , this.state.showItems);
        }else {
            this.setState({
                page: 1 
            }) 
            this.props.handlegetListNew( 1 , this.state.showItems);            
        }  

        // ....
        // this.props.handlegetList(this.state.page + 1 , this.state.showItems);
    }

    // 8.改變頁數(頁碼控制)
    handleChangeList(i){
        console.log(i);
        this.setState({
            page: i 
        })
        this.props.handlegetListNew(i , this.state.showItems);
    }
}

const mapStateToProps = (state) => {
    
    // 6.回傳state
	return {
        list: state.getIn(['top','list']),
        totalPage: state.getIn(['top','totalPage'])
	}
}
const mapDispathToProps = (dispatch) => {
	return {
        // 5.得到資料
        handlegetList() {
            dispatch(actionCreators.getList());            
        },
        // 9.得到資料
        handlegetListNew(i , showItems) {
            dispatch(actionCreators.getList(i , showItems));            
        }
	}
}
export default connect(mapStateToProps, mapDispathToProps)(TopState);