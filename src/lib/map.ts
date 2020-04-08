import echarts from 'echarts'

interface Local {
  province: [string,string];
  city: string;
}

export function importSet(local: Local) { require( 'echarts/map/js/province/'+local.province[0]+'.js') }

 export function optionMap(local: Local) {
  return {
    series:[{
      type:'map',
       map: local.province[1],
       data:[
          { name: local.city, selected: true,}, 
       ],
       label:{
       },
       zoom :1.2
     }],
  }
}

//初始化echarts实例
export function setEcharts(Element: HTMLCanvasElement ,  local: Local){
  
  const myChart = echarts.init(Element);
  myChart.setOption(optionMap(local));
  myChart.on('click', function (params: any) {
    console.log(params);
    console.log(local);
    local.city = params.name
    local.province[0] = 'changde'
  });
}



 

