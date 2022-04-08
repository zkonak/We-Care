

class DrugDTO {
	public name: any;
	
  public id:any;

  constructor({id,name} : {id: number, name:string}) {
    this.id=id;
    this.name = name;
    
    
  }
}

export default DrugDTO;
