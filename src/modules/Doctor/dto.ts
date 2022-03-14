

class DoctorDTO {
	public name: any;
	public email: any;
	public password: any;
  public id:any;

  constructor({id, email,name,password} : {id: number, email: string, name:string,password:string}) {
    this.id=id;
    this.name = name;
    this.email = email;
    this.password = password;
    
  }
}

export default DoctorDTO;
