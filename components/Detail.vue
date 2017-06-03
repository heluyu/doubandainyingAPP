<template>
 
    <ul class="list-group">
        <li class="list-group-item active"> {{dataList.title}}</li>
         
        </li>
    </ul>
	<div class="container detail"  >
		<img :src="dataList.images.large" class="img-responsive" alt="Cinque Terre" width="354" height="156"> 
		<br>
		导　演:
		<span v-for=" val in dataList.directors">
			<a href="{{val.alt}}">
                <span>{{val.name}}</span>　
				</a>
		</span>
		<br>
                <span>主　演:</span>
				<span   v-for="vall in dataList.casts">
				<a href="{{vall.alt}}">
                <span>{{vall.name}}</span>　
				</a>
				</span>
				<p></p>
				类型:<ol class="breadcrumb"  >
   			 		<li v-for="val in dataList.genres">{{val}}</li>
   			</ol>
			   	制片国家/地区:<ol class="breadcrumb">
   			 		<li v-for="val in dataList.countries" >{{val}}</li>
   			</ol>
		<hr>
				<span>
					剧情简介：
					<br>
					　　　{{dataList.summary}}
				</span>

</div>
<p></p>



</template>
<script>
	export default {
		data(){
			return {
				'dataList' : [],
                id : this.$route.params.arcId,    //通过路由获取到当前电影的id
			}
		},
		methods : {
			getMovieInfo : function(){
				this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+this.id,).then(function(res){
                    // console.log( res );
		        	this.dataList = res.data;
		        	// console.log( this.dataList );
		        },function(){
		            console.log('调用失败');
		        });
	    	},
            // getChapterList : function(){
			// 	this.$http.jsonp('http://192.168.1.142/biquge/api/bookChapter.php?',{
		    //         act:'list',
            //         id : this.movieId
		    //     },{
		    //         jsonp:'cb'
		    //     }).then(function(res){
            //         console.log( res );
		    //     	this.dataList2 = res.data;
		    //     	// console.log( res.data[0].title );
		    //     },function(){
		    //         console.log('调用失败');
		    //     });
	    	// }
		},
		created:function(){
           console.log("yes");
	       this.getMovieInfo(); //获取小说的详细信息 
	    }
	}
</script>
