

class PatientDocumentDTO {
	
  public id:number;
  public patient:number;
  public document:String;
 

  constructor({id,patient} : {id: number,patient:number,document:String}) {
    this.id=id;
    this.patient=patient;
    this.document=this.document;
   
    
    
  }
}

export default PatientDocumentDTO;
