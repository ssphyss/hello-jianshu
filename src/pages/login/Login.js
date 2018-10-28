import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent{ 

    render(){
        // console.log('----------focused：',this.state.focused)
        console.log('----------(store)登入狀態loginState',this.props.loginState)
        const { loginState } = this.props;
        if(!loginState){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <h1>我是 Login</h1>  
                        <Input placeholder='帳號' ref={(input) => {this.account = input}} /> 
                        <Input placeholder='密碼' ref={(input) => {this.password = input}} type='password'/> 
                        <Button
                            // onClick={this.props.login}
                            onClick={() => this.props.login(this.account, this.password)}
                        >登入
                        </Button>   
                    </LoginBox>               
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/' />
        }        
    }    
}
const mapStateToProps = (state) => ({
    // 不能同名
    loginState: state.getIn(['login','login'])
})
// const mapStateToProps = (state) => {
// 	return {
//         loginState: state.getIn(['login','login'])
// 	}
// }
const mapDispathToProps = (dispatch) =>({
    login(accountElem, passwordElem){
        console.log(accountElem, passwordElem)
        console.log(accountElem.value, passwordElem.value)
        const action = actionCreators.login(accountElem.value, passwordElem.value)
        dispatch(action)
    }
})
export default connect(mapStateToProps, mapDispathToProps)(Login);