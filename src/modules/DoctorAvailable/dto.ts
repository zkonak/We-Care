

class DoctorAvailableDTO {
	
  public id:number;
  public doctor:number;
  public date:Date;
  public timeStart:Date;
  public timeFinish:Date;

  constructor({id,doctor,date,timeStart,timeFinish} : {id: number,doctor:number,date:Date,timeStart:Date,timeFinish:Date}) {
    this.id=id;
    this.doctor=doctor;
    this.date=date;
    this.timeStart=timeStart;
    this.timeFinish=timeFinish;
    
    
  }
}

export default DoctorAvailableDTO;
