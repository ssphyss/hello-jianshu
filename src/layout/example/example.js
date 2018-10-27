import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import  "./../../sass/all.scss";
import  "./index.scss";

class exampleRedux extends React.Component{ 

    constructor(props) {
		super(props);
		this.state = {
            focused: false,
            mouseIn: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    // 滑入
    handleInputFocus(){        
        this.setState(() => ({			
			focused: true
        }))
        console.log('聚焦 focused')
    }

    // 滑出
    handleInputBlur(){        
        this.setState(() => ({			
			focused: false
        }))
        console.log('失焦 focused')
    }

    render(){
        console.log('----------focused：',this.state.focused)
        console.log('----------mouseIn',this.state.mouseIn)
        return(
            <div className="top">
               
            </div>
        )
    }    
}


const mapStateToProps = (state) => {
	return {

	}
}
const mapDispathToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps, mapDispathToProps)(exampleRedux);