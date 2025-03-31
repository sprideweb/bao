document.getElementById('home').innerHTML=`
<!--<div class="floater">
	<div class="width">
		<p>今天是2022年8月13日 星期六，欢迎访问学习宝官方网站！</p>
	</div>
</div>-->
<div class="width">
	<div class="top">
		<img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgyNSVvwYolP-0swcwkAk4uAE.png"/>
	</div>
	<div class="nav">
		<a class="act" href="index.html">首页</a>
		<a href="list.html?c=cyjs">成员介绍</a>
		<a href="list.html?c=xwall">本社新闻</a>
		<a href="list.html?c=lxwm">联系我们</a>
		<a href="list.html?c=follow">关注我们</a>
		<a href="list.html?c=appzt">APP&nbsp;</a>
		<div class="drop" style="float: right;">
			<a style="font-size: 12px;"><img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg3diVvwYo9JDz0QMwsAk4jwg.png" class="dropicon" />&nbsp;站群</a>
			<div class="content">
				<a class="droplink" href="https://spride.asia">春潮官网</a>
				<a class="droplink" href="https://spride.asia">春潮游戏</a>
				<a class="droplink" href="https://spride.asia">春潮到家</a>
				<a class="droplink" href="https://spride.asia">春潮视频</a>
			</div>
		</div>
	</div>
</div>
`;
document.getElementById('footer').innerHTML=`
<div class="width">
	<div class="footer">
		<div class="f-l">
			<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAggcGmugYomvPc0QYwuQE4uQE.png"/>
		</div>
		<div class="f-r">
			<p>
			  © 2021-2022
			  <span>春潮视频部</span>
			  <span>学习宝视频网</span>
			  版权所有 All right Reserved.
			  <span>HTTP://bao.Spride.asia</span>
			</p>
			<p>
			  <span>地址：吉林省长春市南关区自由大路560号师大附属中学</span>
			  <span>吉ICP备10225932号</span>
			</p>
		</div>
	</div>
</div>
`;

const urlParams = new URLSearchParams(window.location.search);
const getC = urlParams.get('c');
const getN = urlParams.get('n');
const path = window.location.pathname;
const judgeIfNameIsList = path.split('/').pop();
if (judgeIfNameIsList === 'list.html') {
	switch (getC) {
	case 'cyjs': 
		title('成员介绍');
		fill(`
			<div class="list-left">
			  <h1 class="top">成员介绍</h1>
		      <a class="act" href="list.html?c=cyjs">成员介绍</a>
		      <a href="list.html?c=xwall">本社新闻</a>
		      <a href="list.html?c=lxwm">联系我们</a>
		      <a href="list.html?c=follow">关注我们</a>
			</div><div class="list-right">
			<h1>成员介绍</h1>
			<p>
			<table style="margin:0 auto;"><tbody><tr><td><a href="?n=1215">姜浩然</a></td><td><a href="?n=1216">陈 骁</a></td><td><a href="?n=1217">赵禹淳</a></td><td><a href="?n=1218">刘彦泽</a></td><td><a href="?n=1219">董彦伯</a></td></tr><tr><td><a href="?n=1220">王禹尧</a></td><td><a href="?n=1221">杨士赫</a></td><td><a href="?n=1222">洪宇凡</a></td><td><a href="?n=1223">袁炜迪</a></td><td><a href="?n=1224">裴隆基</a></td></tr><tr><td><a href="?n=1292">王鹏博</a></td><td><a href="?n=1291">王柄智</a></td><td></td><td></td><td></td><td></td></tr></tbody></table>
			</p>
			</div>
		`);
		break;
	case 'lxwm': 
		title('联系我们');
		fill(`
			<div class="list-left">
			  <h1 class="top">联系我们</h1>
		      <a href="list.html?c=cyjs">成员介绍</a>
		      <a href="list.html?c=xwall">本社新闻</a>
		      <a class="act" href="list.html?c=lxwm">联系我们</a>
		      <a href="list.html?c=follow">关注我们</a>
			</div><div class="list-right">
			<h1>联系我们</h1>
			</div>
		`);
		break;
	case 'follow': 
		title('关注我们');
		fill(`
			<div class="list-left">
			  <h1 class="top">关注我们</h1>
		      <a href="list.html?c=cyjs">成员介绍</a>
		      <a href="list.html?c=xwall">本社新闻</a>
		      <a href="list.html?c=lxwm">联系我们</a>
		      <a class="act" href="list.html?c=follow">关注我们</a>
			</div><div class="list-right">
			<h1>关注我们</h1>
			<p><img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgyv-vuwYoyui2_QEw9AM49AM.png"></p>
			<p><center>哔哩哔哩</center></p>
			</div>
		`);
		break;
	case 'xwall': 
		title('本社新闻');
		fill(`
			<div class="list-left">
			  <h1 class="top">本社新闻</h1>
		      <a href="list.html?c=cyjs">成员介绍</a>
		      <a class="act" href="list.html?c=xwall">本社新闻</a>
		      <a href="list.html?c=lxwm">联系我们</a>
		      <a href="list.html?c=follow">关注我们</a>
			</div><div class="list-right">
			<xw><a href="?n=1294">学习宝团队成员时隔两年半重聚长春冰雪新天地，重温美好回忆，携手迈向未来</a><t>2025-02-14</t></xw>
			<xw><a href="https://bao.spride.asia/app/" target="_blank">学习宝APP正式上线安卓市场</a><t>2024-06-12</t></xw>
			<xw><a href="?n=1267">终止运营公告（二）</a><t>2024-04-11</t></xw>
			<xw><a href="?n=1266">终止运营公告（一）</a><t>2024-04-10</t></xw>
			<xw><a href="?n=1232">学习宝发布最终视频，感恩同行告别高中生涯</a><t>2022-08-15</t></xw>
			<xw><a href="?n=1230">春潮视频团队毕业去向大揭秘</a><t>2022-07-26</t></xw>
			<xw><a href="?n=1163">学习宝粉丝群来了！宝子们速速进群唠嗑！</a><t>2022-02-15</t></xw>
			<xw><a href="?n=1162">关于我们</a><t>2022-02-09</t></xw>
			<xw><a href="?n=1157">学习宝Logo释义&视觉识别系统介绍</a><t>2022-01-20</t></xw>
			</div>
		`);
		break;
	case 'appzt': 
		title('学习宝APP');
		fill(`
		`);
		window.location.href='/app/';
		break;
	default:
		switch (getN) {
		case '1215': 
			fill(`
				<div class="news">
			     <tit>姜浩然</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>姜浩然</p>
			    </div>
			`);
			break;
		case '1216': 
			fill(`
				<div class="news">
			     <tit>陈 骁</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>陈骁（解说马尧）</p>
			    </div>
			`);
			break;
		case '1217': 
			fill(`
				<div class="news">
			     <tit>赵禹淳</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>赵禹淳</p>
			    </div>
			`);
			break;
		case '1218': 
			fill(`
				<div class="news">
			     <tit>刘彦泽</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>刘彦泽</p>
			    </div>
			`);
			break;
		case '1219': 
			fill(`
				<div class="news">
			     <tit>董彦伯</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>董彦伯</p>
			     <p></p>
			    </div>
			`);
			break;
		case '1220': 
			fill(`
				<div class="news">
			     <tit>王禹尧</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>王禹尧</p>
			    </div>
			`);
			break;
		case '1221': 
			fill(`
				<div class="news">
			     <tit>杨士赫</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>杨士赫</p>
			    </div>
			`);
			break;
		case '1222': 
			fill(`
				<div class="news">
			     <tit>洪宇凡</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>洪宇凡</p>
			    </div>
			`);
			break;
		case '1223': 
			fill(`
				<div class="news">
			     <tit>袁炜迪</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>袁炜迪</p>
			    </div>
			`);
			break;
		case '1224': 
			fill(`
				<div class="news">
			     <tit>裴隆基</tit>
			     <tim>2022-06-22</tim>
			     <hr/>
			     <p>裴隆基</p>
			    </div>
			`);
			break;
		case '1232': 
			fill(`
				<div class="news">
			     <tit>学习宝团队发布最终视频，感恩同行告别高中生涯</tit>
			     <tim>2022-08-15</tim>
			     <hr/>
			     <p>\u3000\u30002022年8月15日晚，学习宝团队在东北师范大学附属中学的校门口拍摄了他们的最后一支视频，标志着这个深受观众喜爱的团队即将结束他们自成立以来的重要旅程。在这段难忘的时间里，学习宝不仅积累了全平台数十万的播放量，还获得了近一千名忠实粉丝的支持与陪伴。<br/>\u3000\u3000通过这段视频，学习宝团队表达了对他们珍贵的高中生活以及所有支持他们的观众朋友们深深的感激之情。团队成员回顾了他们在高三这一年所经历的成长与挑战，并感谢每一位粉丝与他们共同度过的美好时光。<br/>\u3000\u3000在此，让我们一同祝愿学习宝团队的每一位成员前程似锦，并期待着下一次的美好相遇。未来，我们有缘再会！</p>
			     <p><img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgtcSbuwYo1u21wwUwjQM48gM.png"/></p>
			     <p><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgsa2VrgYo3tec-AUwiQI47QE.png"/></p>
			     <p>视频地址：<a href="https://www.bilibili.com/video/BV1iT411A7RB/" target="_blank">https://www.bilibili.com/video/BV1iT411A7RB/</a></p>
			    </div>
			`);
			break;
		case '1291': 
			fill(`
				<div class="news">
			     <tit>王柄智</tit>
			     <tim>2025-02-10</tim>
			     <hr/>
			     <p></p>
			    </div>
			`);
			break;
		case '1292': 
			fill(`
				<div class="news">
			     <tit>王鹏博</tit>
			     <tim>2025-02-10</tim>
			     <hr/>
			     <p></p>
			    </div>
			`);
			break;
		case '1294': 
			fill(`
				<div class="news">
			     <tit>学习宝团队成员时隔两年半重聚长春冰雪新天地，重温美好回忆，携手迈向未来</tit>
			     <tim>2025-02-14</tim>
			     <hr/>
			     <p><center><img src="https://13511974.s21i.faiusr.com/2/5/ABUIABACGAAgzqjGvQYo7ObTMzCqDTj-CQ.jpg"></p>
			    </div>
			`);
			break;
		default:
			alert('parameter illegal');
			window.location.href='index.html';
			break;
		}
		break;
	}
} else {
}




function fill(element) {
	document.getElementById('list-name').innerHTML=element;
}
function title(name) {
	document.title='春潮视频部（学习宝）网站--'+name;
}
