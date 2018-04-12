
module.exports ={
    config:function ljconfig(id) {
        var city_id
        switch (id){
            case '北京':
                city_id = '110000'
                break;
            case '上海':
                city_id = '310000';
                break;
            case '深圳':
                city_id = '440300';
                break;
            case '成都':
                city_id = '510100';
                break;
            case '南京':
                city_id = '320100';
                break;
            case '杭州':
                city_id = '330100';
                break;
            case '青岛':
                city_id = '370200';
                break;
            case '大连':
                city_id = '210200';
                break;
            case '厦门':
                city_id = '350200';
                break;
            case '武汉':
                city_id = '420100';
                break;
            case '重庆':
                city_id = '500000';
                break;
            case '长沙':
                city_id = '430100';
                break;
            case '济南':
                city_id = '370101';
                break;
            case '广州':
                city_id = '440100';
                break;
            case '佛山':
                city_id = '440600';
                break;
            case '烟台':
                city_id = '370600';
                break;
            case '珠海':
                city_id = '440400';
                break;
            case '苏州':
                city_id = '320500';
                break;
            case '太原':
                city_id = '140100';
                break;
            case '无锡':
                city_id = '320200';
                break;
            case '海口':
                city_id = '460100';
                break;
            case '琼海':
                city_id = '469002';
                break;
            case '万宁':
                city_id = '469006';
                break;
            case '文昌':
                city_id = '469005';
                break;
            case '西双版纳':
                city_id = '532800';
                break;
            case '大理':
                city_id = '532900';
                break;
            case '定安':
                city_id = '469021';
                break;
            case '澄迈':
                city_id = '469023';
                break;
            case '临高':
                city_id = '469024';
                break;
            case '琼中':
                city_id = '469030';
                break;
            case '儋州':
                city_id = '469003';
                break;
            case '五指山':
                city_id = '469001';
                break;
            case '保亭':
                city_id = '469029';
                break;
            case '乐东':
                city_id = '469027';
                break;
            case '西安':
                city_id = '610100';
                break;
            case '石家庄':
                city_id = '130100';
                break;
            case '东莞':
                city_id = '441900';
                break;
            case '合肥':
                city_id = '340100';
                break;
            case '中山':
                city_id = '442000';
                break;
            case '沈阳':
                city_id = '210100';
                break;
            case '廊坊':
                city_id = '131000';
                break;
            case '惠州':
                city_id = '441300';
                break;
            case '郑州':
                city_id = '410100';
                break;
            case '陵水':
                city_id = '469028';
                break;
            case '三亚':
                city_id = '460200';
                break;
            case '天津':
                city_id = '120000';
                break;
        }
        return city_id
    }
}
