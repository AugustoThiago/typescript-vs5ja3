export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  birthYear: number;

  getFullName() {
    return (
      'Nome Completo: ' +
      this.firstName +
      ' ' +
      this.middleName +
      ' ' +
      this.lastName
    );
  }

  getBirthdayYear() {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    this.birthYear = currentYear - this.age;
    return 'Ano de Nascimento: ' + this.birthYear;
  }
}
