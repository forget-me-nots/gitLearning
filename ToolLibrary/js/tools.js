	
	/**
	 * 1.arguments.length获取的是实参列表，函数名.length获取形参列表
	 * 2.typeof 类型判断返回的结果有六种，'number' 'string' 'boolean' 'object' 'undefined' 'function'.
	 * 			返回的结果是字符串类型
	 * 3. undefined null NaN "" 0 false  ==>转化为布尔值的结果都为false
	 * 4.<a href="javascript:void(0)"></a>  阻止啊标签默认事件.
	 * 5.五中基本数据类型 number string boolean undefined null
	 * 6.三目运算
	 * 7.mspaint //快速启动window的画板。
	 * 8.[注意]在new Date()前面使用一元加符号，可以把日期字符串，转换为日期毫秒数
	 * 		console.log(+new Date());//1468239954076
	 * 	9.如果进行算术加法运算，undefined转换为NaN，null转换为0，false转换为0，true转换为1
	 * 10.[注意]null == 0的结果为false，这是因为javascript将null == undefined的结果设为true。
	 * */
	
	
	
	
	
	//一.继承的实例    ------>来自渡一教育
	/*
		//  1.继承的实例     缺陷自己的构造函数发生了改变
		
		//JavaScript：利用原型链实现继承
		//封装函数实现继承
		function inherit (Target,Origin ) {
			function F () {}  //中间转换实现继承，
			F.prototype = Origin.prototype;
			Target.prototype = new F();
		};
		Father.prototype.lastName="Deng";
		//申明一个父函数
		function Father () {
		};
		//申明一个子函数
		function Son () {
		};
		//执行函数     1.先执行
		inherit(Son,Father) 
		//创建是咧      2.在执行
		var son = new Son();
		var father = new Father();
		//注意：js 是有执行顺序的不要颠倒，我自己错误--->封装函数要先执行在实例化  。函数申明和封装会自动提升-->js的预编译。
	*/
	
	//  2.继承的实例高级封装 ---->最完美继承，圣杯模式   。同时拥有自己的构造函数，
	/*
		//封装函数实现继承
		function inherit (Target,Origin ) {
			function F () {}  //中间转换实现继承，
			F.prototype = Origin.prototype;
			Target.prototype = new F();
			Target.prototype.constructor = Target;
			Target.prototype.uber = Origin.prototype;
		};
		
		
		//封装函数的高级写法利用闭包，变量私有化
		var inherit=(function () {
			function F () {}  // F 不会对外暴露 ，变量私有化
			return function (Target,Origin){
				F.prototype = Origin.prototype;
				Target.prototype = new F();
				Target.prototype.constructor = Target;
				Target.prototype.uber = Origin.prototype;  //超类 可有可无方便以后查找继承谁
			}
		})();
		Father.prototype.lastName="Deng";
		//申明一个父函数
		function Father () {
		};
		//申明一个子函数
		function Son () {
		};
		//执行函数     1.先执行
		inherit(Son,Father) 
		//创建实例     2.在执行
		var son = new Son();
		var father = new Father();
	
	*/
	
	
	//二.滚动条滚动的距离兼容写法
	/*
		function getScrollOffset () {
			if (window.pageXOffset) {
				return {
					x : window.pageXOffset,
					y : window.pageYOffset
				}
			} else{
				return {
					x : document.body.scrollLeft + document.documentElement.scrollLeft,
					y : document.body.scrollTop + document.documentElement.scrollTop,
				}
			}
		}
		console.log(getScrollOffset().y)
	*/
	//三.css的权重
	/**
	 * !important       Infinity  无穷
	 * 行间样式                             1000
	 * ID               100
	 * calss|属性|伪类           10
	 * 标签|伪元素                       1
	 * 通配符                                  0
	 * 
	 * */
	
	//四.如何触发一个盒子的bfc
	/**
	 * positions:absolute
	 * display :inline-black
	 * float: right/left
	 * overflow:hidden
	 * 
	 * 所有产生了浮动元素，块级元素看不到它们，产生了bfc的元素和文本类属性的元素以及文本都能看到浮动元素
	 * 
	 * */
	//五.事件绑定函数兼容
	/*
		function addEvent (elem,type,handle) {
			if (elem.addEventListener) {
				elem.addEventListener(type,handle,false)
			} else if(elem.attachEvent){
				elem.attachEvent('on',type,function () {
					handle.call(elem);
				})
			}else{
				elem.['on' + type] = handle
			}
		}
	*/
	//五.事件对象e的兼容性
	/*
		var div = document.getElementsByTagName('div')[0]
		//使用js的document.getElementsByTagName方法获取的元素是一个集合，要加上[0]才能获取想要的结果。
		
		//***** document.getElementById，查找id的时候id是唯一的不是一个集合                                                           
		//console.log(div)
		//获取事件对象源
		div.onclick = function (e) {
			var event = e || window.event;
			var target = event.target || event.srcElement;
			console.log(event)
		}
	*/
	//六.获取窗口高度和宽度兼容ie写法
	/*
		function getwh () {
			if (window.innerWidth) {
				return {
					w : window.innerWidth,
					h : window.innerHeight
				}
			} else{
				if (document.compatMode === "BackCompat") {
					return {
						w : document.body.clientWidth,
						h : document.body.clientHeight
					}
				} else{
					return {
						w : document.documentElement.clientWidth,
						h : document.documentElement.clientHeight
					}
				}
			}
		}
		console.log(getwh())
	*/
	//七.封装取消冒泡函数
	/*
		function stopBubble(e){
			var event = e || window.event
			if (event.stopPropagation) {
				event.stopPropagation()
			} else{
				event.cancelBubble = true
			}
		}
	*/
	//七.封装阻止默认事件（如鼠标右击事件）
	/*
		//oncontextmenu   事件在元素中用户右击鼠标时触发并打开上下文菜单,所有浏览器都支持 oncontextmenu 事件
		function cancalHandler (e) {
			var event = e || window.event
			if (event.preventDefault) {
				event.preventDefault();
			} else{
				event.returnValue = false;
			}
		}
		document.oncontextmenu = function (e) {
			console.log('a')
			//cancalHandler(e)
		}		
	*/
	//八.点击获取验证码出现时间倒计时（使用jquery）
	/*
		$("#rest_code").click(function () {
			var $this=$(this)
			var num = 10;
			if ($("input[name=telPhone]").val()=="") {
				alert('请输入电话号码')
				return false
			} else{
				function settime (obj) {
					if (num == 0) {
						obj.val("获取验证码");
						obj.removeAttr("disabled");
						num = 10;
						window.location = "http://www.baidu.com"
						//location.reload(true) 刷新当前页面，参数为true时， 则以 GET 方式，从服务端取最新的页面, 相当于客户端点击 F5("刷新")。当为false从客户端缓存里取当前页
						clearInterval(timer)
						//return
					} else{
						obj.attr("disabled", true); 
				        obj.val("重新发送(" + num + ")"); 
				        num--; 
				        console.log(num)
					}
				};
				var timer = setInterval(function () {
					settime($this)
				},1000)
			};
		})
	*/
	/**
	 * 怎样添加、移除、移动、复制、创建和查找节点？

		1）创建新节点 createDocumentFragment() //创建一个DOM片段
		createElement() //创建一个具体的元素
		createTextNode() //创建一个文本节点
		
		2）添加、移除、替换、插入 appendChild() //添加
		removeChild() //移除 
		replaceChild() //替换 
		insertBefore() //插入
		
		3）查找 getElementsByTagName() //通过标签名称
		getElementsByName() //通过元素的Name属性的值 
		getElementById() //通过元素Id，唯一性
		getElementsByClassName()//通过元素的class类
	 */
	
	//九.看下列代码输出什么？解释原因
	/*
		var undefined;
		console.log(undefined == null)   //true
		console.log(1 == true)
		console.log(2 == true)           //true转化后 ：true = 1
		console.log(0 == false)
		console.log(0 == '')
		console.log(NaN == NaN)   //false     这个是特殊情况       
		console.log([] == false)
		console.log([] == ![])
		console.log([] == [])      //false   [] : 是对象只是形式上一样，还要比较路径地址
	*/
	
	//十.对象的深度克隆封装函数
	/*
		function deepClone (origin,target) {
			var target = target ||{},
				toStr  = Object.prototype.toString,
				arrStr = "[object Array]";
			for (var prop in origin) {
				if (origin.hasOwnProperty(prop)) {
					if (origin[prop] !=="null" && typeof(origin[prop])=="object") {
						target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};
						deepClone(origin[prop],target[prop])
					} else{
						target[prop] = origin[prop]
					}
				}
			}
			return target
		}
	*/
	/*
		例子
		var obj = {
			name : "zhang",
			age  : 40,
			hoby : ["羽毛球","篮球","乒乓球"],
			a    : {
				b : "小王",
				c : "小黄"
			}
		}
		var obj1 = {
			height : "175cm"
		}
		deepClone(obj,obj1)
		console.log(obj1)
	*/
