import React from 'react';
import {withRouter} from 'react-router-dom';

class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			
		};
	}
	
	render(){
		return (
			<div className="w3-container">
				<h1 className=" w3-center">Chào mừng đến với kho trò chơi!</h1>
				<br/>
				<div className="w3-row-padding">
					<div className="w3-col l3"><br/></div>
					<div className="w3-col l6 w3-container w3-padding-large">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. <br/><br/>
						Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. <br/><br/>
						Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
					</div>
					<div className="w3-col l3"><br/></div>
				</div>
			</div>
		);
	}
}

export default withRouter(Home);