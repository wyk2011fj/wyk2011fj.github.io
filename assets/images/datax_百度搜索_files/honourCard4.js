!function(){A.uicss("honourCard4/honourCard4.css?v=20180918");var o=function(o,a){var r=$(o);if(a.compName&&a.vLevel&&a.centerPageUrl){var i="网民权益保障",n="",u="",e="",s="",h="",l='<div class="opui-honourCard4-abs">#{abs} | <a href="#{url}" target="_blank">查看企业档案</a></div>',d='<div class="opui-honourCard4-icon opui-honourCard4-icon-#{level}"></div>',t='<div class="opui-honourCard4-info opui-honourCard4-info-#{level}">',p='<div><a class="opui-honourCard4-pay" href="http://baozhang.baidu.com" target="_blank">#{info_right} <i></i></a><h3 class="opui-honourCard4-title">#{name}</h3></div>',v="",c="";if(a.webIMUrl&&(l='<div class="opui-honourCard4-abs">#{abs} | <a href="#{url}" target="_blank">查看企业档案</a>| <div class="opui-honourCard4-zixunicon" style="width:0;margin:0"></div><a href="#{webIMUrl}" target="_blank">在线咨询</a></div>'),"baozhang"==a.type){p='<div class="opui-honourCard4-baozhang-head"><a class="opui-honourCard4-pay" href="http://baozhang.baidu.com" target="_blank">#{info_right} <i></i></a><h3 class="opui-honourCard4-baozhang-title" title="#{name}"><span>承诺商家：\r\n</span>#{name}</h3></div>';var f=a.bzAppliCounts||0;if(i="商家承诺",n='<div class="opui-honourCard4-subtitle">该商家郑重承诺，在以下方面为登录用户提供保障：</div>',u=" opui-honourCard4-baozhang",a.unfixedInfo.bzItems)for(var b=a.unfixedInfo.bzItems.length>9?9:a.unfixedInfo.bzItems.length,C=0;b>C;C++){C%3===0&&(e+='<ul class="opui-honourCard4-baozhang-list">');var g=a.unfixedInfo.bzItems[C];e+='<li><i class="opui-honourCard4-baozhang-icon-default"></i>'+g+"</li>",(C%3===2||C===b-1)&&(e+="</ul>")}s='<a target="_blank" href="'+a.centerPageUrl+'" class="opui-honourCard4-more">查看该商家保障详情>></a>',h='<div class="opui-honourCard4-sep"></div><div class="opui-honourCard4-foot">该商家在90天内共有'+f+'起网民保障申请，<a target="_blank" href="http://baozhang.baidu.com/guarantee/step?nav=step">申请保障</a></div>'}else if("baozhang-v"==a.type){for(var z="",I=a.brandLogo.split("."),C=0;C<I.length-1;C++)z=z+I[C]+".";z=z.slice(0,z.length-1),z=z+"_w75_h75_F."+I[I.length-1],d='<div class=" opui-honourCard4-icon-baozhangV" ><img src='+z+" /></div>",c='<div class="opui-honourCard4-sep"></div><div class="opui-honourCard4-foot "><i class="opui-honourCard4-rLog"></i>该主体具有商标相关的合法权益</div>',l="",p='<div class="opui-honourCard4-title-r-container"><a class="opui-honourCard4-pay opui-honourCard4-pay-rLog" href="'+a.centerPageUrl+'#vmp-tm" target="_blank">更多信息>></a><h3 class="opui-honourCard4-title" style="font-size:13px;">[商标认证]</h3><span class="opui-honourCard4-subtitle">该主体为商标权利人</span></div>'}else"baozhang-v-auth"==a.type?(d='<div class=" opui-honourCard4-icon-baozhangV" ><img src="data:image/png;base64,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"/></div>',c='<div class="opui-honourCard4-sep"></div><div class="opui-honourCard4-foot "><i class="opui-honourCard4-rLog"></i>该主体具有商标相关的合法权益</div>',l="",p='<div class="opui-honourCard4-title-r-container"><a class="opui-honourCard4-pay opui-honourCard4-pay-rLog" href="'+a.centerPageUrl+'#vmp-tm" target="_blank">更多信息>></a><h3 class="opui-honourCard4-title" style="font-size:13px;">[品牌授权认证]</h3><span class="opui-honourCard4-subtitle">由商标注册人授权该主体使用</span></div>'):"chengqi"==a.type&&(d='<div class=" opui-honourCard4-icon-chengqi" ></div>',l='<div class="opui-honourCard4-abs">#{name}</div>',t='<div class="opui-honourCard4-info opui-honourCard4-info-#{level} opui-honourCard4-info-chengqi">',p='<div class="opui-honourCard4-title-c-container"><a class="opui-honourCard4-pay opui-honourCard4-pay-cLog" href="'+a.centerPageUrl+'#vmp-tm" target="_blank">查看企业档案>></a><p>优良信誉积累,值得信任</p></div>',a.webIMUrl&&(v='<div class="opui-honourCard4-chengqizixun"><div class="opui-honourCard4-zixunicon"></div><a href="#{webIMUrl}" target="_blank">在线咨询</a></div>'));var m='<div class="opui-honourCard4'+u+'">'+p+n+e+s+h+'<div class="opui-honourCard4-cont">'+d+t+l+v+"#{info}</div></div>"+c+"</div>",A=["已获实名认证，开始积累信誉","基础信誉积累，可接洽商谈","优良信誉积累，值得信任"];if("baozhang-v"==a.type){var y;y=1==a.brandRelation?"注册人":"被许可人";var P='<p class="opui-honourCard4-bn">商标名称：'+a.brandName+"</p>";P+='<p class="opui-honourCard4-bn">商标'+y+"："+a.compName+"</p>",P+='<p class="opui-honourCard4-bn">商标权利主体：'+y+"</p>",P+='<p class="opui-honourCard4-bn">商标适用范围：'+a.brandScope+"</p>"}else if("baozhang-v-auth"==a.type){var P='<p class="opui-honourCard4-bn">被授权方：'+a.compName+"</p>";P+='<p class="opui-honourCard4-bn">授权品牌：'+a.authBrandName+"</p>",P+='<p class="opui-honourCard4-bn">业务类型：'+a.authBizType+"</p>",P+='<p class="opui-honourCard4-bn">服务范围：'+a.authBizScope+"</p>"}else{var P='<p class="opui-honourCard4-rz"><b>[信誉认证]</b> 实名认证';if(a.unfixedInfo&&a.unfixedInfo.rzItems&&a.unfixedInfo.rzItems.length>0)for(var C=0,H=a.unfixedInfo.rzItems.length;H>C&&2>C;C++)P+="-"+a.unfixedInfo.rzItems[C];P+="</p>",P+=a.unfixedInfo&&a.unfixedInfo.bzItems&&a.unfixedInfo.bzItems.length>0?'<p class="opui-honourCard4-bz"><b>[商家承诺]</b> 已参与商家承诺保障</p>':'<p class="opui-honourCard4-bz-none"><b>[商家承诺]</b> 暂未主动做出承诺保障</p>'}r.html($.format(m,{name:a.compName,level:a.vLevel,url:a.centerPageUrl,abs:A[a.vLevel-1],info:P,info_right:i,webIMUrl:a.webIMUrl}))}};A.ui.honourCard4=function(a,r){return o(a,r)}}();