finishLoad();
newsListList=`
    <div class="title-bg">
        <div class="width title">
		    <h1>新闻动态</h1><p>News</p>
	    </div>
    </div>
    <div class="width">
        <div class="xwlb-new">
            <a onclick="goNt(355)">学习宝团队成员时隔两年半重聚长春冰雪新天地，重温美好回忆，携手迈向未来<t>2025-02-14</t></a>
            <a onclick="goNt(318)">学习宝团队发布最终视频，感恩同行告别高中生涯<t>2022-08-15</t></a>
            <a onclick="goNt(309)">学习宝祝您壬寅虎年春节快乐<t>2022-01-31</t></a>
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
		<center><img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgtcSbuwYo1u21wwUwjQM48gM.png"/><br/><br/></center>
		<center><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgsa2VrgYo3tec-AUwiQI47QE.png"/></center>
                <p>视频地址：<a href="https://www.bilibili.com/video/BV1iT411A7RB/" target="_blank">https://www.bilibili.com/video/BV1iT411A7RB/</a></p>
		`;
		basI('学习宝团队发布最终视频，感恩同行告别高中生涯',2022,8,15);
		break;
	case '329':
		newsCC=`<center><img src=""/></center><br/><br/><br/>`;
		basI('裴隆基',2022,9,13);
		break;
	case '330':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo6pjo1Qcw4gI42AM.jpg"/></center>
		<br/>姜浩然，男，现就读于吉林教育学院。<br/><br/><br/>`;
		basI('姜浩然',2022,10,5);
		break;
	case '331':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo0abTzwYw4gI42AM.jpg"/></center><br/>陈骁，男，现就读于吉林大学。<br/><br/><br/>
		`;
		basI('陈 骁',2022,10,20);
		break;
	case '332':
		newsCC=`<center><img src=""/></center><br/><br/><br/>`;
		basI('王禹尧',2022,10,20);
		break;
	case '333':
		newsCC=`<center><img src=""/></center><br/>刘彦泽，男，现就读于西南交通大学。<br/><br/><br/>`;
		basI('刘彦泽',2022,10,20);
		break;
	case '335':
		newsCC=`<center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgtI2EuwYo4qm_8AQw4gI42AM.jpg"/></center><br/>董彦伯，男，现就读于北京大学。<br/><br/><br/>`;
		basI('',2022,10,20);
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
	case '353':
		newsCC=`<center><img src=""/></center><br/>王鹏博，男。<br/><br/><br/>`;
		basI('王鹏博',2025,2,10);
		break;
	case '354':
		newsCC=`<center><img src=""/></center><br/>王柄智，男。<br/><br/><br/>`;
		basI('王柄智',2025,2,10);
		break;
	case '355':
		newsCC=`
                <p>2025年2月13日，学习宝视频团队的成员们在长春冰雪新天地迎来了久违的团聚。此次团建活动汇聚了团队中的10位成员，尽管距离学习宝发布最后一支视频已经过去近三年时间，且有两位成员因故未能出席，但我们的热情与活力依旧不减当年。</p>
		<p>这次重聚不仅是对过去三年间各自成长的见证，也是对未来的美好展望。活动当天，团队成员们参与了长春冰雪新天地一系列丰富多彩的项目，在冰雪覆盖的新天地中尽情享受乐趣，并拍摄了Vlog视频。随后，学习宝团队成员来到楼外楼大刀肉传统火锅举行聚餐活动。</p>
                <p>本次团聚是学习宝的一个新的起点。虽然在当下的大部分时刻，我们早已互相远在天涯，但曾经在学习宝留下的美好回忆永远不会磨灭，它将一值鼓励着我们，向新的生活和未知的未来勇敢前行。</p>
		<p>陈骁等10人参加了本次活动。</p><center><br/><br/><br/><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgzqjGvQYo7ObTMzCqDTj-CQ.jpg" style="max-width:90%;"/></center>
                `;
		basI('学习宝团队成员时隔两年半重聚长春冰雪新天地，重温美好回忆，携手迈向未来',2025,2,14);
		break;
	default:
		window.location.href="#/index/404";
		break;
	}
}
