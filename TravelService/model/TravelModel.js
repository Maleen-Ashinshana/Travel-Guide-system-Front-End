export class TravelModel{

    constructor(start_date,end_date,no_of_adult,no_of_child,need_a_guide_or_no,total_hed_count,isWithGuide,package_total,vehicle_id,guide_id,user,hotel_id,area_list,travelPackage) {
        this.start_date=start_date;
        this.end_date=end_date;
        this.no_of_adult=no_of_adult;
        this.no_of_child=no_of_child;
        this.need_a_guide_or_no=need_a_guide_or_no;
        this.total_hed_count=total_hed_count;
        this.isWithGuide=isWithGuide;
        this.package_total=package_total;
        this.vehicle_id=vehicle_id;
        this.guide_id=guide_id;
        this.user=user;
        this.hotel_id=hotel_id;
        this.area_list=area_list;
        this.travelPackage=travelPackage;
    }
}