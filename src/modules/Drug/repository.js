class DrugRepository {
  constructor(drugDao) {
    this.drugDAO = drugDao;
  }

  async findAll() {
    return await this.drugDAO.findAll();
  }

  async findOne(drugEntity) {
    return await this.drugDAO.findOne({ where: { idd: drugEntity.id } });
  }

  async addNew(drugEntity) {
    return await this.drugDAO.create(drugEntity);
  }

  async update(drugEntity) {
    return await this.drugDAO.update(drugEntity);
  }

  async delete(drugEntity) {
    return await this.drugDAO.delete(drugEntity);
  }

  async findByName(drugEntity) {
    return await this.drugDAO.findOne({ where: { Name: drugEntity.name } });
  }
}

//requetes sql
