

class AllergyDTO {
	
  public id:number;
  public name:string;

  constructor({id,name} : {id: number,name:string}) {
    this.id=id;
    this.name=name;
    
    
  }
}

export default AllergyDTO;
