document.getElementById('home').innerHTML=`
<div class="floater">
	<div class="width">
		<p>今天是2022年8月13日 星期六，欢迎访问学习宝官方网站！</p>
	</div>
</div>
<div class="width">
	<div class="top">
		<img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgyNSVvwYolP-0swcwkAk4uAE.png"/>
	</div>
	<div class="nav">
		<a class="act" href="index.html">首页</a>
		<a href="list.html?p=3">关于我们</a>
		<a href="list.html?p=7">成员介绍</a>
		<a href="list.html?p=10">本社新闻</a>
		<a href="list.html?p=12">联系我们</a>
		<a href="list.html?p=13">关注我们</a>
		<div class="drop" style="float: right;">
			<a style="font-size: 13px;"><img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg3diVvwYo9JDz0QMwsAk4jwg.png" class="dropicon" />站群</a>
			<div class="content">
				<a class="droplink">MORE+</a>
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
			  <span>技术支持：信息化</span>
			  <span>HTTP://bao.Spride.asia</span>
			</p>
			<p>
			  <span>地址：吉林省长春市南关区自由大路560号师大附中</span>
			  <span>邮编：10000</span>
			  <span>吉ICP备10225932号</span>
			</p>
		</div>
	</div>
</div>
`;

const urlParams = new URLSearchParams(window.location.search);
const getP = urlParams.get('p');
const path = window.location.pathname;
const judgeIfNameIsList = path.split('/').pop();
if (judgeIfNameIsList === 'list.html') {
	switch (getP) {
	case '7': 
		title('成员介绍');
		fill(`
			<div class="list-left">
			  <h1 class="top">成员介绍</h1>
			  <a href="list.html?p=3">关于我们</a>
		      <a class="act" href="list.html?p=7">成员介绍</a>
		      <a href="list.html?p=10">本社新闻</a>
		      <a href="list.html?p=12">联系我们</a>
		      <a href="list.html?p=13">关注我们</a>
			</div><div class="list-right">
			<h1>成员介绍</h1>
			</div>
		`);
		break;
	case '12': 
		title('联系我们');
		fill(`
			<div class="list-left">
			  <h1 class="top">成员介绍</h1>
			  <a href="list.html?p=3">关于我们</a>
		      <a href="list.html?p=7">成员介绍</a>
		      <a href="list.html?p=10">本社新闻</a>
		      <a class="act" href="list.html?p=12">联系我们</a>
		      <a href="list.html?p=13">关注我们</a>
			</div><div class="list-right">
			<h1>联系我们</h1>
			</div>
		`);
		break;
	case '13': 
		title('关注我们');
		fill(`
			<div class="list-left">
			  <h1 class="top">成员介绍</h1>
			  <a href="list.html?p=3">关于我们</a>
		      <a href="list.html?p=7">成员介绍</a>
		      <a href="list.html?p=10">本社新闻</a>
		      <a href="list.html?p=12">联系我们</a>
		      <a class="act" href="list.html?p=13">关注我们</a>
			</div><div class="list-right">
			<h1>关注我们</h1>
			<p><b>哔哩哔哩</b>-学习宝官方账号</p>

			<p><b>视频号</b>-学习宝官号</p>
			<p><b>快 手</b>-学习宝官方账号</p><p><img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgyv-vuwYoyui2_QEw9AM49AM.png"></p>
			</div>
		`);
		break;
	default:
		alert('illegal parameters!!');
		window.location.href='index.html';
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