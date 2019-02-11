import React from "react";

export default class CommentsCounter extends React.Component{
	constructor(props){
		super(props)		
	}
	

	recursiveCounter() {

		let {comments} = this.props;
		let counter = 0;

		if(!comments.length) return 0;


		let f = function rec(arr) {
		  arr.forEach(item=>{
			if(!item.child) {
			  counter++;
			} else {
			  counter++;
			  rec(item.child)
			}
		  })
		}
	  
		f(comments);
		
		return counter;
		 
	}

	render(){	

		let {comments} = this.props;
		
		return (
			<div className="react-comments-counter">
				 
			 	<p>Комментариев: {this.recursiveCounter()}</p>
				  
			 
			</div>
		);
	}
}