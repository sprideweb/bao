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
	    	<!--<nodata>没有内容</nodata>-->  
	        <a onclick="goN(351)">学习宝超级视频APP安卓版正式上线，欢迎您下载品鉴<t>2024/06/14</t></a>
	        <a onclick="goN(319)">学习宝团队成员举行聚餐活动，告别难忘的高中生活<t>2022/08/15</t></a>
	        <a onclick="goN(318)">学习宝团队在东北师大附中校门口拍摄告别视频<t>2022/08/15</t></a>  
	    </div>
	    <div class="news">
	    <div class="news-top-s">公告列表</div>
	    	<!--<nodata>没有内容</nodata>-->
	    	<a onclick="goN(322)">全平台暂停更新公告<t>2022/08/18</t></a>  
	    </div>
	    <br/><br/><br/><br/>
    </div>
`;
function newsInfoInfo() {
	switch(nid) {
	case '231':
		newsCC=`内容已删除`;
		basI('欢迎关注学习宝哔哩哔哩、微信视频号、快手短视频账号',2022,2,5);
		break;
	case '318':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgtcSbuwYo1u21wwUwjQM48gM.png"/><br/><br/></center>学习宝团队在东北师大附中校门口拍摄告别视频，告别珍贵的高中生活和可爱的观众朋友们，感谢你们与我们一起度过难忘的高三时光。我们有缘再会！`;
		basI('学习宝团队在东北师大附中校门口拍摄告别视频',2022,8,15);
		break;
	case '319':
		newsCC=`<center><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgsa2VrgYo3tec-AUwiQI47QE.png"/></center>`;
		basI('学习宝团队成员举行聚餐活动，告别难忘的高中生活',2022,8,15);
		break;
	case '322':
		newsCC=`<center><h1>全平台暂停更新公告</h1></center><br/><br/>
		<p>即日起，学习宝全网平台账号暂停更新。感谢您的支持和陪伴。</p><br/><br/><br/>学习宝<br/>2022年8月16日
		`;
		basI('全平台暂停更新公告',2022,8,18);
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
	case '351':
		newsCC=`<img src="https://www.baidu.com/4/5/ABUIABAEGAAgu9CbuwYoxMDB0QYwvAo4sQI.png" width="80%"/><br/>学习宝APP下载地址：http://bao.spride.asia/app/`;
		basI('学习宝超级视频APP安卓版正式上线，欢迎您下载品鉴',2024,6,14);
		break;
	default:
		window.location.href="#/index/newsList";
		break;
	}
}
