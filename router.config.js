import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Chapter from './components/Chapter.vue';


export default {
    '/home' : {
        component : Home
    },
    '/menu' : {
        component : Menu,
        subRoutes : {
            '/:catId' : { //点击分类，显示小说列表
                component : List
            },
            '/Detail/:arcId' : { //点击小说，显示小说的信息与小说章节
                component : Detail
            },
            //   /menu/Chapter/1 ....
            '/Chapter/:chapterId' : { //点击章节, 显示章节内容
                component : Chapter
            }
        }
    }
}