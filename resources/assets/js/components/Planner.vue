<template>
    <div>
        <div v-if="month">
            <span v-for="{day, weekDay, weekDayShort} in month" style="margin-right: 3px">{{day}}{{weekDayShort}}.{{weekDay}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "App",
    data: function () {
      return {
        daysShort:['Su','Mo','Tu','We','Th','Fr','Sa'],
        month: []
      }
    },
    created(){
      this.getCurrentMonth()
    },
    methods:{
      getDaysInMonth(month,year){
        return new Date(year,month,0).getDate()
      },
      getCurrentMonth(){
        var date=new Date();
        var month=date.getMonth()
        var year=date.getFullYear()
        var daysInMonth=this.getDaysInMonth(month+1,year);
        var weekDay=(new Date(year,month,1)).getDay();
        //get the days of week before the first of the month
        if (weekDay>0){
          var yesterday = new Date(date.getTime());
          yesterday.setDate(yesterday.getDate() - weekDay - 2);
          while (weekDay>0){
            yesterday.setDate(yesterday.getDate() + 1);
            this.month.push({
              day:yesterday.getDate(),
              weekDay:yesterday.getDay(),
              weekDayShort:this.daysShort[yesterday.getDay()]
            });
            weekDay--;
          }
        }
        for(var i=1;i<=daysInMonth;i++){
          var weekDay=(new Date(year,month,i)).getDay();
          var weekDayShort=this.daysShort[weekDay];
          this.month.push({
            day:i,
            weekDay:weekDay,
            weekDayShort:weekDayShort
          });
        }
        //get the days of week after the end of the month

      }
    }
  }
</script>

<style scoped>

</style>