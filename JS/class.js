class MarksClass{
    getTotalMarks(marks1,marks2,marks3,total){
        this.marks1=marks1;
        this.marks2=marks2
        this.marks3=marks3
        this.total=(this.marks1+this.marks2+this.marks3)
        console.log("Your Total marks are:",this.total)

    }
    getPercentage(percent){
        this.percent=((this.total/300)*100)
        console.log("Percentage is",this.percent,"%")
    }
}
    let mark=new MarksClass();
    mark.getTotalMarks(70,80,90)
    mark.getPercentage();


