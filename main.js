import angular from 'angular'  



let model = [ 
  {
    id:1,
    name:'Иван',
    text: `Убирая шипцы, рыбалка начинается сама по себе. Внимание к тебе становится больше, тут правда надо четко свои Короны отслеживать, а то под короной внимания всегда много кажется). 
    Когда убираешь шипцы мозг, видимо, начинает как-то по другому работать чтоли, тебя тянет туда, где с большей вероятностью ждет удача, получается подсознание ведет куда надо, потому что помимо хорошего отношения людей и события вокруг благоволят. Ощущение, что жизнь тебе зеленый коридор включила.`,
    date: '2018-01-09T19:01:07.233Z', 
  }, 
  
  { 
    id:2,
    name:'Петр',
    text:'some text 2',
    date: '2018-01-10T12:01:17.233Z',
    child:[
        { 
        id:3,
        name:'Федор',
        text:'some text 3',
        date: '2018-01-10T12:03:17.233Z',
        child:[
            {
            id:4,
            name:'Борис',
            text:'some text 4',
            date: '2018-01-10T12:12:17.233Z',
                
            }
        ]
        }
    ]
  },
  {
    id:5,
    name:'Арчибальд',
    text:'some text 5',
    date: '2018-01-11T13:01:17.233Z',
    child:[
        {
        id:6,
        name:'Алексей',
        text:'some text 5',
        date: '2018-01-11T13:01:22.233Z',
        }
    ]
      
  }
];
 
//base module
const app = angular.module('commentsDirective', []); 

    
    app
    .controller('CommentsCtrl', ['$scope', function($scope) { 
        
        $scope.comments = model;
        $scope.lastCommentItem;
        $scope.addCommentState = false;
        $scope.nickname = localStorage.getItem('nickname');
        
        

        //method will create commment or subcomment. 
        $scope.addComment = function(item) {           

            let target;
            let dataObject = {
                name:this.nickname, 
                text:this.body,
                date:new Date().toISOString(),
                id:32 
            }
            
            if(item) {

                if(!item.child) item.child = [];     
                target = item.child;
                item.showCommentPanel = false;

            } else {                
                target = $scope.comments;
                $scope.commentFormToggler();
            }

            target.push(dataObject); 
            
            this.body = '';
            
        };


        $scope.formatDate = function(dt) {
            
            let formattedDttm = new Date(dt).toLocaleString("ru", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',             
                timezone: 'UTC', 
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            });

            
            return formattedDttm !== 'Invalid Date' ?  formattedDttm : dt;
        }

        //toggle commentState for hide/show form
        $scope.commentFormToggler = function() {
            $scope.addCommentState = !$scope.addCommentState;
        }


        $scope.showCommentPanel = function(item) { 

            if($scope.lastCommentItem) $scope.lastCommentItem.showCommentPanel = false;

            item.showCommentPanel = true;
            $scope.lastCommentItem = item;
            
        }

        $scope.saveLogin = function() {
            if(!localStorage.getItem('nickname')) {
                let login = prompt();
                localStorage.setItem('nickname', login);
                this.nickname = localStorage.getItem('nickname');
            }
        }

        $scope.removeCommentText = function(comment) {
            //$$hashKey
            
            comment.text = '.'
             
          
        }
    }])
   

 

export default app; 