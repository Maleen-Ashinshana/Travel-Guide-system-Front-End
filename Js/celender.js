document.addEventListener('DOMContentLoaded',function (){
    const datePiker=document.getElementById('calendar');
    const endDatePiker=document.getElementById('calendar-end');
    const today=new Date().toISOString().split('T')[0];

    datePiker,endDatePiker.min=today;

    endDatePiker,datePiker.addEventListener('input',function (){
        if (endDatePiker,datePiker.value<today){
            endDatePiker,datePiker.value=today;
        }
    });
});