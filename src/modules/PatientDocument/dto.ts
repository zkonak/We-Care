

class PatientDocumentDTO {
	
  public id:number;
  public patient:number;
  public document:"longblob";
 

  constructor({id,patient} : {id: number,patient:number,document:"longblob"}) {
    this.id=id;
    this.patient=patient;
    this.document=this.document;
   
    
    
  }
}

export default PatientDocumentDTO;
