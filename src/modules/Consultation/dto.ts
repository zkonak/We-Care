import { Patient } from "../Patient/entity";

class ConsultationDtO {
  public id: number;
  public date: Date;
  public hour: string;
  public valid: boolean;
  public created_at: Date;
  public updated_at: Date;

  constructor({
    id,
    date,
    hour,
    valid,
    created_at,
    updated_at,
  }: {
    id: number;
    date: Date;
    hour: string;
    valid: boolean;
    created_at: Date;
    updated_at: Date;
  }) {
    this.id = id;
    this.date = date;
    this.hour = hour;
    this.valid = valid;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default ConsultationDtO;
