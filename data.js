finishLoad();
newsListList=`
    <div class="title-bg">
        <div class="width title">
		    <h1>新闻动态</h1><p>News</p>
	    </div>
    </div>
    <div class="width">
        <div class="xwlb-new">
            <a onclick="goN(319)">学习宝团队成员举行聚餐活动，告别难忘的高中生活<t>2022-08-15</t></a>
            <a onclick="goN(318)">学习宝团队在东北师大附中校门口拍摄告别视频<t>2022-08-15</t></a>

        </div>
    </div>
`;
function newsInfoInfo() {
	switch(nid) {
	case '318':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgtcSbuwYo1u21wwUwjQM48gM.png"/><br/><br/></center>学习宝团队在东北师大附中校门口拍摄告别视频，告别珍贵的高中生活和可爱的观众朋友们，感谢你们与我们一起度过难忘的高三时光。我们有缘再会！`;
		basI('学习宝团队在东北师大附中校门口拍摄告别视频',2022,8,15);
		break;
	case '319':
		newsCC=`<center><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgsa2VrgYo3tec-AUwiQI47QE.png"/></center>`;
		basI('学习宝团队成员举行聚餐活动，告别难忘的高中生活',2022,8,15);
		break;
	case '329':
		newsCC=`<center><img src=""/></center><br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>`;
		basI('裴隆基',2022,9,13);
		break;
	case '330':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo6pjo1Qcw4gI42AM.jpg"/></center>
		<br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>2023——&nbsp;长春理工大学`;
		basI('姜浩然',2022,10,5);
		break;
	case '331':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo0abTzwYw4gI42AM.jpg"/></center><br/>
		<smt>毕业去向：</smt>（仅供参考）<br/><br/>2022——&nbsp;吉林大学
		`;
		basI('陈 骁',2022,10,20);
		break;
	case '332':
		newsCC=`<center><img src=""/></center><br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>`;
		basI('王禹尧',2022,10,20);
		break;
	case '333':
		newsCC=`<center><img src=""/></center><br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>2022——&nbsp;西南交通大学`;
		basI('刘彦泽',2022,10,20);
		break;
	case '335':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo4qm_8AQw4gI42AM.jpg"/></center><br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>2022——&nbsp;北京大学`;
		basI('董彦伯',2022,10,20);
		break;
	case '336':
		newsCC=`<center><img src=""/></center><br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>`;
		basI('赵禹淳',2022,10,20);
		break;
	case '337':
		newsCC=`<center><img src=""/></center><br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>`;
		basI('杨士赫',2022,10,20);
		break;
	case '338':
		newsCC=`<center><img src=""/></center><br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>`;
		basI('袁炜迪',2022,10,20);
		break;
	case '339':
		newsCC=`<center><img src=""/></center><br/><smt>毕业去向：</smt>（仅供参考）<br/><br/>`;
		basI('洪宇凡',2022,10,20);
		break;
	default:
		window.location.href="#/index/404";
		break;
	}
}
