class ConsultationRepository {
	public consultationDao: any;
	public ConsultationDao: any;
	public consultationEntity: any;

  constructor(consultationDao) {
    this.consultationDao = consultationDao;
  }
  async findAll() {
    return await this.consultationDao.findAll();
  }

  async addNew(consultationEntity) {
    return await this.ConsultationDao.create(consultationEntity);
  }
  async findOne(consultationEntity) {
    return await this.consultationDao.findOne({
      where: { id_patien: consultationEntity.id },
    });
  }
  async update(consultationEntity) {
    return await this.consultationDao.update({
      consultationEntity,
    });
  }
  async delete(consultationEntity) {
    return await this.consultationEntity.delete({
      consultationEntity,
    });
  }
}

export default ConsultationRepository;
