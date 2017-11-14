SET NAMES UTF8;
DROP DATABASE IF EXISTS flowers;
CREATE DATABASE flowers CHARSET=UTF8;
USE flowers;

/*用户信息表*/
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/****首页轮播广告商品****/
CREATE TABLE index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  detail VARCHAR(64),
  href VARCHAR(128)
);

/****首页商品****/
CREATE TABLE index_flower(
  ifid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128)
);

/***首页鲜花故事***/
CREATE TABLE index_story(
  isid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  pic VARCHAR(128),
  title VARCHAR(64),
  content VARCHAR(128),
  ctime VARCHAR(24)
);

/***首页媒体报道***/
CREATE TABLE index_report(
  irid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(64),
  subtitle VARCHAR(200),
  href VARCHAR(128)
);

/***首页订花知识***/
CREATE TABLE index_knowledge(
  ikid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  href VARCHAR(128)
);

/*********************插入数据******************/
/*用户信息表*/
INSERT INTO user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '叮叮', '0'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '豆豆', '0'),
(NULL, 'tom', '123456', 'tom@qq.com', '13501234569', 'img/avatar/default.png', '汤姆', '1'),
(NULL, 'mary', '123456', 'mary@qq.com', '13501234569', 'img/avatar/default.png', '玛丽', '0'),
(NULL, 'kate', '123456', 'kate@qq.com', '13501234569', 'img/avatar/default.png', '凯特', '0');

/**首页轮播广告商品**/
INSERT INTO index_carousel VALUES
(NULL,'img/index/banner/banner1.jpg','用鲜花点亮生活','用每一朵鲜花记录生活的点滴 让喜欢成为习惯','#'),
(NULL,'img/index/banner/banner2.jpg','意外的色彩和芬芳','幸福的生活总是格外相近 意外的惊喜却是难逢相遇','#'),
(NULL,'img/index/banner/banner3.jpg','每周一花的小幸福','一周单纯美好，一心一意呵护自然恩赐','#');

/******首页商品******/
INSERT INTO index_flower VALUES
(NULL,'Nature自然系列 | 单品版','99元/4束,1周1束,送花瓶','img/index/product/1497877298388809.png',99,'#'),
(NULL,'Nature自然系列 | 混合版','139元/4束,每周1束,包邮赠花瓶','img/index/product/1497875265398062.png',139,'#'),
(NULL,'Nature自然系列 | Mix版','特价99元/4束,单品混合混发','img/index/product/1497877184689284.png',99,'#'),
(NULL,'Nature自然系列 | Pro版','限时169元/4束,1周1束,送花瓶','img/index/product/1497877103956078.png',169,'#');

/***首页鲜花故事***/
INSERT INTO index_story VALUES
(NULL,1,'img/index/story/1.png','Nature自然系列 | MIX版','每周六一起床就能收到花，周周准时，好开心呀。送来的花都很新鲜，包装上也很用心，损坏的花材很少。物流靠谱，给快递小哥点赞','2017-06-15'),
(NULL,2,'img/index/story/2.png','Nature自然系列 | PRO版','这是一次送来的，花量好大，一个花瓶都插不下，多的花材被我胡乱装到一个花瓶里，是不是也挺好看的~~','2017-03-17'),
(NULL,3,'img/index/story/3.png','WOW肯尼亚玫瑰系列','肯尼亚玫瑰真的和市面上见到的普通玫瑰不一样，超大超美，这种颜色的玫瑰我之前在国内都没见过，炒鸡惊喜。','2017-03-24'),
(NULL,4,'img/index/story/4.png','Nature自然系列 | 混合版','今天收到了美美的向日葵和玫瑰，上星期的康乃馨还开的很好，我就把两周的放在了一起，红色康乃馨到现在还是活力满满，跟刚送来的一样鲜活。','2017-05-27'),
(NULL,5,'img/index/story/5.png','Nature自然系列 | PRO版','每次送来的花都很新鲜，颜色搭配的也好看，关键是还有特别详细的插花养护攻略，跟着学学插花。每周的花卡我都舍不得扔，到现在都攒了好多~','2017-05-12'),
(NULL,6,'img/index/story/6.png','Nature自然系列 | 单品版','羞答答的小绣球 ，颜色好美，萌得心都化了。都说绣球不好养，看了公众号上的绣球养护攻略，开一周妥妥的~~','2017-07-14');

/***首页媒体报道***/
INSERT INTO index_report VALUES
(NULL,'img/index/report/1502097479395689.jpeg','高圆圆投的鲜花电商“花点时间”完成B轮数亿融资 经纬参投','鲜花电商企业花点时间已完成数亿元B轮融资，投资方包括老牌投资机构经纬创投等。','#'),
(NULL,'img/index/report/1498459422619475.jpeg','花点时间不畏初夏升温挑战 全程“冷仓+冷链”为鲜花护航','导语：鲜花电商不仅考验品牌的美学能力，更考验供应链管理的能力，而冷链则是其中的重要环节。初夏来袭，生活鲜花明星品牌“花点时间”从物流到生产全程“冷链+冷仓”，即便在室外30°以上高温时，鲜花也能以“休眠”状态新鲜送达。','#'),
(NULL,'img/index/report/1497867180348416.jpeg','花点时间“我爱你”主题花热卖 母亲节流行晒花晒妈妈','而相比之下，鲜花电商平台的优势就显现出来了，记者在花点时间平台看到，不仅可以提前预定，在母亲节当天送达，价位上也没有随着节日市场而大起大落。花束价格仍然以99元、169包月，而最高端的母亲节主题花价格也在每束299元，价格非常稳定。','#'),
(NULL,'img/index/report/1497853068504294.jpeg','直面优惠券事件 花点时间的“小失”与“大得”','态度即命运，格局即结局。一家企业对待用户的态度决定了它能走得多远，一个创始人的格局决定了企业的长远结局。','#'),
(NULL,'img/index/report/1498458539226077.png','【首发】高圆圆参与投资花点时间，明星入股成为消费品牌趋势','礼品鲜花每年市场规模在 1000 亿左右，且中国鲜花市场的日常消费刚刚兴起，业内人士认为中国鲜花的日常消费市场至少有上千亿的成长空间。','#'),
(NULL,'img/index/report/1497841430108082.jpeg','【花点时间】北上广职业女性幸福指数报告：过半女性买花送自己','近日，生活方式品牌电商 [花点时间]发布《从“每周一花”看北上广职业女性幸福指数报告》，对不同地区、不同行业职业女性的订花行为展开分析，发现在鲜花订阅群体中，女性占比高达78.8%，其中过半女性给自己买花。','#');

/***首页订花知识***/
INSERT INTO index_knowledge VALUES
(NULL,'谁说绣球花不好养？这样做能...','#'),
(NULL,'热情似火开春必备的朱顶红养...','#'),
(NULL,'并不是所有的花材都是先拆包...','#'),
(NULL,'为什么别人的芍药可以开成一...','#'),
(NULL,'并不是所有的鲜花都要用同一...','#'),
(NULL,'除了深水养护，想要养好芍药...','#');