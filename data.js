finishLoad();
newsListList=`
    <div class="title-bg">
        <div class="width title">
		    <h1>新闻动态</h1><p>News</p>
	    </div>
    </div>
    <div class="width">
        <div class="xwlb-new">
            <a onclick="goN(350)">春潮网祝您乙巳蛇年新春吉祥<t>2025-01-28</t></a>
            <a onclick="goN(318)">学习宝团队发布最终视频，感恩同行告别高中生涯<t>2022-08-15</t></a>
            <a onclick="goN(309)">学习宝祝您壬寅虎年春节快乐<t>2022-01-31</t></a>
        </div>
    </div>
`;
function newsInfoInfo() {
	switch(nid) {
	case '309':
		newsCC=`在这个充满喜悦与祥和的壬寅虎年春节，学习宝衷心祝愿各位观众朋友及家人新春快乐！愿虎年的钟声带给你们新的希望与梦想，愿各位新的一年里学业进步、事业腾飞，阖家安康，万事如意！`;
		basI('学习宝祝您壬寅虎年春节快乐',2022,1,31);
		break;
	case '318':
		newsCC=`
		<p>2022年8月15日晚，学习宝团队在东北师范大学附属中学的校门口拍摄了他们的最后一支视频，标志着这个深受观众喜爱的团队即将结束他们自成立以来的重要旅程。在这段难忘的时间里，学习宝不仅积累了全平台数十万的播放量，还获得了近一千名忠实粉丝的支持与陪伴。</p>
		<p>通过这段视频，学习宝团队表达了对他们珍贵的高中生活以及所有支持他们的观众朋友们深深的感激之情。团队成员回顾了他们在高三这一年所经历的成长与挑战，并感谢每一位粉丝与他们共同度过的美好时光。</p>
		<p>在此，让我们一同祝愿学习宝团队的每一位成员前程似锦，并期待着下一次的美好相遇。未来，我们有缘再会！</p>
                <p>视频地址：<a href="https://www.bilibili.com/video/BV1iT411A7RB/" target="_blank">https://www.bilibili.com/video/BV1iT411A7RB/</a></p>
		<center><img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgtcSbuwYo1u21wwUwjQM48gM.png"/><br/><br/></center>
		<center><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgsa2VrgYo3tec-AUwiQI47QE.png"/></center>
		`;
		basI('学习宝团队发布最终视频，感恩同行告别高中生涯',2022,8,15);
		break;
	case '329':
		newsCC=`<center><img src=""/></center><br/><br/><br/>`;
		basI('裴隆基',2022,9,13);
		break;
	case '330':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo6pjo1Qcw4gI42AM.jpg"/></center>
		<br/><br/>2022——&nbsp;长春理工大学<br/><br/>`;
		basI('姜浩然',2022,10,5);
		break;
	case '331':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo0abTzwYw4gI42AM.jpg"/></center><br/><br/>2022——&nbsp;吉林大学<br/><br/>
		`;
		basI('陈 骁',2022,10,20);
		break;
	case '332':
		newsCC=`<center><img src=""/></center><br/><br/><br/>`;
		basI('王禹尧',2022,10,20);
		break;
	case '333':
		newsCC=`<center><img src=""/></center><br/><br/>2022——&nbsp;西南交通大学<br/><br/>`;
		basI('刘彦泽',2022,10,20);
		break;
	case '335':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo4qm_8AQw4gI42AM.jpg"/></center><br/><br/>2022——&nbsp;北京大学<br/><br/>`;
		basI('董彦',2022,10,20);
		break;
	case '336':
		newsCC=`<center><img src=""/></center><br/><br/><br/>`;
		basI('赵禹淳',2022,10,20);
		break;
	case '337':
		newsCC=`<center><img src=""/></center><br/><br/><br/>`;
		basI('杨士赫',2022,10,20);
		break;
	case '338':
		newsCC=`<center><img src=""/></center><br/><br/><br/>`;
		basI('袁炜迪',2022,10,20);
		break;
	case '339':
		newsCC=`<center><img src=""/></center><br/><br/><br/>`;
		basI('洪宇凡',2022,10,20);
		break;
	case '350':
		newsCC=`
		<p>乙巳蛇年，瑞气盈门。新春佳节，祥光璀璨。值此良辰美景之际，灵蛇舞动于彩云之间，智慧之光照耀前程似锦；贵体安康，福寿齐天，宛如蟠桃盛宴之仙客，尽享岁月静好。新春钟声敲响，幸福旋律悠扬。家宅安宁，事业蒸蒸日上，财源广进，富贵荣华，恰似繁花盛开于锦绣山河之中，辉煌灿烂不可方物。吉星高照，鸿运当头，心之所向，皆能心想事成，梦随心动，步步生莲。<br/><br/></p>
		<p>在这普天同庆之时，<b>春潮网</b>携微信公众号<b>春潮向海（id: spring_tide2020）</b>、<b>浪潮时代（id: stormtimes）</b>祝各位朋友乙巳蛇年新春吉祥新春快乐，阖府安康，乙巳蛇年万事如意，吉运亨通，福泽绵长。愿所有美好如期而至，幸福与欢乐常伴左右！<br/><br/></p>
		`;
		basI('春潮网祝您乙巳蛇年新春吉祥',2025,1,28);
		break;
	default:
		window.location.href="#/index/404";
		break;
	}
}
