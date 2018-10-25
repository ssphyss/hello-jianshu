import styled from 'styled-components';
import logoPic from '../../assets/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/'  //連接首頁,根路徑
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

// 熱門搜 尋框
export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 20px;
	background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-bottom: 1px solid #f0f0f0;
`;

// 熱門搜尋 標題
export const SearchInfoTitle = styled.span`
	margin-bottom: 15px;
	line-height:20px;
	font-size: 14px;
	color: #969696;	
`;

// 熱門搜尋 換一批
export const SearchInfoSwitch = styled.span`
	position: relative;
	float: right;
	font-size: 13px;
	.iconfont {
		position: absolute;	
		top: 50%;
		left: -70%;
		right: -100%;
		transform: translateY(-50%);
		height: 30px;
	}
`;

export const SearchInfoList = styled.span`
	display: block;	
`;

export const SearchInfoItem = styled.span`
	display: inline-block;	
	margin: 10px 5px 0px 0px;
	padding: 0 5px;
	line-height: 20px;
	font-size: 13px;	
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	color: #666;
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	// background: ${props => props.primary ? 'white' : 'yellow'};
	// color: ${props => props.color ? 'white': 'blue'}
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	// font-size: ${props => props.num}
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`