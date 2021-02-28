var app = new Vue({
    el : '#app',
    data :{
        content:'',
        comments:[
            {value:'Ini Comment1',datetime:'28-02-2021',point:2},
            {value:'Ini Comment2',datetime:'28-02-2021',point:10},
            {value:'Ini Comment3',datetime:'28-02-2021',point:11}
    ]

    },
    methods:{
        AddComment: function(){
            this.comments.push(this.content);
            this.contents='';
        },
        
        RemoveComment: function(index){
            this.comments.splice(index,1)
        },

        Upvote: function(index){
       var x = this.comments
        function findObjectByKey(x, key, index) {
            for (var i = 0; i < x.length; i++) {
                if (x[i][key] === index) {
                    return x[i];
                }
            }
            return null;
        }
        var obj = findObjectByKey(this.comments, [], index)
        console.log(obj)
       
        },
        Selected: function () {
            this.selectedIndex = this.comments.indexOf(this.content)
            alert('this is selected Index ' + this.selectedIndex)
        }
    
    }
})