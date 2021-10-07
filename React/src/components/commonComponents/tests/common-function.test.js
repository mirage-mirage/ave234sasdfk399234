import { isValidName, isValidEmail, getAge } from "../common-functions";
describe("Testing Common Functions", () => {
  test("isValidNameFunction_validName_returnTrue ", () => {
    const result = isValidName("valid name ");
    expect(result).toBeTruthy();
  });
  test("isValidNameFunction_inValidName_returnFalse ", () => {
    const result = isValidName("invalid name 1");
    expect(result).not.toBeTruthy();
  });

  test("isValidEmailFunction_validName_returnTrue ", () => {
    const result = isValidEmail("valid@email.com");
    expect(result).toBeTruthy();
  });
  test("isValidEmailFunction_inValidName_returnFalse ", () => {
    const result = isValidEmail("invalidEmail");
    expect(result).not.toBeTruthy();
  });
  test("getAgeFunction_today_returnZero ", () => {
    const result = getAge(Date.now());
    expect(result).toBe(0);
  });
});
