import app from '../../main'
import React from "react";
import ReactDOM from "react-dom";
import CommentsCounter from "../react/CommentsCounter";

const reactDirective = app.directive('reactDirective', function() {
    return {
        template: '<div id="reactapp" class="react-part"></div>',
        scope: {
            comments: '='            
        }, 
        link: function(scope, el, attrs){ 
            const reactapp = document.getElementById('reactapp')
            scope.$watch('comments', function(newValue, oldValue) {    
                ReactDOM.render(
                <CommentsCounter comments={newValue}/>
                , reactapp);            
            }, true);

        }
    }
})

export default reactDirective
