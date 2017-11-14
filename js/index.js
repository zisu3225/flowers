
/*侧边导航栏动画效果*/
$(()=>{
  var barHovers=document.querySelectorAll("li.bar_hover");
  for(var barHover of barHovers){
    barHover.onmouseover=function(){
      var erwm=this.querySelector(".erwm_code");
      erwm.style.display="block";
    };
    barHover.onmouseout=function(){
      var erwm=this.querySelector(".erwm_code");
      erwm.style.display="none";
    };
  };
  // var barul=index_bar.querySelector("ul");
  // var barHover=barul.querySelectorAll("li.bar_hover");
  // var erwm1=barHover[0].querySelector(".erwm_code");
  // var erwm2=barHover[1].querySelector(".erwm_code");
  // barul.onmouseover=function(e){
  //   if(e.clientY>=305 && e.clientY<=360){
  //     erwm1.style.display="block";
  //     erwm2.style.display="none";
  //   }else if(e.clientY>360 && e.clientY<=415){
  //     erwm2.style.display="block";
  //     erwm1.style.display="none";
  //   };
  // };
  // barul.onmouseout=function(){
  //   erwm1.style.display="none";
  //   erwm2.style.display="none";
  // };
});

$(()=>{
  //banner图轮播
  var $banner=$("#banner"),
      $bannerInds=$("[data-load=bannerInds]");
  var TRANS=300,INTERVAL=2000;
  $.get("data/index/banner.php")
    .then(data=>{
      data.push(data[0]);
      var strImgs=`<ul class="banner-img" data-load="bannerImgs">`;
      var strMsg=`<div class="banner-msg" data-load="bannerMsgs">`;
      for(var imgs of data){
        strImgs+=`          
            <li>
              <a href="${imgs.href}">
                <img src="${imgs.img}">
              </a>
            </li>
          `;
        strMsg+=imgs.cid==3?"":`<p class="til msg${imgs.cid}">${imgs.title}</p>`;
        strMsg+=imgs.cid==3?`<p class="detail msg${imgs.cid}" style="left:500px">${imgs.detail}</p>`:`<p class="detail msg${imgs.cid}">${imgs.detail}</p>`;
      };
      strImgs+=`</ul>`;
      strMsg+=`</div>`;
      $banner.prepend(strImgs+strMsg);
      var strInds="<li></li>".repeat(data.length-1);
      $bannerInds.html(strInds);
      $bannerInds.children().first().addClass("hover");
    })
    .then(()=>{
      var $bannerImgs=$("[data-load=bannerImgs]");
      var $bannerMsgs=$("[data-load=bannerMsgs]");
      var LIWIDTH=parseFloat($("#banner img").css("width"));
      $bannerImgs.css("width",LIWIDTH*$bannerImgs.find("img").length);
      var n=0;
      $bannerMsgs.children(":not(.msg1)").hide();
      function moveOnce(){
        n++;
        var left=-n*LIWIDTH;
        $bannerImgs.css("left",left);
        $bannerInds.children(":nth-child("+n+")").removeClass("hover");
        $bannerMsgs.children(".msg"+(n+1)).siblings().hide();
        if(n==$bannerImgs.find("img").length-1){
          $bannerInds.children().first().addClass("hover");
          setTimeout(()=>{
            $bannerImgs.css("transition","");
            $bannerImgs.css("left",0);
            $bannerMsgs.children(".msg"+n).hide();
            $bannerMsgs.children(".msg1").show(300);
            n=0;
            setTimeout(()=>{
              $bannerImgs.css("transition",
                "all ."+TRANS/100+"s linear");
            },100);
          },TRANS);
        }else{
          $bannerMsgs.children(`.msg${n+1}`).show(300);
          $bannerInds.children(":nth-child("+(n+1)+")").addClass("hover");
        };
      };
      var timer=setInterval(moveOnce,INTERVAL+TRANS);
    });
});
/*首页商品展示*/
$(()=>{
  $.get("data/index/package.php")
  .then(data=>{
    var html="";
    for(var f of data){
      html+=`<li>
        <ul class="d_list">
          <li>
            <img src="${f.pic}" alt="">
          </li>
          <li><a href="${f.href}">${f.title}</a></li>
          <li>¥${f.price}</li>
          <li>
            <span></span>
          </li>
          <li>${f.details}</li>
        </ul>
      </li>`
    }
    $("#package>ul.p_list").html(html);
  });
});
/*鲜花产地功能展示*/
$(()=>{
  /*鲜花产地图片文字展示*/
  var $addImg=$("#address>[data-move=add_img]");
  $addImg.on("mouseover","img",e=>{
    var $img=$(e.target);
    $img.next().css("display","block");
  }).on("mouseout","img",e=>{
  $img=$(e.target);
  $img.next().css("display","none");
  });


/*鲜花产地图片展示模态框*/
  var $motai=$("#add_motai");
  var $close=$motai.children(".close").children();
  var $bigImg=$motai.children(".big_img");
  var $prev=$motai.children(".prev");
  var $next=$motai.children(".next");
  var $title=$motai.children(".caption");
  //点击事件，显示模态框，并显示对应点击的大图
  $addImg.on("click","img",e=>{
    var $img=$(e.target);
    var smSrc=$img.attr("src");
    $motai.css("display","block");
    $bigImg.attr("src",smSrc.replace(/sm/,'lg'));
    $title.html($img.next().html());
  });
  //关闭标签点击事件
  $close.click(e=>{
    $motai.css("display","none");
  });
  //下一张照片点击事件，并且改变大图及对应的title
  $next.click(e=>{
    var $this=$(e.target);
    var currSrc=$this.siblings(".big_img").attr("src");
    var smSrc=currSrc.replace(/lg/,'sm');
    var html="";
    var n=currSrc.split(".")[0].slice(-1);
    var s=currSrc.split(".")[0].slice(0,-1);
    if(n==7){
      n=1;
      html=$("[src='"+smSrc+"']").parent().parent().children().first().children("p.add_title").html();
    }else{
      n++;
      html=$("[src='"+smSrc+"']").parent().next().children("p.add_title").html();
    };
    var newSrc=s+n+".jpg";
    $this.siblings(".big_img").attr("src",newSrc);
    $this.siblings("p.caption").html(html);
  });
  //上一张照片点击事件，并且改变大图及对应的title
  $prev.click(e=>{
    var $this=$(e.target);
    var currSrc=$this.siblings(".big_img").attr("src");
    var smSrc=currSrc.replace(/lg/,'sm');
    var html="";
    var n=currSrc.split(".")[0].slice(-1);
    var s=currSrc.split(".")[0].slice(0,-1);
    if(n==1){
      n=7;
      html=$("[src='"+smSrc+"']").parent().parent().children().last().children("p.add_title").html();
    }else{
      n--;
      html=$("[src='"+smSrc+"']").parent().prev().children("p.add_title").html();
    };
    var newSrc=s+n+".jpg";
    $this.siblings(".big_img").attr("src",newSrc);
    $this.siblings("p.caption").html(html);
  });
});
/*鲜花故事部分*/
$(()=>{
  var $story=$("#story");
  $.get("data/index/story.php")
    .then(data=>{
      var html=`<ul class="s_list">`;
      var reg=/^(.).+(.)$/g;
      for(var i in data){
        var s=data[i];
        html+=i==(data.length/3+1)?`
          </ul><ul class="s_list  show">
          <li class="c_list lf">
        <img src="${s.pic}" alt="">
        <p class="lf">${s.uname.replace(reg,"$1***$2")}</p>
        <p class="rt">${s.ctime}</p>
        <h3>${s.title}</h3>
        <p>${s.content}</p>
      </li>
        `:`
          <li class="c_list lf">
        <img src="${s.pic}" alt="">
        <p class="lf">${s.uname.replace(reg,"$1***$2")}</p>
        <p class="rt">${s.ctime}</p>
        <h3>${s.title}</h3>
        <p>${s.content}</p>
      </li>
        `;
      };
      html=html+`</ul>`;
      $story.append(html);
    })    //设置故事模块的移动
    .then(()=>{
      var i=0;
      var $uls=$("#story>ul.s_list");
      var $numbox=$("#story>ul.num_box>li");
      function moveOnce(){
        $($uls[i]).addClass("show").siblings().removeClass("show");
        $($numbox[i]).addClass("on").siblings().removeClass("on");
        i++;
        if(i==$uls.length) i=0;
      };
      var timer=setInterval(moveOnce,2000);
      /*鼠标移入移出事件*/
      $story.on("mouseover","ul.s_list",function(){
        clearInterval(timer);
        timer=null;
      });
      $story.on("mouseout","ul.s_list",function(){
        timer=setInterval(moveOnce,2000);
      });
      /*设置左右箭头点击事件*/
      $story.on("click","span.lbar",function(e){
        // e.preventDefault();
        if(i>0){
          i--;
          $($uls[i]).addClass("show").siblings().removeClass("show");
        }else{
          $($uls[$uls.length-1]).addClass("show").siblings().removeClass("show");
        };
      });
      $story.on("click","span.rbar",function(e){
        // e.preventDefault();
        console.log(1);
        if(i<$uls.length-1){
          i++;
          $($uls[i]).addClass("show").siblings().removeClass("show");
        }else{
          $($uls[0]).addClass("show").siblings().removeClass("show");
        };
      });
    });
});
/*媒体报道部分*/
$(()=>{
  $.get("data/index/report.php")
  .then((data)=>{
    var html="";
    for(var r of data){
      html+=`
      <div class="rep_box lf">
        <a href="${r.href}">
          <p class="imgbox lf">
            <img src="${r.pic}" alt="">
          </p>
          <div class="info lf">
            <p class="re_title">${r.title}</p>
            <p class="re_details">${r.subtitle}</p>
          </div>
        </a>
      </div>
      `;
    }
    $("#report>div.report_list").html(html);
  })
});

/*订花知识部分*/
$(()=>{
  $.get("data/index/knowledge.php")
    .then(data=>{
      var html="";
      for(var k of data){
        html+=`
        <li class="lf">
        <a href="${k.href}">${k.title}</a>
        </li>
        `;
      };
      $("#knowledge>ul.k_list").html(html);
    });
});

























