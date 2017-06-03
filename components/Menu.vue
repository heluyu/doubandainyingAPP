<template>
<nav class="navbar navbar-inverse" role="navigation">
    <div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">xiabibi_App</a>
    </div>
    <div class="collapse navbar-collapse" id="example-navbar-collapse">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页</a></li>
            <li class="dropdown">
                                   <div class="input-group">
					<input type="text" class="form-control" placeholder="电影、影人、电视剧" v-model="searchkey">
					<span class="input-group-btn">
						<button class="btn btn-default" type="button" @click="getCatList()" v-link="{path:'/menu/List/'+searchkey}" >
							搜索
						</button>
					</span>
				</div>
                
            </li>
        </ul>
    </div>
    </div>
</nav>
<router-view></router-view>
</template>
<script>
export default {
    data(){      //es6 json中函数的简写方式
        return {
            dataList : [],  //保存从api获取过来的分类数据
            searchkey:''
        }
    },
    methods : {
        getCatList(){ //获取分类数据
            this.$http.jsonp('https://api.douban.com/v2/movie/search?q='+this.searchkey
            )
            .then(function(res){
		        	this.dataList = res.data;
		        },function(){
		            console.log('调用失败');
		        });
        }
    }
}
</script>













