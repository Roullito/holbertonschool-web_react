/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName[0];
    return "".concat(firstLetter, ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQU10QixJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsSUFBTSxZQUFZLEdBQXlCLFVBQUMsU0FBUyxFQUFFLFFBQVE7SUFDN0QsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sVUFBRyxXQUFXLGVBQUssUUFBUSxDQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBTUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFpQnpDO0lBSUUsc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG4gIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICByZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgY29udHJhY3Q6IGZhbHNlLFxufTtcblxuY29uc29sZS5sb2codGVhY2hlcjMpO1xuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5jb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICBudW1iZXJPZlJlcG9ydHM6IDE3LFxufTtcbmNvbnNvbGUubG9nKGRpcmVjdG9yMSk7XG5cbmNvbnN0IHByaW50VGVhY2hlcjogUHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4ge1xuICBjb25zdCBmaXJzdExldHRlciA9IGZpcnN0TmFtZVswXTtcbiAgcmV0dXJuIGAke2ZpcnN0TGV0dGVyfS4gJHtsYXN0TmFtZX1gO1xufTtcblxuaW50ZXJmYWNlIFByaW50VGVhY2hlckZ1bmN0aW9uIHtcbiAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zb2xlLmxvZyhwcmludFRlYWNoZXIoXCJKb2huXCIsIFwiRG9lXCIpKTtcblxuaW50ZXJmYWNlIFBlcnNvbkludGVyZmFjZSB7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbn1cblxuY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gIH1cblxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkN1cnJlbnRseSB3b3JraW5nXCI7XG4gIH1cblxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9