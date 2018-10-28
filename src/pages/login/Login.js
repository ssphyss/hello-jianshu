import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from './store';

import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent{ 

    render(){
        // console.log('----------focused：',this.state.focused)
        // console.log('----------mouseIn',this.state.mouseIn)
        return(
            <LoginWrapper>
                <LoginBox>
                    <h1>我是 Login</h1>  
                    <Input placeholder='帳號'/> 
                    <Input placeholder='密碼'/> 
                    <Button>登入</Button>   
                </LoginBox>               
            </LoginWrapper>
        )
    }    
}

const mapDispathToProps = (dispatch) => {
	return {

	}
}
export default connect(null, mapDispathToProps)(Login);