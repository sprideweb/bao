finishLoad();
newsListList=`
    <div class="title-bg">
        <div class="width title">
		    <h1>新闻动态</h1><p>News</p>
	    </div>
    </div>
    <div class="width">
        <br/><br/><br/>
	    <div class="news">
	    <div class="news-top-s">新闻列表</div>
	        <nodata>没有内容</nodata>
	    </div>
	    <div class="news">
	    <div class="news-top-s">公告列表</div>
	        <a onclick="goN(354)">关于学习宝快手APP官方账号终止运营的公告<t>2024/04/12</t></a>  
	        <a onclick="goN(353)">关于学习宝微信视频号官方账号终止运营的公告<t>2024/04/11</t></a>  
	        <a onclick="goN(352)">关于学习宝B站官方账号终止运营的公告<t>2024/04/10</t></a>
	        <a onclick="goN(319)">学习宝团队成员聚餐<t>2022/08/15</t></a>  

	    </div>
	    <br/><br/><br/><br/>
    </div>
`;
function newsInfoInfo() {
	switch(nid) {
	case '231':
		newsCC=`<p><br/>快手：学习宝官方账号<br/><br/><a href="https://space.bilibili.com/494631046" target="_blank">哔哩哔哩：学习宝官方账号</a><br/><br/>微信视频号：学习宝官号</p>`;
		basI('学习宝所有平台账号一览',2022,2,5);
		break;
	case '319':
		newsCC=`<center><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgsa2VrgYo3tec-AUwiQI47QE.png"/></center>`;
		basI('学习宝团队成员聚餐',2022,8,15);
		break;
	case '329':
		newsCC=`<center><img src=""/></center><br/>`;
		basI('裴辣鸡',2022,9,13);
		break;
	case '330':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo6pjo1Qcw4gI42AM.jpg"/></center>
		<br/>出镜信息：（仅供参考）<br/><br/>元（摆）宵（烂）节快乐，速速进群唠嗑！2022-2-15<br/>长春高中生的封城疯事2022-3-16<br/>高中毕业前最后一次男♂生♂的♂活动（悲）2022-5-31<br/>学习宝成员（最后？）一次会晤2022-8-15<br/>来自学习宝的高考祝福 ^v^2022-6-5`;
		basI('姜耗盐',2022,10,5);
		break;
	case '331':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo0abTzwYw4gI42AM.jpg"/></center><br/>
		出镜信息：（仅供参考）<br/><br/>学习宝成员（最后？）一次会晤2022-8-15<br/>高中毕业前最后一次男♂生♂的♂活动（悲）2022-5-31<br/>某中学惊现神秘生物！2022-5-15<br/>元（摆）宵（烂）节快乐，速速进群唠嗑！2022-2-15<br/>高中摆烂人2 之《 西 电 东 输 》2022-1-10<br/>《高 中 摆 烂 人 图 鉴》2021-12-16<br/>《如 何 制 作 炒 田 鼠》√2021-12-15<br/>震惊！我在学校里遇见丧尸了？!2021-12-14
		`;
		basI('解说马尧',2022,10,20);
		break;
	case '332':
		newsCC=`<center><img src=""/></center><br/>`;
		basI('窑子',2022,10,20);
		break;
	case '333':
		newsCC=`<center><img src=""/></center><br/>`;
		basI('家银',2022,10,20);
		break;
	case '335':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo4qm_8AQw4gI42AM.jpg"/></center>`;
		basI('小董',2022,10,20);
		break;
	case '336':
		newsCC=`<center><img src=""/></center><br/>`;
		basI('赵文化',2022,10,20);
		break;
	case '337':
		newsCC=`<center><img src=""/></center><br/>`;
		basI('杨二狗',2022,10,20);
		break;
	case '338':
		newsCC=`<center><img src=""/></center><br/>`;
		basI('袁炜迪',2022,10,20);
		break;
	case '339':
		newsCC=`<center><img src=""/></center><br/>`;
		basI('洪宇凡',2022,10,20);
		break;
	case '352':
		newsCC=`<img src="https://13511974.s21i.faiusr.com/2/ABUIABACGAAg0b-utAYooKO8rQQwuAg43As.jpg"/>`;
		basI('关于学习宝B站官方账号终止运营的公告',2024,4,10);
		break;
	case '353':
		newsCC=`<img src="https://13511974.s21i.faiusr.com/2/ABUIABACGAAg0eLvtAYo3vX3oAcwuAg46gw.jpg"/>`;
		basI('关于学习宝微信视频号官方账号终止运营的公告',2024,4,11);
		break;
	case '354':
		newsCC=`<center><h1>关于学习宝快手APP官方账号终止运营的公告</h1></center><br/><br/>
		<p>\u3000\u3000因账号运营合作期满，学习宝快手APP官方账号“学习宝~ 双击666”（快手平台ID: ksxuexibao）即日起不再以学习宝快手平台官方账号身份运营。</p><br/><br/><br/>学习宝<br/>2024年4月12日
		`;
		basI('关于学习宝快手APP官方账号终止运营的公告',2024,4,12);
		break;
	default:
		window.location.href="#/index/newsList";
		break;
	}
}