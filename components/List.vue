<template>
    <div class="container-fluid">
    <div class="btn btn-block btn-primary">搜索结果</div>
    <div class="media arc-list" v-for="val in dataList">
        <a class="pull-left" href="#">
             <img class="media-object" :src="val.images.medium"  alt="媒体对象">
        </a>
        <div class="media-body">
           <a href="#" v-link="{path:'/menu/Detail/'+val.id}" >
                <h4 class="media-heading">{{val.title}}</h4>
            </a>
                <span>主演:</span>
                <span v-for="vall in val.casts">{{vall.name}}　</span>
        </div>
    </div>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				'dataList' : [],
				curCatId : this.$route.params.catId
			}
		},
		methods : {
			getBookList : function(){
				this.$http.jsonp('https://api.douban.com/v2/movie/search?q='+this.curCatId
				)
                .then(function(res){
		        	this.dataList = res.data.subjects;
		        },function(){
		            console.log('调用失败');
		        });
	    	}
		},
		created:function(){
	       this.getBookList();
	    },
         watch: {
   			'$route' (to, from) {
	     		this.curCatId = to.params.catId;
	       		this.getBookList();
		   	}
		}
	}
</script>
<style>
/*适配屏幕*/
@media (max-width: 768px) {
	.arc-list p {
		height:72px;
		line-height:20px;
	}
    .arc-list img {
        width:120px;
        height:150px;
    }
}
</style>
