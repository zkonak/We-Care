import { mailerService } from "../../../../libs";
import { patient, Patient } from "../../entity";
import PatientService from "../../service";
import PatientRepositoryMocks from "../mocks/patientRepository.mocks";

const patientService = new PatientService(
  new PatientRepositoryMocks(),
  mailerService
);

const datatest: patient = {
  email: "machin@gmail.com",
  password: "test",
};

describe("patient use case", () => {
  describe("add patient:use case", () => {
    it("should show a new patient", async () => {
      const result = await patientService.register(datatest);
      expect(result.email).toBe("machin@gmail.com");
    });
  });

  it("Should throw a error if patientdata is empty or null", async () => {
    try {
      await patientService.register({ email: "", password: "" });
    } catch (e: any) {
      expect(400);
      expect(e.message).toBe("Missing required email and password fields");
    }
  });

  describe("find a patient:use case", () => {
    it("should find a patient", async () => {
      const patients = await patientService.getAll();
      expect(patients[0].email).toBe("machin@gmail.com");
    });
  });
});
