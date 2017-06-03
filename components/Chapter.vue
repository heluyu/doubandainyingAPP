<template>
    <div class="container-fluid">
    <div class="btn btn-block btn-primary">{{dataList.name}}的作品</div>
    <div  class="media arc-list" v-for="val in dataList.works">

        <a class="pull-left" href="#" >
             <img class="media-object" :src="val.subject.images.small"  alt="媒体对象">
        </a>
        <div class="media-body">
        <span>电影名：{{val.subject.title}}</span>
        <br>
    <span>主　演:</span>
				<span   v-for="vall in val.subject.casts">
                <span>{{vall.name}}</span>　
				</span>
				<br>
			满　分：<span>{{val.subject.rating.max}}</span>
				<br>
			评　分：<span>{{val.subject.rating.average}}</span>
				<br>
				<span>{{val.subject.collect_count}}</span>人评价
    
    </div>
    </div>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				'dataList' : [],
                id:this.$route.params.id
			}
		},
		methods : {
			getBookList : function(){
				this.$http.jsonp('https://api.douban.com/v2/movie/celebrity/'+this.id)
                .then(function(res){
					console.log(res)
					console.log(res.data)
		        	this.dataList = res.data;
                    // console.log(this.dataList)
		        },function(){
		            console.log('调用失败');
		        });
	    	}
		},
		created:function(){
	       this.getBookList();
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
