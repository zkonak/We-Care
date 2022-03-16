import { any } from "sequelize/lib/operators";
import { mailerService } from "../../../libs";
import { Patient, patient } from "../../../modules/Patient/entity";
import PatientService from "../../../modules/Patient/service";
import PatientRepositoryMocks from "../mocks/patientRepository.mocks";

const patientService = new PatientService(
  new PatientRepositoryMocks(),
  mailerService
);

const datatest: patient = { email: "machin@gmail.com" };

describe("patient use case", () => {
  describe("add patient:use case", () => {
    it("should show a new patient", async () => {
      const result = await patientService.register(datatest);
      expect(result.email).toBe("machin@gmail.com");
    });
  });

  describe("find a patient:use case", () => {
    it("should find a patient", async () => {
      const patients = await patientService.getAll();
      expect(patients[0].email).toBe("machin@gmail.com");
    });
  });
});
