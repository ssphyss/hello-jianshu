import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { WriterWrapper } from './style';

class Writer extends PureComponent{ 

    render(){
        // console.log('----------focused：',this.state.focused)
        // console.log('----------(store)登入狀態loginState',this.props.loginState)
        const { loginState } = this.props;
        if(loginState){
            return(
                <WriterWrapper>
                          登入寫文章     
                </WriterWrapper>
            )
        }else {
            return <Redirect to='/login' />
        }        
    }    
}
const mapStateToProps = (state) => ({
    loginState: state.getIn(['login','login'])
})

export default connect(mapStateToProps, null)(Writer);