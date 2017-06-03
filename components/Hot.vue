<template>
    <div class="container-fluid">
    <div class="btn btn-block btn-primary">热门推荐电影</div>
    <div class="media arc-list" v-for="val in dataList">
        <a class="pull-left" href="#" v-link="{path:'/menu/Detail/'+val.id}">
             <img class="media-object" :src="val.images.medium"  alt="媒体对象">
        </a>
        <div class="media-body">
           <a href="#" v-link="{path:'/menu/Detail/'+val.id}" >
                <span class="media-heading"><b>{{val.title}}</b></span>　({{val.year}})
            </a>
			<br>
                <span>主　演:</span>
				<span   v-for="vall in val.casts">
                <span>{{vall.name}}</span>　
				</span>
				<br>
			满　分：<span>{{val.rating.max}}</span>
				<br>
			评　分：<span>{{val.rating.average}}</span>
				<br>
				<span>{{val.collect_count}}</span>人评价
        </div>
    </div>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				'dataList' : []
			}
		},
		methods : {
			getBookList : function(){
				this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
                .then(function(res){
					console.log(res)
					console.log(res.data)
		        	this.dataList = res.data.subjects;
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
