function createLoad() {
	showLoad();
	var randomt=/*Math.random() * (10 - 1) + 1*/0;
	setTimeout("finishLoad()",randomt);
}
function hashChangeHandler() {
	checkhash = window.location.hash.substr(1,1);
	pagehash = window.location.hash.substr(2,5);
	if(checkhash!=='/'||pagehash!=='index') {
		window.location.href='#/index';
	}
	pih = window.location.hash.substr(7);
	nih = window.location.hash.substr(8,10);
	nid = window.location.hash.substr(19);
	pin = document.getElementById('page');
	if(pagehash==='index'||!pih) {
		clear();
		show('home');
		setTitle('首页');
	}
	switch(pih) {
	case '/contactUs':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="title-bg">
		<div class="width title">
		<h1>联系我们</h1><p>Contact Us</p>
		</div>
		</div>
		<div class="width page-c">
		<h2>学习宝策划招募</h2>
		<p>联络地址：吉林省长春市南关区自由大路506号<br/>QQ：2140567150</p>
		<h2><br/>学习宝广告合作</h2>
		<p>QQ：2140567150</p>
		<h2><br/>学习宝摸鱼俱乐部</h2>
		<p>QQ群：879982231</p>
		</div>
		`;
		setTitle('联系我们');
		break;
	case '/teamMates':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="title-bg">
		<div class="width title">
		<h1>团队成员</h1><p>Teams</p>
		</div>
		</div>
		<div class="width page-c">
		<man><h1>姜浩然</h1><p>演员 剧情</p><button onclick="goN(330)">详情信息</button></man>
		<man><h1>陈 骁</h1><p>演员 剧情</p><button onclick="goN(331)">详情信息</button></man>
		<man><h1>刘彦泽</h1><p>演员 剧情</p><button onclick="goN(333)">详情信息</button></man>
		<man><h1>董彦伯</h1><p>演员</p><button onclick="goN(335)">详情信息</button></man>
                <man><h1>王禹尧</h1><p>演员</p><button onclick="goN(332)">详情信息</button></man>
		<man><h1>赵禹淳</h1><p>演员 账号运营</p><button onclick="goN(336)">详情信息</button></man>
		<man><h1>杨士赫</h1><p>演员 拍摄 剪辑</p><button onclick="goN(337)">详情信息</button></man>
		<man><h1>袁炜迪</h1><p>演员 剧情 拍摄</p><button onclick="goN(338)">详情信息</button></man>
		<man><h1>洪宇凡</h1><p>演员</p><button onclick="goN(339)">详情信息</button></man>
		<man><h1>裴隆基</h1><p>演员</p><button onclick="goN(329)">详情信息</button></man>
		<man><h1>王鹏博</h1><p>&nbsp;</p><button onclick="goN(353)">详情信息</button></man>
		<man><h1>更多</h1><p>敬请期待</p></man>
		</div>
		`;
		setTitle('团队成员');
		break;
	case '/newsList':
		clear();
		show('page');
		pin.innerHTML=newsListList;
		setTitle('新闻动态');
		break;
	case '/videoList':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="title-bg">
		<div class="width title">
		<h1>视频合集</h1><p>Videos</p>
		</div>
		</div>
		<div class="width page-c">
		<!--<videc><img src=""/><h1>学习宝成员（最后？）一次会晤</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>来自学习宝的高考祝福 ^v^</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>高中毕业前最后一次男♂生♂的♂活动（悲）</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>普通高中自习课摸鱼被逮实录</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>终于下课了，开摆！[doge]已经毕业的宝子们和高三即将离校的宝子们听到之后...</h1><p><sph onclick="openWXSPH()">视频号</sph></p></videc>
		<videc><img src=""/><h1>有谁会拒绝这样的法杖呢？[doge][doge]（内容纯属娱乐 切勿带入现实哦）</h1><p><sph onclick="openWXSPH()">视频号</sph></p></videc>
		<videc><img src=""/><h1>让我们来看看是谁在网课摸鱼！[doge] #网课生活</h1><p><sph onclick="openWXSPH()">视频号</sph></p></videc>
		<videc><img src=""/><h1>某中学惊现神秘生物！</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>刀哥深夜祝福高三9班学子高考顺利，金榜题名，指定有你</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>长春高中生的封城疯事</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>不用烟 吐烟圈教程</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>元（摆）宵（烂）节快乐，速速进群唠嗑！</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>【vlog？】摆 烂 人 做 摆 烂 饭</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>高中摆烂人2 之《 西 电 东 输 》</h1><p><bi onclick="openBI()">哔哩哔哩</bi><sph onclick="openWXSPH()">视频号</sph></p></videc>
		<videc><img src=""/><h1>高三九班全明星：好 运 来</h1><p><sph onclick="openWXSPH()">视频号</sph></p></videc>
		<videc><img src=""/><h1>大家新年快乐呀！是不是很想我们呢[doge]~学习宝</h1><p><ks onclick="openKS()">快手短视频</ks></p></videc>
		<videc><img src=""/><h1>《高 中 摆 烂 人 图 鉴》</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>《如 何 制 作 炒 田 鼠》√</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>震惊！我在学校里遇见丧尸了？!</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>铭记历史 珍爱和平</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>《欢 乐 学 习 人》4（学习人的破防时刻）</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>《欢 乐 学 习 人》3（独立宣言限定）</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>《欢 乐 学 习 人》2</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>
		<videc><img src=""/><h1>《欢 乐 内 卷 人》1</h1><p><bi onclick="openBI()">哔哩哔哩</bi></p></videc>-->
		</div>
		`;
		setTitle('视频合集');
		break;
	case '/404':
		clear();
		show('page');
		pin.innerHTML=`
		<p class="ntfd">
		<img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png" width="200px"/>
		<br/><br/>您似乎来到了没有任何内容存在的荒原…<br/><a href="#/">返回首页</a>或<a href="javascript:window.close();">关闭本页</a></p>
		`;
		setTitle('404');
		break;
	default:
		if(nih!=='newsDetail'&&nih) {
			window.location.href='#/index/404';
		}
		break;
	}
	if(nih==='newsDetail') {
		clear();
		show('news');
		document.getElementById('ac-stn').innerHTML='';
		newsInfoInfo();
		var nt=document.getElementById('newstitle').innerText;
		setTitle(nt);
	}
}
function showLoad() {
	document.getElementById('loader').style.left='0';
	document.getElementById('loader').style.opacity='1';
	document.body.style.overflow='hidden';
}
function finishLoad() {
	document.getElementById('loader').style.left='-100%';
	document.getElementById('loader').style.opacity='0';
	document.body.style.overflow='visible';
}
function show(e) {
	document.getElementById(e).style.display='block';
}
function hide(e) {
	document.getElementById(e).style.display='none';
}
function clear() {
	window.scrollTo(0,0);
	hide('home');
	hide('news');
	hide('page');
	document.getElementById('page').innerHTML='';
	document.getElementById('newstitle').innerHTML='';
	document.getElementById('newsinfo').innerHTML='';
	document.getElementById('newscontent').innerHTML='';
	createLoad();
}
function goN(e) {
	window.location.href='#/index/newsDetail/'+e;
}
function basI(e,e2,e3,e4) {
	if(e3<10) {
		e3='0'+e3;
	}
	if(e4<10) {
		e4='0'+e4;
	}
	if(e2>2030||e3>12||e4>31) {
		document.getElementById('newsinfo').innerHTML='<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgh4qEuwYos531uAYwsAk4sAk.png"/>1999-12-31';
	}
	if(e3<13&&e4<32&&e2<2031) {
		document.getElementById('newsinfo').innerHTML=/*'<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgh4qEuwYos531uAYwsAk4sAk.png"/>'*/'时间：'+e2+'-'+e3+'-'+e4+'';
	}
	document.getElementById('newstitle').innerText=e;
	document.getElementById('newscontent').innerHTML=newsCC;
}
function setTitle(titleName) {
	document.title=titleName+' - 学习宝官方网站';
}
function openWXSPH() {
	alert('如何在微信视频号找到学习宝：\n1.打开微信找到视频号入口\n2.搜索“学习宝官号”关注即可！');
}
function openKS() {
	alert('如何在快手找到学习宝：\n1.下载快手APP并打开\n2.搜索“学习宝官方账号”关注即可！');
}
function openBI() {
	setTimeout("window.open('https://space.bilibili.com/494631046/video','_blank');",500);
}
